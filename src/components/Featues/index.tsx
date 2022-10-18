import { Grid, GridItem } from "@chakra-ui/react";
import { Feacture } from "./Feacture";

export function Feactures() {
    return (
        <Grid
        templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
        w="100%"
        justifyContent="space-between"
        mt={["10", "32"]}
        mx="auto"
        maxW="1160px"
        gap={[1, 5]}
        >
            <GridItem>
                <Feacture icon="cocktail" text="Vida Noturna" />
            </GridItem>
            <GridItem>
                <Feacture icon="surf" text="Praia" />
            </GridItem>
            <GridItem>
                <Feacture icon="building" text="Moderno" />
            </GridItem>
            <GridItem>
                <Feacture icon="museum" text="Clássico" />
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
                <Feacture icon="earth" text="E Mais" />
            </GridItem>
        </Grid>
        )
}