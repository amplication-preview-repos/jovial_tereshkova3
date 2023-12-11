import { SortOrder } from "../../util/SortOrder";

export type NewsOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  descriptionPreview?: SortOrder;
  id?: SortOrder;
  slug?: SortOrder;
  source?: SortOrder;
  sourceUrl?: SortOrder;
  tags?: SortOrder;
  tanant?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
