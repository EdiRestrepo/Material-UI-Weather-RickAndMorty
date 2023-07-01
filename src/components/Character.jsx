import React from 'react'
import { Button, Container, Typography, Box, Grid, TextField, Card, CardMedia, CardContent } from '@mui/material'

export const Character = ({name, image}) => {
  return (
    <Card>
    <CardMedia
      image={image}
      title={name}
      sx={{ height: 250, width: 250 }} />
    <CardContent>
      <Typography variant='h5'>{name}</Typography>
    </CardContent>
  </Card>
  )
}
