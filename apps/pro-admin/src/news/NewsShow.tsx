import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const NewsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Description Preview" source="descriptionPreview" />
        <TextField label="ID" source="id" />
        <TextField label="Slug" source="slug" />
        <TextField label="Source" source="source" />
        <TextField label="Source URL" source="sourceUrl" />
        <TextField label="Tags" source="tags" />
        <TextField label="Tanant" source="tanant" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
