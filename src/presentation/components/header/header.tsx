import { Hidden, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import theme from '../../styles/theme'
import {
  AppBarBase,
  Circle,
  HeaderBase,
  Toolbar,
  Box,
  CircleText
} from './header.styles'
import {
  MenuRounded,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

type Props = {
}

const MOBILE_WIDTH = 900

const Header: React.FC<Props> = () => {
  const [state, setState] = useState({
    screeWidth: window.innerWidth,
    screenHeight: window.innerHeight
  })
  const navigate = useNavigate()

  window.onresize = function () {
    setState({
      ...state,
      screeWidth: window.innerWidth,
      screenHeight: window.innerHeight
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <HeaderBase>
        <AppBarBase color="secondary">
          <Toolbar
            marginLeft={state.screeWidth >= MOBILE_WIDTH ? 6 : 0}
            marginRight={state.screeWidth >= MOBILE_WIDTH ? 6 : 0}
          >
             <Box>
                <MenuRounded color="primary"/>
             </Box>
            
            <Box
              onClick={() => navigate('/dashboard')}
              style={{ cursor: 'pointer' }}
            >
              <Hidden mdDown>
                <img src="https://xjz93ig3lx.map.azionedge.net/Custom/Content/Themes/Shared/Images/marca-bemol.svg" height="50" />
              </Hidden>
            </Box>
            <Box>
              <Hidden mdDown>
                <h4>Usuário</h4>
              </Hidden>
              <Circle>
                <CircleText>
                  U
                </CircleText>
              </Circle>
            </Box>
          </Toolbar>
        </AppBarBase>
      </HeaderBase>
    </ThemeProvider>
  )
}

export default Header