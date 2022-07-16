import * as React from 'react';
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

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: ReadonlyArray<T>, comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: ReadonlyArray<HeadCell> = [
    {
        id: 'avatar',
        numeric: false,
        disablePadding: true,
        label: 'Аватар',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Имя',
    },
    {
        id: 'nickname',
        numeric: false,
        disablePadding: false,
        label: 'Никнейм',
    },
    {
        id: 'record',
        numeric: true,
        disablePadding: false,
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
