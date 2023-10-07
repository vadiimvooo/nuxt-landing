export interface ApiData {
  testTaskHeaderTitle: string;
  testTaskHeaderSubtitle: string;
  testTaskHeaderText: string;
  testTaskHeaderImage: string;
  testTaskHeaderImageAltText: string;
  testTaskSecondBlockTitle: string;
  testTaskSecondBlockSideNavigationTitle: string;
  testTaskSecondDescriptiveBlockItems: string;
  testTaskSlidesBlockTitle: string;
  testTaskSlidesBlockSubtitle: string;
  testTaskSlidesBlockSlides: string;
  sort: number;
  createDate: Date;
  publishDate: Date;
  ID: number;
  ContentType: string;
  jpath: string;
  url: string;
  children: object;
}

export interface FetchedApiData {
  data: {
    siteData: {
      testTaskTemplate_30_15673: ApiData;
    };
  };
}
