const cors = require("cors");
const UserController = require("../controller/UserController");

module.exports = function (app) {
    app.use(cors());

    app.route('/').get(UserController.test);
    app.route('/submit').post(UserController.userDetails);
}