import { memo } from 'react'

type LabelTextTableProps = {
  className: string
  text: string
}

const LabelTextTable = ({ className, text }: LabelTextTableProps) => {
  return <th className={className}>{text}</th>
}

export default memo(LabelTextTable)
