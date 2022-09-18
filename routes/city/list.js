const CityController = require("../../controllers/city");

const route = async (req, res) => {
  const list = await CityController.list();

  return res.status(200).send({ ...list });
};

module.exports = route;
