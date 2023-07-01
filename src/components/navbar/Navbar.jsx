import React, { useState } from 'react'
import { NavListDrawe } from './NavListDrawe'
import { AppBar, Button, Drawer, IconButton, Toolbar, Typography, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'

import { NavLink } from 'react-router-dom'

export const Navbar = ({navLinks}) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <AppBar position='static' color='success'>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        size='large'
                        onClick={() => setOpen(true)}
                        sx={{display: {xs: "flex", sm: "none"}}}
                        edge="start">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' sx={{ flexGrow: 1 }}>News</Typography>
                    <Box sx={{display: {xs: "none", sm: "block"}}}>


                        {navLinks.map(item => (
                            <Button
                                color='inherit'
                                key={item.title}
                                component={NavLink}
                                to={item.path}
                            >{item.title}
                            </Button>
                        ))}

                    </Box>

                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                anchor='left'
                onClose={() => setOpen(false)}
                sx={{display: {xs: "flex", sm: "none"}}}>
                <NavListDrawe 
                navLinks={navLinks} 
                NavLink={NavLink} 
                setOpen={setOpen}/>
            </Drawer>
        </>
    )
}

