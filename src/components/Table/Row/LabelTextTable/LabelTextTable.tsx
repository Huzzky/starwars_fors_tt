import { memo } from 'react'

type LabelTextTableProps = {
  className: string
  text: string
}

const LabelTextTable = ({ className, text }: LabelTextTableProps) => {
  return <td className={className}>{text}</td>
}

export default memo(LabelTextTable)
