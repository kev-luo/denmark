import { Stack } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from 'react';
import { getRecipes } from '../../lib/recipes';
import { Container } from '../components/Container';

export default function Recipes({ allRecipes }) {
  const router = useRouter();
  return (
    <Container>
      <Head>
        <title>{router.pathname.split("/")[1]}</title>
      </Head>
      <Stack>
        {allRecipes.map(recipe => (
          <div key={recipe.id}>{recipe.title}</div>
        ))}
      </Stack>
    </Container>
  )
}

export const getStaticProps = async() => {
  const allRecipes = getRecipes();
  return {
    props: {
      allRecipes,
    }
  }
}