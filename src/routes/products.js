const Product = require('../models/product');
const CustomError = require('../utils/customError');

module.exports = (app) => {
  app.get('/products/name/:name', (req, res) => {
    const { name } = req.params;

    Product.find({ name: new RegExp(name, 'i') }, (err, products) => {
      if (products.length > 0) {
        res.send(products);
      } else {
        const customError = new CustomError(404, 'No product was found!');
        res.status(customError.status).send(customError);
      }
    });
  });
};
