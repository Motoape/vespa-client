export interface ResDashBoardDTO {
  displayOrder: string; // 정렬 순서
  id: number;
  modelDetailId: number;
  thumbnailImg: string; // 이미지 경로
  title: string; // 제목
}

export interface ResDiscoverModelDTO {
  description1: string; // 설명1
  description2: string; // 설명2
  description3: string; // 설명3
  displayOrder: number; // 순서
  id: number;
  images: string; // 이미지
  modelName: string; // 모델명
  subTitle: string; // 설명
  useYn: string; // 사용 여부
}
