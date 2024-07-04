import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import FormCategory from "./components/FormCategory";
import FormTable from "./components/FormTable";
import { FoodProps } from "./components/FormTable";

function App() {
  const [selectedfoods, setSelectedFoods] = useState<FoodProps[]>([]);

  const foodsArray = ["Carrot", "Cabbage", "Onion", "Tometo", "Potato"];

  const deleteItem = () => {};

  return (
    <>
      <Grid templateAreas={` "nav" "main" "footer" `}>
        <GridItem area={"nav"}>
          <NavBar count={selectedfoods.length} />
        </GridItem>

        <GridItem area={"main"}>
          <FormCategory
            foods={foodsArray}
            onSubmit={(data) =>
              setSelectedFoods([...selectedfoods, { ...data, id: 1 }])
            }
          />
        </GridItem>

        <GridItem area={"footer"}>
          <FormTable cartItems={selectedfoods} onDelete={deleteItem} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
