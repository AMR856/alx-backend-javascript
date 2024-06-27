
class AppController{
  static getHomepage(_, response) {
    response.statusCode = 200;
    response.write(Buffer.from('Hello Holberton School!'));
  }
}
export default AppController;
module.exports = AppController;
