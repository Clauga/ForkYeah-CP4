const AbstractManager = require("./AbstractManager");

class RecipesManager extends AbstractManager {
  constructor() {
    super({ table: "recipe" });
  }

  findAllRecipes() {
    return this.database.query(
      `select ${this.table}.*, total.* from  ${this.table} JOIN total ON recipe.idrecipe = total.recipe_idrecipe `
    );
  }

  insert(recipe) {
    return this.database.query(
      `insert into ${this.table} (name, instructions, time, difficulty, url, picture, country, ingredients) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        recipe.name,
        recipe.instructions,
        recipe.time,
        recipe.difficulty,
        recipe.url,
        recipe.picture,
        recipe.country,
        recipe.ingredients,
      ]
    );
  }

  update(recipe) {
    return this.database.query(
      `update ${this.table} set name = ?, instructions = ?, time = ?, difficulty = ?, url = ?, ram = ?, picture = ?, country =?, ingredients =?, where idrecipe = ?`,
      [
        recipe.name,
        recipe.instructions,
        recipe.time,
        recipe.difficulty,
        recipe.url,
        recipe.picture,
        recipe.country,
        recipe.ingredients,
      ]
    );
  }

  findRecipe(id) {
    return this.database.query(
      `select * from  ${this.table} where idrecipe = ?`,
      [id]
    );
  }
}

module.exports = RecipesManager;
