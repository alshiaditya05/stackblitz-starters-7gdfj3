const port = process.env.PORT || 3010;
const { app } = require('./index.js');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
