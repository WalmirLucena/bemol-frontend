import { styled } from '@mui/material/styles'
import { Box, ButtonBase } from '@mui/material'
import colors from '../../styles/colors'

export const Button = styled(ButtonBase)(({ theme }) => ({
  backgroundColor: colors.primaryMain,
  height: '60px',
  width: '100%',
  minWidth: '120px',
  borderRadius: '100px',
  color: colors.white,
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',

  '&:hover': {
    opacity: 0.8
  }
}))

export const BoxBase = styled(Box)`
  margin-top: 16px;
`