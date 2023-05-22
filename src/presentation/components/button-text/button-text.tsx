import * as React from 'react'
import {Button} from './button-text.styles'

type Variant = 'text' | 'outlined' | 'contained'

type Props = {
  style?: React.CSSProperties
  title: string
  onClick: any
  disabled?: boolean
  link?: string
  variant?: Variant
  startIcon?: JSX.Element | JSX.Element[]
  background?: string
}
const GenericButton: React.FC<Props> = (props: Props) => {
  return (
    <Button
      href={props.link}
      disabled={props.disabled}
      role="generic-button"
      onClick={props.onClick}
      autoFocus={false}
      variant={props.variant ? props.variant : 'contained'}
      startIcon={props.startIcon}
      background={props.background}
      style={{
        ...props.style
      }}
      disableRipple
    >
      {props.title}{' '}
    </Button>
  )
}
export default GenericButton
