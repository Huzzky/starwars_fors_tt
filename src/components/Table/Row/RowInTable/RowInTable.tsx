import { memo } from 'react'
import { variableRowInTable } from '../../../../const'
import { LabelTextTable } from '../LabelTextTable/index'

type RowInTableProps = {
  values: {
    [index: string]: any
  }
}

const RowInTable = ({ values }: RowInTableProps) => {
  const arrayLabelTextTable = variableRowInTable.map((value, index) => {
    return (
      <LabelTextTable
        text={values[value]}
        key={index}
        className={value + '-style'}
      />
    )
  })

  return <tr>{arrayLabelTextTable}</tr>
}

export default memo(RowInTable)
