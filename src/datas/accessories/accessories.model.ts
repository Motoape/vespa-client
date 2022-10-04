import { UseType } from '../admins/admins.model';

export enum SortType {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface PagingParams {
  page: number;
  size: number;
  sortType: keyof typeof SortType;
}

export interface ReqAccessoriesParams extends PagingParams {
  categoryId?: number; // 카테고리 아이디
  subCategoryId?: number; //Sub카테고리 아이디
}

export interface ResAccessoriesListDTO {
  list: Accessories[];
  pageDataSize: number; //현재 페이지에 노출될 데이터 수
  pageNumber: number; //현재 페이지
  pageSize: number; //현재 페이지 사이즈
  totalPages: number; //전체 페이지 수
  totalSize: number; //전체 데이터 수
}

export interface Accessories {
  accessoriesCategoryId: number; //카테고리 아이디
  goodsName: number; //악세사리명
  goodsPrice: number; //악세사리 가격
  id: number; //악세사리 아이디
  partsNumber: string; // 파츠 번호
  sortNumber: number; //정렬 순서
  storeUrl: string; // 쇼핑몰 URL
  thumbnailImg: string; // 메인 이미지
  useYn: keyof typeof UseType; //  사용여부
  viewCount: number; //조회 카운트
}

export interface ResAccessoriesCategoryListDTO {
  categoryList: Category[];
}

export interface Category {
  categoryName: string; //카테고리명
  id: number; //카테고리명 아이디
  subCategoryLists: SubCategory[]; // 하위 카테고리 목록
}

export interface SubCategory {
  categoryName: string; //카테고리명
  id: number; //카테고리명 아이디
  parentId: number; // 부모 아이디
}
