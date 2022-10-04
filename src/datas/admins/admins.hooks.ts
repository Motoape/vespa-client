import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  createAdminsAccessories,
  createAdminsAccessoriesCategory,
  createAdminsAccessoriesSubCategory,
  createAdminsDiscover,
  deleteAdminsDiscover,
  getAdminsAccessories,
  getAdminsAccessoriesAllCategory,
  getAdminsAccessoriesCategory,
  getAdminsAccessoriesSubCategory,
  getAdminsDashboards,
  getAdminsDiscovers,
  updateAdminsDashboards,
  updateAdminsDiscover,
} from './admins.api';
import {
  ResDashBoardDTO,
  ResDiscoverModelDTO,
} from '../dashboards/dashboards.model';
import {
  ADMINS_ACCESSORIES,
  ADMINS_ACCESSORIES_ALL_CATEGORY,
  ADMINS_ACCESSORIES_CATEGORY,
  ADMINS_ACCESSORIES_SUB_CATEGORY,
  ADMINS_DASHBOARDS,
  ADMINS_DISCOVER,
  ADMINS_DISCOVERS,
} from './admins.key';
import {
  ReqAccessoriesDTOWithImageFile,
  ReqDashBoardDTOWithImageFile,
  ReqDisCoversModelDTOWithImageFile,
  ReqUpdateDisCoversModelDTO,
} from './admins.model';
import {
  Accessories,
  PagingParams,
  ResAccessoriesCategoryListDTO,
  ResAccessoriesListDTO,
  SubCategory,
} from '../accessories/accessories.model';

export function useGetAdminsDashboards(
  options:
    | UseQueryOptions<ResDashBoardDTO[], AxiosError, ResDashBoardDTO[]>
    | undefined = {},
) {
  return useQuery<ResDashBoardDTO[], AxiosError, ResDashBoardDTO[]>(
    [ADMINS_DASHBOARDS],
    getAdminsDashboards,
    {
      ...options,
    },
  );
}

export function useUpdateAdminsDashboards(
  options: UseMutationOptions<
    ResDashBoardDTO,
    AxiosError,
    ReqDashBoardDTOWithImageFile
  >,
) {
  return useMutation<ResDashBoardDTO, AxiosError, ReqDashBoardDTOWithImageFile>(
    [ADMINS_DASHBOARDS],
    updateAdminsDashboards,
    {
      ...options,
    },
  );
}

export function useGetAdminsDiscovers(
  options:
    | UseQueryOptions<ResDiscoverModelDTO[], AxiosError, ResDiscoverModelDTO[]>
    | undefined = {},
) {
  return useQuery<ResDiscoverModelDTO[], AxiosError, ResDiscoverModelDTO[]>(
    [ADMINS_DISCOVERS],
    getAdminsDiscovers,
    {
      ...options,
    },
  );
}

export function useCreateAdminsDiscover(
  options: UseMutationOptions<
    ResDiscoverModelDTO,
    AxiosError,
    ReqDisCoversModelDTOWithImageFile
  >,
) {
  return useMutation<
    ResDiscoverModelDTO,
    AxiosError,
    ReqDisCoversModelDTOWithImageFile
  >([ADMINS_DISCOVER], createAdminsDiscover, {
    ...options,
  });
}

export function useDeleteAdminsDiscover(
  options: UseMutationOptions<unknown, AxiosError, number>,
) {
  return useMutation<unknown, AxiosError, number>(
    [ADMINS_DISCOVERS],
    deleteAdminsDiscover,
    {
      ...options,
    },
  );
}

export function useUpdateAdminsDiscover(
  options: UseMutationOptions<
    ResDiscoverModelDTO,
    AxiosError,
    ReqUpdateDisCoversModelDTO
  >,
) {
  return useMutation<
    ResDiscoverModelDTO,
    AxiosError,
    ReqUpdateDisCoversModelDTO
  >([ADMINS_DISCOVERS], updateAdminsDiscover, {
    ...options,
  });
}

export function useGetAdminsAccessories(
  params: PagingParams,
  options:
    | UseQueryOptions<ResAccessoriesListDTO, AxiosError, ResAccessoriesListDTO>
    | undefined = {},
) {
  return useQuery<ResAccessoriesListDTO, AxiosError, ResAccessoriesListDTO>(
    [ADMINS_ACCESSORIES, params],
    () => getAdminsAccessories(params),
    {
      ...options,
    },
  );
}

export function useCreateAdminsAccessories(
  options: UseMutationOptions<
    Accessories,
    AxiosError,
    ReqAccessoriesDTOWithImageFile
  >,
) {
  return useMutation<Accessories, AxiosError, ReqAccessoriesDTOWithImageFile>(
    [ADMINS_ACCESSORIES],
    createAdminsAccessories,
    {
      ...options,
    },
  );
}

export function useGetAdminsAccessoriesAllCategory(
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
  >([ADMINS_ACCESSORIES_ALL_CATEGORY], getAdminsAccessoriesAllCategory, {
    ...options,
  });
}

export function useGetAdminsAccessoriesCategory(
  options:
    | UseQueryOptions<SubCategory[], AxiosError, SubCategory[]>
    | undefined = {},
) {
  return useQuery<SubCategory[], AxiosError, SubCategory[]>(
    [ADMINS_ACCESSORIES_CATEGORY],
    getAdminsAccessoriesCategory,
    {
      ...options,
    },
  );
}

export function useCreateAdminsAccessoriesCategory(
  options: UseMutationOptions<
    SubCategory,
    AxiosError,
    { categoryName: string }
  >,
) {
  return useMutation<SubCategory, AxiosError, { categoryName: string }>(
    [ADMINS_ACCESSORIES_CATEGORY],
    createAdminsAccessoriesCategory,
    {
      ...options,
    },
  );
}

export function useGetAdminsAccessoriesSubCategory(
  parentId: number,
  options:
    | UseQueryOptions<SubCategory[], AxiosError, SubCategory[]>
    | undefined = {},
) {
  return useQuery<SubCategory[], AxiosError, SubCategory[]>(
    [ADMINS_ACCESSORIES_SUB_CATEGORY, parentId],
    () => getAdminsAccessoriesSubCategory(parentId),
    {
      ...options,
    },
  );
}

export function useCreateAdminsAccessoriesSubCategory(
  options: UseMutationOptions<
    SubCategory,
    AxiosError,
    {
      categoryName: string;
      parentCategoryId: number;
    }
  >,
) {
  return useMutation<
    SubCategory,
    AxiosError,
    {
      categoryName: string;
      parentCategoryId: number;
    }
  >([ADMINS_ACCESSORIES_SUB_CATEGORY], createAdminsAccessoriesSubCategory, {
    ...options,
  });
}
