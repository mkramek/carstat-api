import { CarstatClient } from '.';
import { CarsApiResponse } from '../types/api';

const client = CarstatClient.init('fake');

jest.mock('ofetch', () => {
  const orig = jest.requireActual('ofetch');
  return {
    ...orig,
    ofetch: jest.fn(() =>
      Promise.resolve<CarsApiResponse>({
        data: [],
        meta: {
          current_page: 10,
          from: 0,
          to: 0,
          last_page: 10,
          links: [],
          path: '',
          per_page: 0,
          total: -1,
        },
      })
    ),
  };
});

it('should retrieve an empty car list with no links and only one key in meta', () => {
  client.getCars().then((data) => {
    expect(data).toHaveProperty('data');
    expect(data).toHaveProperty('meta');
    expect(data.data).toHaveLength(0);
    expect(data.meta).toHaveProperty('currentPage');
    expect(data.meta?.currentPage).toEqual(10);
    expect(data.meta?.from).toEqual(0);
  });
});
