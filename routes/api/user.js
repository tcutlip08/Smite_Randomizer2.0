const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/random/team/conquest").get(userController.findOneOfEachConq);
router.route("/random/team/joust").get(userController.findOneOfEachJoust);
router.route("/random").get(userController.findOne);

router.route("/:class/random").get(userController.findOneByClass);

router
  .route("/:class")
  .get(userController.findAllByClass)
  .put(userController.update)
  .delete(userController.remove);

router.route("/").get(userController.findAll).post(userController.create);

module.exports = router;
