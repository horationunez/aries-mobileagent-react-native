import {Static, String} from 'runtypes'

export const UUID = String.withConstraint((uuid) => {
  let uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  if (uuidRegex.test(uuid)) {
    return true
  } else {
    return `'${uuid}' is not a valid UUID`
  }
})

export type UUID = Static<typeof UUID>

export const URLType = String
export type URLType = Static<typeof URLType>
