import axios from '@utils/axios';
import { DASHBOARDS, DASHBOARDS_DISCOVERS } from './dashboards.key';
import { ResDashBoardDTO, ResDiscoverModelDTO } from './dashboards.model';

/**
 * 메인 화면 상단 3가지 메인 이미지를 조회한다.
 * @returns {Promise<ResDashBoardDTO[]>}
 */
export async function getDashboards(): Promise<ResDashBoardDTO[]> {
  const { data } = await axios.get<ResDashBoardDTO[]>(DASHBOARDS);
  return data;
}

/**
 * 바이크 모델의 커버 이미지 목록을 보여준다.
 * @returns {Promise<ResDiscoverModelDTO[]>}
 */
export async function getDashboardsDiscovers(): Promise<ResDiscoverModelDTO[]> {
  const { data } = await axios.get<ResDiscoverModelDTO[]>(DASHBOARDS_DISCOVERS);
  return data;
}
