import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Data {
    avatar: string;
    name: string;
    nickname: string;
    record: number;
}

function createData(
    avatar: string,
    name: string,
    nickname: string,
    record: number,
): Data {
    return {
        avatar,
        name,
        nickname,
        record,
    };
}

const rows = [
    createData('https://via.placeholder.com/64/0000FF/808080?Text=Examle', 'Name', 'Nickname', 100),
    createData('https://via.placeholder.com/64/0000FF/808080?Text=Examle', 'Name', 'Nickname', 120),
    createData('https://via.placeholder.com/64/0000FF/808080?Text=Examle', 'Name', 'Nickname', 140),
    createData('https://via.placeholder.com/64/0000FF/808080?Text=Examle', 'Name', 'Nickname', 155),
    createData('https://via.placeholder.com/64/0000FF/808080?Text=Examle', 'Name', 'Nickname', 121),
    createData('https://via.placeholder.com/64/0000FF/808080?Text=Examle', 'Name', 'Nickname', 234),
    createData('https://via.placeholder.com/64/0000FF/808080?Text=Examle', 'Name', 'Nickname', 854),
    createData('https://via.placeholder.com/64/0000FF/808080?Text=Examle', 'Name', 'Nickname', 709),
    createData('https://via.placeholder.com/64/0000FF/808080?Text=Examle', 'Name', 'Nickname', 231),
];

interface HeadCell {
    id: keyof Data;
    label: string;
}

const headCells: ReadonlyArray<HeadCell> = [
    {
        id: 'avatar',
        label: 'Аватар',
    },
    {
        id: 'name',
        label: 'Имя',
    },
    {
        id: 'nickname',
        label: 'Никнейм',
    },
    {
        id: 'record',
        label: 'Рекорд',
    },
];

function EnhancedTableHead() {
    return (
        <TableHead>
            <TableRow>
                {headCells.map(headCell => (
                    <TableCell
                        key={headCell.id}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default function LeaderTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="Leaders"
                    >
                        <EnhancedTableHead />
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.name}
                                        >
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                            >
                                                <img
                                                    src={row.avatar}
                                                    width="64"
                                                    height="64"
                                                    style={{ borderRadius: '50%', margin: '10px 0' }}
                                                    alt="" />
                                            </TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.nickname}</TableCell>
                                            <TableCell>{row.record}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 53 * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
