// services/productService.js
const axios = require("axios");

const BASE_URL = process.env.MOCK_API || "http://localhost:3001";

const getSimilarProductIds = async (productId) => {
  const response = await axios.get(
    `${BASE_URL}/product/${productId}/similarids`
  );
  return response.data;
};

const getProductById = async (productId) => {
  const response = await axios.get(`${BASE_URL}/product/${productId}`);
  return response.data;
};

module.exports = {
  getSimilarProductIds,
  getProductById,
};
