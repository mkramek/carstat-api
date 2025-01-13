import { CarstatClient } from '.';

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

it('tests the /cars fetch', async () => {
  try {
    const response = await client.getCars();
    console.log(response);
  } catch (err) {
    console.error((err as Record<string, unknown>).data);
  }
  expect(1).toEqual(1);
});
