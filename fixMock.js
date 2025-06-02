const fs = require("fs");
const path = "./shared/simulado/mocks.json";

const mocks = JSON.parse(fs.readFileSync(path, "utf8"));

const fixed = mocks.map((entry) => ({
  method: "GET",
  ...entry,
}));

fs.writeFileSync(path, JSON.stringify(fixed, null, 2));
console.log("✅ mocks.json corregido con method: GET");
