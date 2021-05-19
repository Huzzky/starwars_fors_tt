import { memo } from 'react'
import { LabelTextTable } from '../../../DRYComponents/LabelTextTable'

const RowInTable = ({
  name,
  gender,
  mass,
  eye_color,
}: {
  name: string
  gender: string
  mass: string
  eye_color: string
}) => {
  return (
    <>
      <LabelTextTable text={name} className="" />
      <LabelTextTable
        text={gender === 'n/a' ? 'Нет данных' : gender}
        className=""
      />
      <LabelTextTable text={mass} className="" />
      <LabelTextTable
        text={eye_color === 'n/a' ? 'Нет данных' : eye_color}
        className=""
      />
    </>
  )
}

export default memo(RowInTable)
