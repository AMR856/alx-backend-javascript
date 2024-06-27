const routeMap = require('./routes/index');
const express = require('express');
const app = express();
const port = 1245;

routeMap(app);
app.listen(port, () => {
  console.log(`Server is starting on ${port}`);
});

export default app;
module.exports = app;
