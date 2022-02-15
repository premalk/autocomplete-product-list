import { render } from '@testing-library/react';
import AdditionalImages from '../';

const mockData = {
  isOpen: true,
  setIsOpen: jest.fn(),
  imagelist: [
    'https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg',
    'https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg',
    'https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg'
  ]
};

describe('Testing Modal', () => {
  const modal = render(
    <AdditionalImages
      isOpen={mockData.isOpen}
      setIsOpen={mockData.setIsOpen}
      imagelist={mockData.imagelist}
    />
  );

  test('Snapshot Test of modal', () => {
    expect(modal).toMatchSnapshot();
  });
});
