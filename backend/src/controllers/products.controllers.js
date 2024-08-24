import { Products } from "../models/products.models.js";

const handleCreateProduct = async (req, res) => {
  const { title, price, productImage, category, description } = req.body;
  try {
    const product = await Products({
      title,
      price,
      productImage,
      category,
      description,
    });

    await product.save();
    res.status(201).json({ message: "Product created successfully!", product });
  } catch (error) {
    res.status(500).json({ message: "Error creating product!", error });
  }
};

const handleUpdateProduct = async (req, res) => {
  const { title, price, category, description } = req.body;
  const productImage = req.file ? req.file.path : null;

  try {
    const updatedProduct = { title, price, category, description };
    if (productImage) updatedData.productImage = productImage;
    const product = await Products.findByIdAndUpdate(
      req.params.id,
      updatedProduct
    );
    res.status(201).json({ message: "Product created successfully!", product });
  } catch (error) {
    res.status(500).json({ message: "Error updating product!", error });
  }
};

const handleGetAllProduct = async (req, res) => {
  try {
    const products = await Products.find();
    if (!products) {
      return res.status(404).json({ message: "Product not found!" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error getting all products!", error });
  }
};

const handleGetSingleProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error getting single product!", error });
  }
};

export {
  handleCreateProduct,
  handleGetAllProduct,
  handleGetSingleProduct,
  handleUpdateProduct,
};
