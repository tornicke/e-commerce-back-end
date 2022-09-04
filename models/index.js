// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category

// Define a Category as having one License to create a foreign key in the `license` table
Category.hasOne(Product, {
  foreignKey: "category_id",
  // When we delete a Category, make sure to also delete the associated License.
  //onDelete: "CASCADE", //!
});

// We can also define the association starting with License
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
