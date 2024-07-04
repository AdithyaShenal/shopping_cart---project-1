import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Container,
  Heading,
  Button,
} from "@chakra-ui/react";

export interface FoodProps {
  id: number;
  name: string;
  weight: number;
  price: number;
}

interface Props {
  cartItems: FoodProps[];
  onDelete: (id: number) => void;
}

const FormTable = ({ cartItems, onDelete }: Props) => {
  return (
    <>
      <Container maxW={"4xl"} marginY={20}>
        <Heading size="md" margin={3}>
          Total Payabel
        </Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Vegetables</Th>
                <Th>Weight</Th>
                <Th>Price</Th>
                <Th isNumeric></Th>
              </Tr>
            </Thead>
            <Tbody>
              {cartItems.map((element) => (
                <Tr>
                  <Td key={element.name}>{element.name}</Td>
                  <Td key={element.weight}>{element.weight}</Td>
                  <Td key={element.price}>
                    {Number(element.price).toFixed(2)}
                  </Td>
                  <Td key={element.id} isNumeric>
                    <Button
                      onClick={() => onDelete(element.id)}
                      colorScheme="red"
                      variant="outline"
                    >
                      Button
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Total Amount</Th>
                <Th></Th>
                <Th>
                  {cartItems
                    .reduce((acc, element) => Number(element.price) + acc, 0)
                    .toFixed(2)}
                </Th>

                <Th isNumeric></Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default FormTable;
