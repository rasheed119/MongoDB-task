//1.Find all the information about each products
db.products.find({});

//2.Find the product price which are between 400 to 800
db.products.find({
    product_price: {
      $gte: 400,
      $lte: 800
    }
  });

//3.Find the product price which is not between 400 and 600
db.products.find({
    $or: [
      { product_price: { $lt: 400 } },
      { product_price: { $gt: 600 } }
    ]
  });

//4.List the four products with a price greater than 500
db.products.find({
    product_price: { $gt: 500 }
  }).limit(4);

//5.Find the product name and product material of each product
db.products.find({}, {
    product_name: 1,
    product_material: 1
  });

//6.Find the product with a row ID of 10
db.products.findOne({
    id: "10"
  });

//7.Find only the product name and product material
db.products.find({}, {
    product_name: 1,
    product_material: 1,
    _id: 0
  });

//8.Find all products that contain the value "soft" in the product material
db.products.find({
    product_material: /soft/i
  });

//9.Find products that contain the product color "indigo" and the product price of 492.00
db.products.find({
    product_color: "indigo",
    product_price: 492.00
  });

//10.Delete the products with the same product price value
db.products.deleteMany({
    product_price: { $eq: product_price }
  });
  