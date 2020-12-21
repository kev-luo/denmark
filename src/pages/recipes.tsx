import { GetStaticProps } from 'next'
import React from 'react'
import { Stack } from "@chakra-ui/react"
import { useRouter } from "next/router";
import Head from "next/head";
import { getRecipes } from '../../lib/recipes'
import { Container } from '../components/Container'

export default function Recipes({ allRecipes }: {
  allRecipes: {
    id: number;
    title: string;
    category: string;
  }[]
}) {
  const router = useRouter();
  console.log(router)
  return (
    <Container height="100vh">
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

export const getStaticProps: GetStaticProps = async() => {
  const allRecipes = getRecipes();
  return {
    props: {
      allRecipes,
    }
  }
}