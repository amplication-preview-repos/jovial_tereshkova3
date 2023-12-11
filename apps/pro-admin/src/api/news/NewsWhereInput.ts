import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NewsWhereInput = {
  id?: StringFilter;
  slug?: StringFilter;
  source?: "PROTANKI" | "LESTA" | "WARGAMING" | "OTHER";
  tags?: StringNullableFilter;
  tanant?: "RU" | "Eu" | "ALL";
  title?: StringFilter;
};
