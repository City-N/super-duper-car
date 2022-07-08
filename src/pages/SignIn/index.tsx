import React, { FC, memo, useCallback } from 'react';
import { Container, Button } from '@mui/material';

const SignInPage: FC<{}> = memo(() => {

    const handleClick = useCallback(() => console.log('CLICK'), []);

    return (
        <Container>
            <Button 
                variant='contained' 
                sx={{ boxShadow: (theme) => theme.shadows[1] }}
                onClick={handleClick}
            >
                Клик
            </Button>
        </Container>
    );
});

export default SignInPage;
