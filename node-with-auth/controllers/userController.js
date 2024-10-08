import bcrypt from "bcrypt";
import moment from "moment";

//models
import user from "../models/user.js";
import location from "../models/location.js";
import titleRole from "../models/titleRole.js";
import role from "../models/role.js";

//utils
import { createToken, decodeToken } from "../utils/token.js";
import { generatepassword } from "../utils/generatepassword.js";

//views
import password from "../views/password.js";
import { verify } from "../views/verify.js";

//utils
import { userNodemailer } from "../utils/nodemailer.js";

export const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 1000000000000000;
    const offset = (page - 1) * pageSize;
    const totalCount = await user.count();
    const data = await user.findAll({
      offset,
      limit: pageSize,
    });
    const totalPages = Math.ceil(totalCount / pageSize);

    return res.status(200).json({
      message: "Fetched successfully.",
      data: data,
      pageInfo: {
        page: page,
        pageSize: pageSize,
        totalCount: totalCount,
        totalPages: totalPages,
      },
    });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const registerUser = async (req, res) => {
  const {
    password,
    fullName,
    phoneNumber,
    gender,
    dateOfBirthday,
    locationId,
    email,
  } = req.body;
  let token, exist, hashedPassword, data, imgUrl;

  try {
    if (req.files && req.files.imgUrl) imgUrl = req.files.imgUrl[0].filename;

    if (!email) return res.status(400).json({ message: "Email is required!" });

    exist = await user.findOne({ where: { email: email } });
    if (exist)
      return res.status(400).json({ message: "Email already exists!" });

    if (!fullName)
      return res.status(400).json({ message: "Full Name is required!" });

    if (!gender)
      return res
        .status(400)
        .json({ message: "Gender is required (Male or Female only)!" });

    if (password) {
      if (password.length < 6)
        return res.status(400).json({
          message: "Password must be greater than or equal to 6 characters!",
        });
    } else return res.status(400).json({ message: "Password is required!" });

    if (!dateOfBirthday)
      return res
        .status(400)
        .json({ message: "Date of Birth Day is required!" });

    const dateOfBirth = moment(dateOfBirthday, "YYYY-MM-DD", true);
    if (!dateOfBirth.isValid()) {
      return res
        .status(400)
        .json({ message: "Invalid date format for Date of Birth!" });
    }

    if (!locationId)
      return res.status(400).json({ message: "Location is required!" });

    hashedPassword = await bcrypt.hash(password, 10);
    data = await user.create({
      fullName,
      phoneNumber,
      gender,
      yearOfBirthday: dateOfBirth.toDate(),
      locationId,
      email,
      titleRoleId: 3,
      password: hashedPassword,
      imgUrl,
    });

    token = createToken({
      id: data.id,
      email: data.email,
      role: data.role,
    });

    userNodemailer({
      email: email,
      subject: "Please verify your email",
      html: verify(`${process.env.DOMAIN}verifiedSignUp/${token}`),
    });

    return res.status(200).json({
      message: "Sending link to verify by email",
      data: { id: data.id, role: data.role, email: data.email },
    });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const myInfo = async (req, res) => {
  const id = req.userData.id;

  try {
    const data = await user.findByPk(id, {
      include: [
        { model: location },
        { model: titleRole, include: { model: role } },
      ],
    });

    return res.status(200).json({ message: "Fetched successfully.", data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  let token, isPasswordCorrect;

  try {
    const data = await user.findOne({
      where: { email },
      include: [
        { model: location },
        { model: titleRole, include: { model: role } },
      ],
    });

    if (!data)
      return res.status(400).json({ message: "Email does not exist!" });

    if (data) isPasswordCorrect = await bcrypt.compare(password, data.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials." });

    if (data)
      token = createToken({
        id: data.id,
        email: data.email,
        role: data.role,
      });

    // check if the email is verified
    if (data) {
      if (!data.isVerified) {
        userNodemailer({
          email: email,
          subject: "Please verify your email",
          html: verify(process.env.DOMAIN + "verifiedSignUp/" + token),
        });

        return res
          .status(400)
          .json({ message: `Email is not verified to verify check ${email}.` });
      }
    }

    return res.status(200).json({
      data: data,
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const verifiedSignUp = async (req, res) => {
  const token = req.params.token;
  let data, decode;

  try {
    decode = decodeToken(token);
    data = await user.findByPk(decode.id);
    data.isVerified = true;
    data.save();

    return res.status(200).json({
      message: "Your account is verified",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const forgetPassword = async (req, res) => {
  const { email } = req.body;
  let data, code, hashedPassword;

  try {
    data = await user.findOne({ where: { email } });
    if (!data)
      return res.status(400).json({ message: "Email does not exist!" });

    code = generatepassword(6);
    hashedPassword = await bcrypt.hash(code, 10);
    if (data) {
      data.password = hashedPassword;
      data.save();
    }

    userNodemailer({
      email: email,
      subject: "Please verify your email",
      html: password(code),
    });

    return res
      .status(200)
      .json({ message: `The new password was send by ${email} successfully` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const changePassword = async (req, res) => {
  const { id } = req.userData;
  const { oldPassword, newPassword } = req.body;
  try {
    if (newPassword.length < 6)
      return res.status(400).json({
        message: "Password must be gratear then or equal to 6 Element!",
      });
    const data = await user.findByPk(id);
    const isPasswordCorrect = await bcrypt.compare(oldPassword, data.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Your old password not matched" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    data.password = hashedPassword;
    data.save();

    return res
      .status(200)
      .json({ message: "Your Password changed successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
