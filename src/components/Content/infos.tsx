import {
  Button,
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export function Infos() {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          50
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          países
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          60
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          línguas
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          27
        </Heading>
        <Flex align="center">
          <Text
            fontWeight="500"
            fontSize={["md", "xl"]}
            color="gray.700"
            flexDirection="row"
          >
            cidades +100
          </Text>
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  cursor="pointer"
                  as={RiInformationLine}
                  ml="1"
                  color="gray.400"
                  w={["10px", "16px"]}
                  h={["10px", "16px"]}
                  mt="5px"
                />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">
                Alemanha, Áustria, Bélgica, Bulgária, Chipre, Croácia,
                Dinamarca, Eslováquia,
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Flex>
    </Flex>
  );
}
