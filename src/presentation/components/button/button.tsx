import React from 'react'
import { Button, BoxBase } from './button.styles'

type Props = {
  text: string
  onPress?: any
  height?: string
}

const SubmitButton: React.FC<Props> = ({ text, onPress, height }: Props) => {
  return (
    <BoxBase>
      <Button
        sx={{ height: height }}
        onClick={onPress}
        role="submit"
        type="submit"
      >
        {text}
      </Button>
    </BoxBase>
  )
}

export default SubmitButton