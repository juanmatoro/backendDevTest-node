// controllers/productController.js
const express = require("express");
const router = express.Router();
const productService = require("../services/productService");

router.get("/:productId/similar", async (req, res) => {
  const { productId } = req.params;

  try {
    const similarIds = await productService.getSimilarProductIds(productId);

    const similarProducts = await Promise.all(
      similarIds.map(async (id) => {
        try {
          return await productService.getProductById(id);
        } catch (error) {
          // Si el error es 404, simplemente ignoramos el producto
          if (error.response && error.response.status === 404) {
            return null;
          }

          // Si es otro tipo de error, puedes loguearlo
          console.error(`❌ Error al obtener producto ${id}:`, error.message);
          return null;
        }
      })
    );

    // Filtramos los nulls (productos no encontrados o con error)
    const filtered = similarProducts.filter((p) => p !== null);

    return res.json(filtered);
  } catch (error) {
    // Si falla la petición principal a similarids
    const status = error.response?.status || 500;
    const message =
      error.response?.data?.message || "Error al obtener productos similares";

    return res.status(status).json({ error: message });
  }
});

module.exports = router;
