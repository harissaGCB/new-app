import fs from "fs";

// model
import story from "../models/story.js";

export const getStories = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 1000000000000000;
    const offset = (page - 1) * pageSize;
    const totalCount = await story.count();
    const data = await story.findAll({
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

export const createStory = async (req, res) => {
  const { name, type } = req.body;
  let imgUrl;
  try {
    if (req.files.imgUrl) imgUrl = req.files.imgUrl[0].filename;
    const data = await story.create({
      name,
      type,
      imgUrl,
    });

    return res
      .status(200)
      .json({ message: "Create successfully.", data: data });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const updatStory = async (req, res) => {
  const { id } = req.params;
  const { name, type } =
    req.body;
  try {
    const data = await story.findByPk(id);
    data.name = name ? name : data.name;
    data.type = type ? type : data.type;
    if (req.files.imgUrl) {
      if (data.imgUrl !== "default.png") {
        if (fs.existsSync("uploads/story/" + data.imgUrl))
          fs.unlinkSync("uploads/story/" + data.imgUrl);
      }
      data.imgUrl = req.files.imgUrl[0].filename;
    }
    await data.save();

    return res.status(200).json({ message: "Edit successfully." });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const deleteStory = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await story.findByPk(id);
    const imgUrl = data.imgUrl;

    if (imgUrl !== "default.png") {
      if (fs.existsSync("uploads/story/" + imgUrl))
        fs.unlinkSync("uploads/story/" + imgUrl);
      data.imgUrl = "default.png";
    }
    await data.save();
    await story.destroy({ where: { id: id } });

    return res.status(200).json({ message: "Deleted successfully." });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const deleteImgStory = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await about.findByPk(id);

    if (data) {
      const imgUrl = data.imgUrl;

      if (imgUrl !== "default.png") {
        try {
          if (fs.existsSync("uploads/story/" + imgUrl))
            fs.unlinkSync("uploads/story/" + imgUrl);
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
