import { List, ListItem } from "@chakra-ui/react";
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { getRecipes } from "../../lib/recipes";
import { Container } from "../components/Container";
import RecipeItem from "../components/RecipeItem";
import { usePositionReorder } from "../utils/usePositionReorder";

const items = [60,80,70,100]

export default function Recipes({ allRecipes }) {
  const router = useRouter();
  const [order, updatePosition, updateOrder] = usePositionReorder(allRecipes);
  return (
    <Container>
      <Head>
        <title>{router.pathname.split("/")[1]}</title>
      </Head>
      <List spacing={3} >
        {order.map((recipe, index) => (
          <RecipeItem 
          key={recipe.id} 
          recipe={recipe} 
          i={index}
          updatePosition={updatePosition}
          updateOrder={updateOrder}
          />
        ))}
      </List>
    </Container>
  );
}

export const getStaticProps = async () => {
  const allRecipes = getRecipes();
  return {
    props: {
      allRecipes,
    },
  };
};
