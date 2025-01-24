/** @typedef {import('../types').CarsApiResponse} CarsApiResponse */
/** @typedef {import('../types').CarsUserResponse} CarsUserResponse */

/**
 * @param {CarsApiResponse['meta']} meta
 * @returns {CarsUserResponse['meta']}
 */
function mapResponseMeta(meta) {
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

module.exports = {
  mapResponseMeta,
};
