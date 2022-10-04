export enum DisplayOrderType {
  MAIN = 'MAIN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export enum UseType {
  Y = 'Y',
  N = 'N',
}

export interface ImageFile {
  imageFile: FormData;
}

export interface ReqDashBoardDTO {
  displayOrder: keyof typeof DisplayOrderType; // 정렬 순서
  id: number;
  image: string;
  modelDetailId: number;
  title: string;
}

export type ReqDashBoardDTOWithImageFile = ReqDashBoardDTO & ImageFile;

export interface ReqDisCoversModelDTO {
  description1: string;
  description2: string;
  description3: string;
  displayOrder: number; // 순서
  modelName: string; // 모델명
  subTitle: string;
  useYn: keyof typeof UseType; // 사용 여부
}

export type ReqDisCoversModelDTOWithImageFile = ReqDisCoversModelDTO &
  ImageFile;

export interface ReqUpdateDisCoversModelDTO
  extends ReqDisCoversModelDTO,
    ImageFile {
  discoverModelId: number;
  image: string;
}

export interface ReqAccessoriesDTO {
  accessoriesCategoryId: number;
  goodsName: number;
  goodsPrice: number;
  id: number;
  partsNumber: string;
  sortNumber: number;
  storeUrl: string;
  useYn: keyof typeof UseType;
}

export type ReqAccessoriesDTOWithImageFile = ReqAccessoriesDTO & {
  thumbnailImg: FormData;
};
