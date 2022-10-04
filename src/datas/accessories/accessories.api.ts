import axios from '@utils/axios';
import { ACCESSORIES, ACCESSORIES_ALL_CATEGORY } from './accessories.key';
import {
  ResAccessoriesListDTO,
  ResAccessoriesCategoryListDTO,
  ReqAccessoriesParams,
} from './accessories.model';

/**
 * 악세서리 목록을 조회한다.
 * @param {ReqAccessoriesParams} params
 * @returns {Promise<ResAccessoriesListDTO>}
 */
export async function getAccessories(
  params: ReqAccessoriesParams,
): Promise<ResAccessoriesListDTO> {
  const { data } = await axios.get<ResAccessoriesListDTO>(ACCESSORIES, {
    params,
  });
  return data;
}

/**
 * 전체 카테고리를 조회한다.
 * @returns {Promise<ResAccessoriesCategoryListDTO>}
 */
export async function getAccessoriesAllCategory(): Promise<ResAccessoriesCategoryListDTO> {
  const { data } = await axios.get<ResAccessoriesCategoryListDTO>(
    ACCESSORIES_ALL_CATEGORY,
  );
  return data;
}
