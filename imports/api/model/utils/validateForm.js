// Get Structure recursively
const getStructure = ({ object, parts, error }) => {
  const newObject = { ...object }

  const nextPart = parts.shift()
  if (parts.length) {
    newObject[nextPart] = getStructure({
      object: newObject[nextPart],
      parts,
      error,
    })
  } else {
    newObject[nextPart] = error
  }
  return newObject
}

// Function to validate form values against a schema
export const validateForm = schema => values => {
  const validationValues = { ...values }

  // Clean data
  schema.clean(validationValues)

  // Get validation context
  const context = schema.newContext()
  context.validate(validationValues)

  // Map errors to redux form format
  const errors = context.invalidKeys().reduce(
    (previousValue, currentElement) => {
      const nameParts = currentElement.name.split('.')

      const object = getStructure({
        object: previousValue,
        parts: nameParts,
        error: context.keyErrorMessage(currentElement.name),
      })

      return object
    },
    {}
  )

  return errors
}
