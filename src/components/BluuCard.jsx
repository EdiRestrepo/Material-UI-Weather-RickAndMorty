import React from 'react'
import { Button, Card, CardContent, CardMedia, Typography, CardActions, CardActionArea } from '@mui/material'

export const BluuCard = () => {
  return (
    <Card sx={{mt:1,
    transition: "0.2s",
    "&:hover":{
    transform: "scale(1.05)"},}}>
        <CardActionArea>
        <CardMedia 
        component="img" 
        image='https://via.placeholder.com/1000x200'
        height='200'
        alt='una descripcion'/>
        <CardContent>
            <Typography variant='h5'>Cart title</Typography>
            <Typography component='p' variant='body2' >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
        </CardContent>
        <CardActions>
            {/* <Button variant='contained'>Add</Button> */}
            {/* <Button color='error'>Remove</Button> */}
        </CardActions>
        </CardActionArea>
    </Card>
  )
}
