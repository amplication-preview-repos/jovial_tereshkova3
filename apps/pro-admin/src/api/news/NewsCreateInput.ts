export type NewsCreateInput = {
  description: string;
  descriptionPreview: string;
  slug: string;
  source: "PROTANKI" | "LESTA" | "WARGAMING" | "OTHER";
  sourceUrl?: string | null;
  tags?: string | null;
  tanant: "RU" | "Eu" | "ALL";
  title: string;
};
