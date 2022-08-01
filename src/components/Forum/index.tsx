import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import FolderIcon from '@mui/icons-material/Folder';
import { Avatars } from 'components/Avatars';

export default function ForumList() {
    return (
        <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <FolderIcon />
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                    secondary=" — I'll be in your neighborhood doing errands this…"
                />
                <ListItemAvatar>
                    <Avatars text="Remy Sharp" />
                </ListItemAvatar>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <FolderIcon />
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                    secondary=" — I'll be in your neighborhood doing errands this…"
                />
                <ListItemAvatar>
                    <Avatars text="Remy Sharp" />
                </ListItemAvatar>
            </ListItem>
        </List>
    );
}
