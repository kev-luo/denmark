import { Flex } from '@chakra-ui/react'
import Image from "next/image"

export const Hero = ({ title }) => (
  <Flex alignItems="center" height="50vh">
    <Image src="/danny2.jpg" alt={title} width={100} height={100} />
  </Flex>
)

Hero.defaultProps = {
  title: 'picture of danny denmark',
}