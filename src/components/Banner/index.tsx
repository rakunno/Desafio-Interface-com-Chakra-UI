import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('/banner.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
        maxW="1160px"
      >
        <div>
            <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2l", "2xl", "2xl","4xl" ]}
            >
            5 Continentes, <br /> infinitas possibilidades.
            </Heading>
            <Text
            color="gray.300"
            mt="5"
            fontSize={["0.5rem", "xl"]}
            maxW={["100%", "100%", "100%", "550px"]}
            >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Text>
        </div>

        <Image 
        src="/Airplane.svg"
        w={["300px", "300px", "300px", "430px"]}
        display={['none', 'none', 'block']}
        alt="Avião"
        transform="translatey(48px)"
        ml="8"
        />

      </Flex>
    </Flex>
  );
}
