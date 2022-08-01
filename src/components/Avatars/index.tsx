import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

interface IAvatars {
    size?: number;
    text: string;
}

export const Avatars = ({ size, text }: IAvatars) => (
    <Stack direction="row" spacing={2}>
        <Avatar
            alt={text}
            src="/static/images/avatar/1.jpg"
            sx={{ width: size, height: size }}
        />
    </Stack>
);
