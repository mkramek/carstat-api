import { CarsApiResponse } from '../types/api';
import { CarsUserResponse } from '../types/user';

export function mapResponseMeta(
  meta: CarsApiResponse['meta']
): CarsUserResponse['meta'] {
  if (!meta) {
    return undefined;
  }
  return {
    ...meta,
    currentPage: meta.current_page,
    lastPage: meta.last_page,
    perPage: meta.per_page,
  };
}
