import { Button } from '@mui/material'
import React from 'react'
import { useSnackbar } from 'notistack'

export const Login = () => {
  const {enqueueSnackbar} = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("Hola desde snackbar", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      }

    })
  }

  return (
    <>
      <h1>Login</h1>
      <Button variant='contained' onClick={handleClick}>Open</Button>
    </>
  )
}
