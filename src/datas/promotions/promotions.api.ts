import axios from '@utils/axios';
import { PROMOTIONS } from './promotions.key';
import {
  PromotionType,
  ResGetPromotionListDTO,
  ResPromotionDTO,
} from './promotions.model';

/**
 * 프로모션 타입 기준 목록을 조회조회한다. ( MOTORCYCLE , OTHER )만 사용가능하다.
 * @param {keyof typeof PromotionType} promotionType
 * @returns {Promise<ResDashBoardDTO[]>}
 */
export async function getPromotions(
  promotionType: keyof typeof PromotionType,
): Promise<ResGetPromotionListDTO> {
  const { data } = await axios.get<ResGetPromotionListDTO>(PROMOTIONS, {
    params: {
      promotionType,
    },
  });
  return data;
}

/**
 * 프로모션을 ID 기준으로 단건 조회 한다.
 * @param {number} promotionId
 * @returns {Promise<ResDiscoverModelDTO[]>}
 */
export async function getPromotionsDetail(
  promotionId: number,
): Promise<ResPromotionDTO> {
  const { data } = await axios.get<ResPromotionDTO>(
    `${PROMOTIONS}/${promotionId}`,
  );
  return data;
}
