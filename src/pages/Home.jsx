import React, { useState } from 'react'
import { Alert, AlertTitle, Box, Button, Collapse, Snackbar } from '@mui/material'
import AddReactionIcon from '@mui/icons-material/AddReaction'
export const Home = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <h1>Home</h1>
            <Box sx={{ display: 'grid', gap: '1rem' }}>

                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    This is an error alert — check it out!
                </Alert>

                <Button
                    variant='contained' onClick={()=>setOpen(true)}>
                        open
                </Button>

                <Snackbar
                    open={open}
                    message="Alerta Snackbar"
                    autoHideDuration={1000}
                    onClose={()=>setOpen(false)}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        This is an error alert — check it out!
                    </Alert>

                </Snackbar>

                <Alert
                    severity="warning"
                    action={
                        <>
                            <Button color='inherit'>Delete</Button>
                            <Button color='inherit'>Update</Button>
                        </>
                    }>
                    This is a warning alert — check it out!
                </Alert>

                <Alert
                    severity="info"
                    icon={<AddReactionIcon />}
                    variant='outlined'
                >
                    This is an info alert — check it out!
                </Alert>

                <Collapse in={open}>
                    <Alert severity="success"
                        onClose={() => { setOpen(false) }}
                    >
                        This is a success alert — check it out!
                    </Alert>
                </Collapse>

            </Box>
        </>

    )
}
