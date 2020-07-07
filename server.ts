const myApp = require('./app.ts');
const port = process.env.PORT || 3000;
const server = myApp.listen(port, () => {
  console.log(`express listening on port ${port}`);
});
