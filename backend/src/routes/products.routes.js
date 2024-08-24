import express from "express";
import {
  handleCreateProduct,
  handleGetAllProduct,
  handleGetSingleProduct,
  handleUpdateProduct,
} from "../controllers/products.controllers.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.post(
  "/createproduct",
  upload.single("productImage"),
  handleCreateProduct
);
router.put("/:id", upload.single("productImage"), handleUpdateProduct);
router.get("/", handleGetAllProduct);
router.get("/:id", handleGetSingleProduct);

export default router;
