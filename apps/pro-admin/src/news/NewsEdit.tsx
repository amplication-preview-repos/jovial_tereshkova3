import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const NewsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput
          label="Description Preview"
          multiline
          source="descriptionPreview"
        />
        <TextInput label="Slug" source="slug" />
        <SelectInput
          source="source"
          label="Source"
          choices={[
            { label: "PROTANKI", value: "PROTANKI" },
            { label: "LESTA", value: "LESTA" },
            { label: "WARGAMING", value: "WARGAMING" },
            { label: "OTHER", value: "OTHER" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Source URL" source="sourceUrl" />
        <TextInput label="Tags" source="tags" />
        <SelectInput
          source="tanant"
          label="Tanant"
          choices={[
            { label: "RU", value: "RU" },
            { label: "EU", value: "Eu" },
            { label: "ALL", value: "ALL" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
