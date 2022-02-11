import styled from 'styled-components';

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

const Products = () => {
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
          <TableItem>
            <TableCell>Product 1</TableCell>
            <TableCell>123</TableCell>
            <TableCell>edfe</TableCell>
            <TableCell>edfe</TableCell>
            <TableCell>edfe</TableCell>
            <TableCell>edfe</TableCell>
          </TableItem>
          <TableItem>
            <TableCell>Product 2</TableCell>
            <TableCell>343</TableCell>
            <TableCell>dkfhjh</TableCell>
            <TableCell>edfe</TableCell>
            <TableCell>edfe</TableCell>
            <TableCell>edfe</TableCell>
          </TableItem>
        </tbody>
      </Table>
    </>
  );
};

export default Products;
