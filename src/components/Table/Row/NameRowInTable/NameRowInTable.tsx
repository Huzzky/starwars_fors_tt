import { nameRowInTable } from '../../../../const'

export const NameRowInTable = () => {
  let arrayNameRowInTable = nameRowInTable.map((value, index) => {
    return <th key={index}>{value}</th>
  })
  return <tr>{arrayNameRowInTable}</tr>
}
