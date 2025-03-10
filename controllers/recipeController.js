const Recipe = require('../models/Recipe');
exports.AddRecipe  =async (req, res) => {
    const recipe = await Recipe.create(req.body);
    res.json(recipe)
}

exports.AllRecipe  =async (req, res) => {
    try {
        const recipe = await Recipe.find();
        res.json(recipe);
      } catch (error) {
        console.error('Failed to get users:', error);
        res.status(500).json({ message: 'Failed to get users' });
      }
}
exports.DeleteRecipe =async (req, res) => {
  const  recipeName  = req.params.name;
  console.log(recipeName+"bbbb");
    try {
      const deletedRecipe = await recipes.findOneAndDelete({ name: recipeName });
      if (!deletedRecipe) {
        return res.status(404).json({ message: 'recipe not found' });
      }
      res.json({ message: 'recipe deleted successfully' });
    } catch (error) {
      console.error('Failed to delete recipe:', error);
      res.status(500).json({ message: 'Failed to delete recipe' });
    }
}

exports.UpdateRecipe = (req, res) => {
    
}
