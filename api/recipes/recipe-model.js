const db = require('../../data/db-config')

const findRecipe = (recipe_id) => {
  return db('recipes as r')
      .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
      .select('r.*', 's.step_number', 's.step_instructions')
      .where('r.recipe_id', recipe_id)
}

module.exports = {
  findRecipe,
}
