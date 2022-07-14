import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';

export default function AlignItemsList() {
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
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
            </ListItem>
        </List>
    );
}
