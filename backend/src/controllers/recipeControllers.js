const models = require("../models");

const browse = (req, res) => {
  models.recipe
    .findAllRecipes()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.recipe
    .findRecipe(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const recipe = req.body;

  // TODO validations (length, format...)

  recipe.id = parseInt(req.params.id, 10);

  models.recipe
    .update(recipe)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const time = parseInt(req.body.time, 10);
  const { name, instructions, difficulty, url, picture, country, ingredients } =
    req.body;

  const recipe = {
    name,
    instructions,
    time,
    difficulty,
    url,
    picture,
    country,
    ingredients,
  };

  // TODO validations (length, format...)

  models.recipe
    .insert(recipe)
    .then(([result]) => {
      res.status(201).send({ idrecipe: result.insertId });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.recipe
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
