export const DynamicColumnFragment = `
fragment DynamicColumn on ColumnDefinition {
  label
  field
  type
  sortable
  gql {
      attribute
      type
  },
}
`