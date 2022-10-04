import { UseType } from '../admins/admins.model';

export enum PromotionType {
  BANNER = 'BANNER',
  MOTORCYCLE = 'MOTORCYCLE',
  OTHER = 'OTHER',
}

export interface GetPromotion {
  id: number; // 프로모션 ID
  promotionType: keyof typeof PromotionType; // PromotionType 기준
  thumbnailImg: string; // 이미지
  title: string; //제목
  frDate: string; // 시작일
  toDate: string; // 종료일
}

export interface ResGetPromotionListDTO {
  mainImage: string; //상단 메인 이미지
  promotionList: GetPromotion[]; // 프로모션 리스트
}

export interface ResPromotionDTO extends GetPromotion {
  contentImg: string; //타이틀
  useYn: keyof typeof UseType;
}
