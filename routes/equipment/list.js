const EquipmentController = require("../../controllers/equipment");

const route = async (req, res) => {
  const list = await EquipmentController.list();

  return res.status(200).send({ ...list });
};

module.exports = route;
