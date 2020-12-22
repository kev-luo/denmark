import { List, Heading } from "@chakra-ui/react";
import React from "react";

import { recipes } from "../../data/recipes";
import { Container } from "../components/Container";
import RecipeItem from "../components/RecipeItem";
import { usePositionReorder } from "../utils/usePositionReorder";

const colors = [
  "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
  "linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)",
];

export default function Recipes() {
  const [order, updatePosition, updateOrder] = usePositionReorder(recipes);
  return (
    <Container title="Recipes">
      <Heading>Getcho' Grub On</Heading>
      <List spacing={3}>
        {order.map((recipe, index) => {
          const color = colors[Math.floor(Math.random() * colors.length)];
          return (
            <RecipeItem
              key={recipe.id}
              recipe={recipe}
              i={index}
              updatePosition={updatePosition}
              updateOrder={updateOrder}
              color={color}
            />
          );
        })}
      </List>
    </Container>
  );
}