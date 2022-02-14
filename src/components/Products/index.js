import styled from 'styled-components';
import { array } from 'prop-types';

const Table = styled.table`
  border-collapse: collapse;
  border: none;
  width: 100%;
`;
const THead = styled.thead`
  background-color: transparent;
  transition: all 0.25s ease;
  border-radius: 10px;
`;
const Th = styled.th`
  background-color: #f1f1f1;
  padding: 12px;
  font-weight: 500;
  text-align: center;
  font-size: 14px;
  color: #2c3e50;
  :first-child {
    border-top-left-radius: 15px;
  }
  :last-child {
    border-top-right-radius: 15px;
  }
`;
const TableItem = styled.tr`
  cursor: auto;
  :nth-child(odd) {
    background-color: #f9f9f9;
  }
`;
const TableCell = styled.td`
  padding: 12px;
  font-size: 14px;
  color: grey;
  text-align: center;
`;

const Products = (data) => {
  return (
    <>
      <Table>
        <THead>
          <tr>
            <Th>Title</Th>
            <Th>Gtin</Th>
            <Th>Gender</Th>
            <Th>Price</Th>
            <Th>Sale price</Th>
            <Th>Image link</Th>
          </tr>
        </THead>
        <tbody>
          {data &&
            data.data.map((obj, index) => {
              const { title, gtin, gender, sale_price, price, image_link } = obj;

              return (
                <TableItem key={index}>
                  <TableCell>{title}</TableCell>
                  <TableCell>{gtin}</TableCell>
                  <TableCell>{gender}</TableCell>
                  <TableCell>{sale_price}</TableCell>
                  <TableCell>{price}</TableCell>
                  <TableCell>{image_link}</TableCell>
                </TableItem>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

Products.prototypes = {
  data: array
};

export default Products;
