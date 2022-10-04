import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getAccessories, getAccessoriesAllCategory } from './accessories.api';
import {
  ResAccessoriesListDTO,
  ResAccessoriesCategoryListDTO,
  ReqAccessoriesParams,
} from './accessories.model';
import { ACCESSORIES, ACCESSORIES_ALL_CATEGORY } from './accessories.key';

export function useGetAccessories(
  params: ReqAccessoriesParams,
  options:
    | UseQueryOptions<ResAccessoriesListDTO, AxiosError, ResAccessoriesListDTO>
    | undefined = {},
) {
  return useQuery<ResAccessoriesListDTO, AxiosError, ResAccessoriesListDTO>(
    [ACCESSORIES, params],
    () => getAccessories(params),
    {
      ...options,
    },
  );
}

export function useGetAccessoriesAllCategory(
  options:
    | UseQueryOptions<
        ResAccessoriesCategoryListDTO,
        AxiosError,
        ResAccessoriesCategoryListDTO
      >
    | undefined = {},
) {
  return useQuery<
    ResAccessoriesCategoryListDTO,
    AxiosError,
    ResAccessoriesCategoryListDTO
  >([ACCESSORIES_ALL_CATEGORY], getAccessoriesAllCategory, {
    ...options,
  });
}
