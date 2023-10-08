import { ArticleInfo } from "~/types/ArticleInfo";

export interface ArticleData extends ArticleInfo {
  text: string;
  imageAltAtr: string;
}
