import { array } from 'prop-types';

const Products = (data) => {
  return (
    <>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Gtin</th>
            <th>Gender</th>
            <th>Price</th>
            <th>Sale price</th>
            <th>Image link</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data.map((obj, index) => {
              const { title, gtin, gender, sale_price, price, image_link } = obj;

              return (
                <tr key={index} data-testid={title}>
                  <td>{title}</td>
                  <td>{gtin}</td>
                  <td>{gender}</td>
                  <td>{sale_price}</td>
                  <td>{price}</td>
                  <td>{image_link}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

Products.prototypes = {
  data: array
};

export default Products;
