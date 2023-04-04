const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const recipeControllers = require("./controllers/recipeControllers");
const auth = require("./middlewares/auth");

router.get("/recipes", recipeControllers.browse);
router.get("/recipes/:id", recipeControllers.read);
router.put("/recipes/:id", recipeControllers.edit);
router.post("/recipes", recipeControllers.add);
router.delete("/recipes/:id", recipeControllers.destroy);

router.get("/users", auth, userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

module.exports = router;
