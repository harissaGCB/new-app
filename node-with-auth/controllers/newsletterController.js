//models
import newsletter from "../models/newsletter.js";

export const getNewsletters = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 1000000000000000;
    const offset = (page - 1) * pageSize;
    const totalCount = await newsletter.count();
    const data = await newsletter.findAll({
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

export const createNewsletter = async (req, res) => {
  try {
    const data = await newsletter.create({
      email: req.body.email,
    });

    return res
      .status(200)
      .json({ message: "Create successfully.", data: data });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const deleteNewsletter = async (req, res) => {
  const { id } = req.params;
  try {
    await newsletter.destroy({ where: { id: id } });

    return res.status(200).json({ message: "Deleted successfully." });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};
