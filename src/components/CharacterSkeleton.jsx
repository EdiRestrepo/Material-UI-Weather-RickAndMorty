import { Button, Container, Typography, Box, Grid, TextField, Card, CardMedia, CardContent, Skeleton } from '@mui/material'

import React from 'react'

export const CharacterSkeleton = () => {
  return (
    <Card>
        <Skeleton variant='rectangular' height={250}/>
        <CardContent>
            <Skeleton height={25}/>
        </CardContent>

    </Card>
  )
}
