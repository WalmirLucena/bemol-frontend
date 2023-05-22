import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import colors from '../../styles/colors'
import { CloseOutlined, WarningAmberOutlined } from '@mui/icons-material'
import { Box } from '@mui/material'

interface Props {
  title: string
  text: string
  isOpen: boolean
  onClose: VoidFunction
}

export default function WarningModal(props: Props): React.ReactElement {
  return (
    <Dialog
      open={props.isOpen}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        style: {
          borderRadius: 12
        }
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        bgcolor={colors.error}
        color={colors.white}
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          display: 'flex'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <WarningAmberOutlined style={{ marginRight: '8px' }} />
          <Box>{props.title}</Box>
        </Box>
        <Box onClick={props.onClose} style={{ cursor: 'pointer' }}>
          <CloseOutlined />
        </Box>
      </DialogTitle>
      <DialogContent style={{ marginTop: '24px' }}>
        <DialogContentText color={colors.black} id="alert-dialog-description">
          {props.text}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}
