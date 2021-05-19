import { memo } from 'react'

const LabelTextTable = ({
  className,
  text,
}: {
  className: string
  text: string
}) => {
  return <th className={className}>{text}</th>
}

export default memo(LabelTextTable)
