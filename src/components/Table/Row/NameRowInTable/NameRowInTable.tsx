import { nameRowInTable } from '../../../../const'
import './_NameRowInTable.css'

export const NameRowInTable = () => {
  let arrayNameRowInTable = nameRowInTable.map((value, index) => {
    return (
      <th className="table__name-row-th" key={index}>
        {value}
      </th>
    )
  })
  return (
    <thead className="table__thead">
      <tr className="table__name-row-tr">{arrayNameRowInTable}</tr>
    </thead>
  )
}
