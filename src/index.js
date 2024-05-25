const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const path = require('path');

const app = express();
const port = 3000;

app.use('/', require('../routes/api'));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  customCssUrl: '/css/swagger.css'
}));

app.use('/api', express.static(path.join(__dirname, '../public/css')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
