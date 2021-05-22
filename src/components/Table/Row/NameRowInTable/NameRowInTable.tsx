import { nameRowInTable } from '../../../../const'
import styles from './_NameRowInTable.module.css'

export const NameRowInTable = () => {
  let arrayNameRowInTable = nameRowInTable.map((value, index) => {
    return (
      <th className={styles['table__name-row-th']} key={index}>
        {value}
      </th>
    )
  })
  return (
    <thead className={styles['table__thead']}>
      <tr className={styles['table__name-row-tr']}>{arrayNameRowInTable}</tr>
    </thead>
  )
}
