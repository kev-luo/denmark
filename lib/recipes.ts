import { recipes } from "../data/recipes";

export function getRecipes() {
  return recipes;
}

export function getRecipesByCategory(category: string) {
  return recipes.filter(recipe => recipe.category === category)
}