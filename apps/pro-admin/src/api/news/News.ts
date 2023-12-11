export type News = {
  createdAt: Date;
  description: string;
  descriptionPreview: string;
  id: string;
  slug: string;
  source?: "PROTANKI" | "LESTA" | "WARGAMING" | "OTHER";
  sourceUrl: string | null;
  tags: string | null;
  tanant?: "RU" | "Eu" | "ALL";
  title: string;
  updatedAt: Date;
};
