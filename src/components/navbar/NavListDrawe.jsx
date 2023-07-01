import React from 'react'
import { Paper, List, Box, Typography, Button, ListItem, ListItemText, ListItemIcon, Divider, ListItemButton } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'

export const NavListDrawe = ({ navLinks, NavLink, setOpen }) => {
    return (
        <Box sx={{ width: 250, }}>
            {/* <nav>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                </List>
            </nav>
            <Divider /> */}
            <nav>
                <List>
                    {
                        navLinks.map(item => (
                            <ListItem disablePadding key={item.title}>
                                <ListItemButton 
                                component={NavLink} 
                                to={item.path}
                                onClick={()=>setOpen(false)}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                    <ListItemText>{item.title}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </nav>
        </Box>
    )
}
