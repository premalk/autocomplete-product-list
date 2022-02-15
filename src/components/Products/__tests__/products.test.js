import { render } from '@testing-library/react';
import Products from '../index';

const data = [
  {
    title: 'Weekday THURSDAY Jeans Slim Fit black',
    gtin: '2001007926858',
    gender: 'female',
    sale_price: '39.95 EUR',
    price: '39.95 EUR',
    image_link:
      'https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg',
    additional_image_link:
      'https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg'
  },
  {
    title: 'Weekday THURSDAY Jeans Slim Fit white',
    gtin: '2001007926858',
    gender: 'female',
    sale_price: '39.95 EUR',
    price: '39.95 EUR',
    image_link:
      'https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg',
    additional_image_link:
      'https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg'
  }
];

describe('Testing product list', () => {
  const products = render(<Products data={data} />);

  test('Snapshot Test of product', () => {
    expect(products).toMatchSnapshot();
  });
  it('products existance test', () => {
    const { getByTestId } = render(<Products data={data} />);

    expect(getByTestId('Weekday THURSDAY Jeans Slim Fit black')).toBeInTheDocument();
  });
});
