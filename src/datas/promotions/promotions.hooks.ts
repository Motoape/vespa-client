import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getPromotions, getPromotionsDetail } from './promotions.api';
import {
  PromotionType,
  ResGetPromotionListDTO,
  ResPromotionDTO,
} from './promotions.model';
import { PROMOTIONS } from './promotions.key';

export function useGetPromotions(
  promotionType: keyof typeof PromotionType,
  options:
    | UseQueryOptions<
        ResGetPromotionListDTO,
        AxiosError,
        ResGetPromotionListDTO
      >
    | undefined = {},
) {
  return useQuery<ResGetPromotionListDTO, AxiosError, ResGetPromotionListDTO>(
    [PROMOTIONS, promotionType],
    () => getPromotions(promotionType),
    {
      ...options,
    },
  );
}

export function useGetPromotionsDetail(
  promotionId: number,
  options:
    | UseQueryOptions<ResPromotionDTO, AxiosError, ResPromotionDTO>
    | undefined = {},
) {
  return useQuery<ResPromotionDTO, AxiosError, ResPromotionDTO>(
    [PROMOTIONS, promotionId],
    () => getPromotionsDetail(promotionId),
    {
      ...options,
    },
  );
}
