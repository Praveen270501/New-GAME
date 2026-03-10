import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const Demo = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "main main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} margin={2}>
        <NavBar></NavBar>
      </GridItem>

      <GridItem area="aside" bg="red" display={{ base: "none", lg: "block" }}>
        Aside
      </GridItem>

      <GridItem area={"main"} bg="yellow">
        Main
      </GridItem>
    </Grid>
  );
};

export default Demo;
