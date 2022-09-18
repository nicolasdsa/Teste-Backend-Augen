const AnalisysController = require("../../controllers/analysis");

const route = async (req, res) => {
  const list = await AnalisysController.list();

  return res.status(200).send({ ...list });
};

module.exports = route;
