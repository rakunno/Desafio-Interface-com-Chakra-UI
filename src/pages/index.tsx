import { Flex, Heading } from '@chakra-ui/react';
import Banner from '../components/Banner';
import { Feactures } from '../components/Featues';
import Header from '../components/Header';
import { Hr } from '../components/Hr';


import { Slider } from '../components/slider';

export default function Home() {
  return (
    <Flex direction='column'>
      <Header />
      <Banner />
      <Feactures />
      <Hr />

      <Heading
      textAlign="center"
      fontWeight="500"
      mb={["5", "14"]}
      fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  )
}
