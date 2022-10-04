import axios from '@utils/axios';
import {
  Accessories,
  PagingParams,
  ResAccessoriesCategoryListDTO,
  ResAccessoriesListDTO,
  SubCategory,
} from '../accessories/accessories.model';
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

/**
 * 관리자용 메인 화면 상단 3가지 메인 이미지를 조회한다.
 * @returns {Promise<ResDashBoardDTO[]>}
 */
export async function getAdminsDashboards(): Promise<ResDashBoardDTO[]> {
  const { data } = await axios.get<ResDashBoardDTO[]>(ADMINS_DASHBOARDS);
  return data;
}

/**
 * 메인 화면 상단 3가지 메인 이미지를 수정한다.
 * @param {ReqDashBoardDTOWithImageFile} reqDashBoardDTOWithImageFile
 * @returns {Promise<ResDashBoardDTO>}
 */
export async function updateAdminsDashboards(
  reqDashBoardDTOWithImageFile: ReqDashBoardDTOWithImageFile,
): Promise<ResDashBoardDTO> {
  const { data } = await axios.patch<ResDashBoardDTO>(
    ADMINS_DASHBOARDS,
    reqDashBoardDTOWithImageFile,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return data;
}

/**
 * 관리자용 바이크 모델의 커버 목록 조회
 * @returns {Promise<ResDiscoverModelDTO[]>}
 */
export async function getAdminsDiscovers(): Promise<ResDiscoverModelDTO[]> {
  const { data } = await axios.get<ResDiscoverModelDTO[]>(ADMINS_DISCOVERS);
  return data;
}

/**
 * 바이크 모델의 커버 단건으로 등록 한다
 * @param {ReqDisCoversModelDTOWithImageFile} reqDisCoversModelDTOWithImageFile
 * @returns {Promise<ResDiscoverModelDTO>}
 */
export async function createAdminsDiscover(
  reqDisCoversModelDTOWithImageFile: ReqDisCoversModelDTOWithImageFile,
): Promise<ResDiscoverModelDTO> {
  const { data } = await axios.post<ResDiscoverModelDTO>(
    ADMINS_DISCOVER,
    reqDisCoversModelDTOWithImageFile,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return data;
}

/**
 * 바이크 모델의 커버 단건으로 삭제한다.
 * @param {number} discoverModelId
 * @returns {Promise<unknown>}
 */
export async function deleteAdminsDiscover(
  discoverModelId: number,
): Promise<unknown> {
  const { data } = await axios.delete<unknown>(
    `${ADMINS_DISCOVERS}/${discoverModelId}`,
  );
  return data;
}

/**
 * 바이크 모델의 커버 단건으로 수정한다.
 * @param {ReqUpdateDisCoversModelDTO} reqUpdateDisCoversModelDTO
 * @returns {Promise<unknown>}
 */
export async function updateAdminsDiscover(
  reqUpdateDisCoversModelDTO: ReqUpdateDisCoversModelDTO,
): Promise<ResDiscoverModelDTO> {
  const { data } = await axios.patch<ResDiscoverModelDTO>(
    `${ADMINS_DISCOVERS}/${reqUpdateDisCoversModelDTO.discoverModelId}`,
    reqUpdateDisCoversModelDTO,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return data;
}

/**
 * 악세서리 목록을 조회한다.
 * @param {PagingParams} params
 * @returns {Promise<ResAccessoriesListDTO>}
 */
export async function getAdminsAccessories(
  params: PagingParams,
): Promise<ResAccessoriesListDTO> {
  const { data } = await axios.get<ResAccessoriesListDTO>(ADMINS_ACCESSORIES, {
    params,
  });
  return data;
}

/**
 * 악세서리 단건 등록한다. ( sub 카테고리 하위에만 등록 가능하다 )
 * @param {ReqAccessoriesDTOWithImageFile} reqAccessoriesDTOWithImageFile
 * @returns {Promise<Accessories>}
 */
export async function createAdminsAccessories(
  reqAccessoriesDTOWithImageFile: ReqAccessoriesDTOWithImageFile,
): Promise<Accessories> {
  const { data } = await axios.post<Accessories>(
    ADMINS_ACCESSORIES,
    reqAccessoriesDTOWithImageFile,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return data;
}

/**
 * 전체 카테고리를 조회한다.
 * @returns {Promise<ResAccessoriesCategoryListDTO>}
 */
export async function getAdminsAccessoriesAllCategory(): Promise<ResAccessoriesCategoryListDTO> {
  const { data } = await axios.get<ResAccessoriesCategoryListDTO>(
    ADMINS_ACCESSORIES_ALL_CATEGORY,
  );
  return data;
}

/**
 * 최상위 카테고리를 조회한다.
 * @returns {Promise<SubCategory>}
 */
export async function getAdminsAccessoriesCategory(): Promise<SubCategory[]> {
  const { data } = await axios.get<SubCategory[]>(ADMINS_ACCESSORIES_CATEGORY);
  return data;
}

/**
 * 악세서리 단건 등록한다. ( sub 카테고리 하위에만 등록 가능하다 )
 * @param {categoryName: string} categoryName
 * @returns {Promise<SubCategory>}
 */
export async function createAdminsAccessoriesCategory({
  categoryName,
}: {
  categoryName: string;
}): Promise<SubCategory> {
  const { data } = await axios.post<SubCategory>(ADMINS_ACCESSORIES_CATEGORY, {
    categoryName,
  });
  return data;
}

/**
 * 최상위 카테고리를 조회한다.
 * @returns {Promise<SubCategory>}
 */
export async function getAdminsAccessoriesSubCategory(
  parentId: number,
): Promise<SubCategory[]> {
  const { data } = await axios.get<SubCategory[]>(
    ADMINS_ACCESSORIES_SUB_CATEGORY,
    {
      params: {
        parentId,
      },
    },
  );
  return data;
}

/**
 * Sub 카테고리를 등록한다.
 * @param {categoryName: string; parentCategoryId: number} reqSubCategory
 * @returns {Promise<SubCategory>}
 */
export async function createAdminsAccessoriesSubCategory(reqSubCategory: {
  categoryName: string;
  parentCategoryId: number;
}): Promise<SubCategory> {
  const { data } = await axios.post<SubCategory>(
    ADMINS_ACCESSORIES_SUB_CATEGORY,
    reqSubCategory,
  );
  return data;
}
