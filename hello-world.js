module.exports = function hello (msg) {
  console.log(msg);
};

if (require.main === module) {
  module.exports('Hello, world!');
}
