import fs from "fs";

// model
import supported from "../models/supported.js";

export const getSupporteds = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 1000000000000000;
    const offset = (page - 1) * pageSize;
    const totalCount = await supported.count();
    const data = await supported.findAll({
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

export const createSupported = async (req, res) => {
  let imgUrl;
  try {
    if (req.files.imgUrl) imgUrl = req.files.imgUrl[0].filename;
    const data = await supported.create({
      imgUrl,
    });

    return res
      .status(200)
      .json({ message: "Create successfully.", data: data });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const deleteSupported = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await supported.findByPk(id);
    const imgUrl = data.imgUrl;

    if (imgUrl !== "default.png") {
      if (fs.existsSync("uploads/supported/" + imgUrl))
        fs.unlinkSync("uploads/supported/" + imgUrl);
    }
    await supported.destroy({ where: { id: id } });

    return res.status(200).json({ message: "Deleted successfully." });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};
