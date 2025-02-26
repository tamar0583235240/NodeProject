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
exports.DeleteRecipe = (req, res) => {
    
}

exports.UpdateRecipe = (req, res) => {
    
}
