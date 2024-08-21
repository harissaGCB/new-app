import fs from "fs";

// model
import about from "../models/about.js";

export const getAbouts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 1000000000000000;
    const offset = (page - 1) * pageSize;
    const totalCount = await about.count();
    const data = await about.findAll({
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

export const createAbout = async (req, res) => {
  const { titleEn, titleAr, descriptionEn, descriptionAr, link } = req.body;
  let imgUrl;
  try {
    if (req.files.imgUrl) imgUrl = req.files.imgUrl[0].filename;
    const data = await about.create({
      titleEn,
      titleAr,
      descriptionAr,
      descriptionEn,
      link,
      imgUrl,
    });

    return res
      .status(200)
      .json({ message: "Create successfully.", data: data });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const updateAbout = async (req, res) => {
  const { id } = req.params;
  const { titleEn, titleAr, descriptionAr, descriptionEn, code, link } =
    req.body;
  try {
    const data = await about.findByPk(id);
    data.titleEn = titleEn ? titleEn : data.titleEn;
    data.titleAr = titleAr ? titleAr : data.titleAr;
    data.descriptionEn = descriptionEn ? descriptionEn : data.descriptionEn;
    data.descriptionAr = descriptionAr ? descriptionAr : data.descriptionAr;
    data.link = link ? link : data.link;
    if (req.files.imgUrl) {
      if (data.imgUrl !== "default.png") {
        if (fs.existsSync("uploads/about/" + data.imgUrl))
          fs.unlinkSync("uploads/about/" + data.imgUrl);
      }
      data.imgUrl = req.files.imgUrl[0].filename;
    }
    await data.save();

    return res.status(200).json({ message: "Edit successfully." });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const deleteAbout = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await about.findByPk(id);
    const imgUrl = data.imgUrl;

    if (imgUrl !== "default.png") {
      if (fs.existsSync("uploads/about/" + imgUrl))
        fs.unlinkSync("uploads/about/" + imgUrl);
      data.imgUrl = "default.png";
    }
    await data.save();
    await about.destroy({ where: { id: id } });

    return res.status(200).json({ message: "Deleted successfully." });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const deleteImgAbout = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await about.findByPk(id);

    if (data) {
      const imgUrl = data.imgUrl;

      if (imgUrl !== "default.png") {
        try {
          if (fs.existsSync("uploads/about/" + imgUrl))
            fs.unlinkSync("uploads/about/" + imgUrl);
        } catch (error) {
          console.log({ message: error.message });
        }
        data.imgUrl = "default.png";
      }
      await data.save();
    }

    return res.status(200).json({ message: "deleted successfuly" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
