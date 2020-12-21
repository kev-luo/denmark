import { GetStaticProps } from 'next'
import React from 'react'
import { getRecipes } from '../../lib/recipes'

export default function recipes({ allRecipes }: {
  allRecipes: {
    id: number;
    title: string;
    category: string;
  }[]
}) {
  return (
    <div>
      {allRecipes.map(recipe => (
        <div key={recipe.id}>{recipe.title}</div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const allRecipes = getRecipes();
  return {
    props: {
      allRecipes,
    }
  }
}