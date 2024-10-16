import type { MicroCMSImage } from "microcms-js-sdk";

export type News = {
  title: string;
  content: string;
  eyecatch: MicroCMSImage;
  category: string;
};
