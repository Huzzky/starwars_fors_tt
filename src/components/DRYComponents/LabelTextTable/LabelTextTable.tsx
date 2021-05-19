import { memo } from 'react'

const LabelTextTable = ({
  className,
  text,
}: {
  className: string
  text: string
}) => {
  return <p className={className}>{text}</p>
}

export default memo(LabelTextTable)
