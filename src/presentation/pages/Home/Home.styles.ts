import colors from '../../styles/colors'
import { styled, Button, Box } from '@mui/material'

export const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
`

interface TitleProps {
  fontSize: number
}
export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding: 40px;
  border-radius: 8px;
  align-self: center;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`
export const Title = styled('h2')<TitleProps>`
  /* Primary/title/large */
  color: $black;
  text-align: left;
  /* Primary/title/large */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => {
    return `${props.fontSize}px`
  }};
  line-height: ${(props) => {
    return `${props.fontSize * 1.2}px`
  }};
  /* or 127% */
  display: flex;
`
export const Label = styled('p')`
  margin-left: 16px;
  color: #001d32;
  margin-top: 5px;
  margin-bottom: 40px;
`
export const StyledLink = styled('a')`
  text-align: center;
  color: ${colors.primary};
  text-transform: lowercase;
  margin-top: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
export const SubmitButton = styled(Button)`
  margin-top: 32px;

  &:hover {
    background-color: ${colors.primaryLight};
  }

  &:disabled {
    background-color: ${colors.disabledBackground};
    color: ${colors.disabledColor};

    &:hover {
      opacity: 1;
    }
  }
`
export const SignInContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding: 40px;
  border-radius: 8px;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%
`
