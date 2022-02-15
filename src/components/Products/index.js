import { array, func } from 'prop-types';

// eslint-disable-next-line react/prop-types
const Products = ({ data, handleClick }) => {
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
            <th>Additional images</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            // eslint-disable-next-line react/prop-types
            data.map((obj, index) => {
              const { title, gtin, gender, sale_price, price, image_link, additional_image_link } =
                obj;

              return (
                <tr key={index} data-testid={title}>
                  <td>{title}</td>
                  <td>{gtin}</td>
                  <td>{gender}</td>
                  <td>{sale_price}</td>
                  <td>{price}</td>
                  <td>
                    <img src={image_link} />
                  </td>
                  <td>
                    <button onClick={() => handleClick(additional_image_link)}>
                      Additional images
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

Products.prototypes = {
  data: array,
  handleClick: func
};

export default Products;
