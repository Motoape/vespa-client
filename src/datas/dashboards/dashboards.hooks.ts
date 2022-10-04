import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getDashboards, getDashboardsDiscovers } from './dashboards.api';
import { ResDashBoardDTO, ResDiscoverModelDTO } from './dashboards.model';
import { DASHBOARDS, DASHBOARDS_DISCOVERS } from './dashboards.key';

export function useGetDashboards(
  options:
    | UseQueryOptions<ResDashBoardDTO[], AxiosError<unknown>, ResDashBoardDTO[]>
    | undefined = {},
) {
  return useQuery<ResDashBoardDTO[], AxiosError>([DASHBOARDS], getDashboards, {
    ...options,
  });
}

export function useGetDashboardsDiscovers(
  options:
    | UseQueryOptions<
        ResDiscoverModelDTO[],
        AxiosError<unknown>,
        ResDiscoverModelDTO[]
      >
    | undefined = {},
) {
  return useQuery<ResDiscoverModelDTO[], AxiosError>(
    [DASHBOARDS_DISCOVERS],
    getDashboardsDiscovers,
    {
      ...options,
    },
  );
}
