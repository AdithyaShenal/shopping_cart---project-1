import {
  Container,
  Select,
  Stack,
  Input,
  Heading,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  weight: z.number().min(2),
  price: z.number().min(10),
});

interface Props {
  foods: string[];
  onSubmit: (data: CartFormData) => void;
}

type CartFormData = z.infer<typeof schema>;

const FormCategory = ({ foods, onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<CartFormData>();

  return (
    <>
      <Container maxW={"4xl"}>
        <Heading size="md" margin={3}>
          Vegetables
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={5}>
            <FormControl isRequired>
              <FormLabel>Vegetables</FormLabel>
              <Select {...register("name")} placeholder="Select Vegetables">
                {foods.map((element) => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Weight</FormLabel>
              <Input type="number" {...register("weight")} placeholder="100g" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Price</FormLabel>
              <Input type="number" {...register("price")} placeholder="500" />
            </FormControl>

            <Button mt={4} colorScheme="blue" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </Container>
    </>
  );
};

export default FormCategory;
