import colors from '../../styles/colors'
import { Grid, styled, TextField, Typography } from '@mui/material'

export const Container = styled(Grid)`
  margin-top: 100px;

  @media (max-width: 600px) {
    padding: 0px 10px;
    margin-top: 24px;
  }
`

export const MainContainer = styled(Grid)`
  padding: 0px 100px;
  margin-top: 100px;

  @media (max-width: 600px) {
    padding: 0px 10px;
    margin-top: 80px;
  }
`

export const InputBase = styled(TextField)(() => ({
    width: '100%',
    '& label.Mui-focused': {
      color: '#00CE7C',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#00CE7C',
      }
    }
  }))

  export const Form = styled('form')``