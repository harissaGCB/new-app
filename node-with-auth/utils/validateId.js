export const validateId = async (req, res, next, model) => {
  try {
    const found = await model.findOne({ where: { id: req.params.id } });
    if (!found) {
      return res.status(400).json({ message: `${model.name} with id ${req.params.id} not found.` });
    }
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message, });
  }
};