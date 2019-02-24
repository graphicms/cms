export const DynamicFieldFragment = `
fragment DynamicField on FieldDefinition {
  value,
  type,
  size,
  name,
  label,
  gql {
      attribute
      type
  },
  required,
  tab,
  readonly
}
`