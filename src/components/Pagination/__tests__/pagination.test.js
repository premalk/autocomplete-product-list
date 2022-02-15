import { render } from '@testing-library/react';
import Pagination from '../index';

const mockData = {
  range: [1],
  slice: [
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
      title: 'Weekday THURSDAY Jeans Slim Fit black',
      gtin: '2001007926858',
      gender: 'female',
      sale_price: '39.95 EUR',
      price: '39.95 EUR',
      image_link:
        'https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg',
      additional_image_link:
        'https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg'
    }
  ],
  setPage: jest.fn(),
  page: 1
};

describe('Testing Pagination', () => {
  const pagination = render(
    <Pagination
      range={mockData.range}
      slice={mockData.slice}
      setPage={mockData.setPage}
      page={mockData.page}
    />
  );

  test('Snapshot Test of Pagination', () => {
    expect(pagination).toMatchSnapshot();
  });
  it('Pagination button existance test', () => {
    const { getByTestId } = render(
      <Pagination
        range={mockData.range}
        slice={mockData.slice}
        setPage={mockData.setPage}
        page={mockData.page}
      />
    );
    expect(getByTestId('page-1')).toBeInTheDocument();
  });
});
