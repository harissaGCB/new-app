//models
import role from "../models/role.js";

export const getRoles = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Get the requested page number from query parameter, default to 1
    const pageSize = parseInt(req.query.pageSize) || 1000000000000000; // Get the requested page size from query parameter, default to 10
    const offset = (page - 1) * pageSize;
    const totalCount = await role.count(); // Get the total count of location
    const data = await role.findAll({
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

export const createRole = async (req, res) => {
  try {
    const data = await role.create(req.body);

    return res
      .status(200)
      .json({ message: "Create successfully.", data: data });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const deleteRole = async (req, res) => {
  let id = req.params.id;

  try {
    await role.destroy({ where: { id } });

    return res.status(200).json({ message: "Deleted successfuly" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
