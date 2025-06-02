# backendDevTest-node

Versión en Node.js de la prueba técnica original [dalogax/backendDevTest](https://github.com/dalogax/backendDevTest), que implementa una API REST para obtener productos similares a uno dado, utilizando un servidor mock.

---

## Tecnologías

- Node.js + Express
- Jest + Supertest (testing)
- Docker + Docker Compose
- Simulado (mock REST API)

---

## Objetivo del proyecto

Crear el endpoint:

GET /product/:productId/similar

### Ejemplo de respuesta:

```json
[
  {
    "id": "2",
    "name": "Dress",
    "price": 19.99,
    "availability": true
  }
]
```

#### Instalacion local

git clone https://github.com/tu-usuario/backendDevTest-node.git
cd backendDevTest-node
npm install

##### Variables de entorno

PORT=5000
MOCK_API=http://localhost:3001

#### #Ejecutar en modo desarrollo con hot-reload

docker-compose up --build

##### #Ejecutar en modo de produccion

docker-compose -f docker-compose.prod.yaml up --build

# #Ejecutar test

npm test

# #Estructura del proyecto

backendDevTest-node/
├── controllers/ # Lógica de endpoints
├── services/ # Comunicación externa (mock)
├── tests/ # Tests unitarios
├── shared/simulado/ # Mocks para Simulado
├── Dockerfile # Producción
├── Dockerfile.dev # Desarrollo
├── docker-compose.yaml # Desarrollo
├── docker-compose.prod.yaml # Producción
├── .dockerignore
├── .env
└── README.md

# #Scripts

npm start # Iniciar backend local
npm run dev # Iniciar backend con nodemon
npm test # Ejecutar tests con Jest
npm run fix-mocks # Corregir mocks.json si falta "method": "GET"
