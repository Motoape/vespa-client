import { useState } from 'react';

interface PagingParams {
  page: number;
}

export function usePagination<T extends PagingParams>(initialState: T) {
  const [{ page }, setPage] = useState<T>(initialState);

  const handleSetPage = (_page: number) => {
    if (_page !== page) {
      setPage((prev) => ({ ...prev, page: _page }));
    }
  };

  return {
    page,
    handleSetPage,
  };
}

export default usePagination;
