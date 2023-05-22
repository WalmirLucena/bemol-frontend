import colors from '../../styles/colors'
import { Button as ButtonBase } from '@mui/material'
import { styled } from '@mui/material/styles'

interface ButtonProps {
  variant: 'text' | 'outlined' | 'contained'
  background?: string
}

export const Button = styled(ButtonBase)<ButtonProps>`
  border-radius: 28px;
  width: 100%;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: 500;
  line-height: 20px;
  padding-top: 18px;
  padding-bottom: 18px;
  color: ${colors.white};
  &:hover {
    ${(props) =>
      props.variant === 'outlined'
        ? 'background: None'
        : `background-color: ${colors.primaryLight}`} 
  }
  background-color: ${(props) => `${props.background}`};
`
