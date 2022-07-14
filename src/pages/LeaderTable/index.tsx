import React from 'react';
import ButtonBack from 'components/button-back';
import PageTitle from 'components/page-title';
import LeaderTable from 'components/leader-table';
import { Box } from '@mui/material';

const SignUpPage = () => (
    <Box sx={{ p: 4 }}>
        <ButtonBack color="secondary" />
        <PageTitle title="Наши лидеры 🏆" />
        <LeaderTable />
    </Box>
);

export default SignUpPage;
