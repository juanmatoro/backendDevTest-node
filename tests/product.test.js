const request = require("supertest");
const app = require("../app");

describe("GET /product/:productId/similar", () => {
  it("should return similar products for valid productId", async () => {
    const response = await request(app).get("/product/1/similar");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("should handle non-existent productId gracefully", async () => {
    const response = await request(app).get("/product/999/similar");
    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty("error");
  });
});
