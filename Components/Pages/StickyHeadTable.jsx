import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import { getData } from '../../Services/data';

const columns = [
  { id: 'name', label: 'Name', minWidth: 10 },
  { id: 'code', label: 'Email', minWidth: 25 },
  {
    id: 'dateModified',
    label: 'D_Modified',
    minWidth: 50,
    align: 'right',
    format: value => value.toLocaleString(),
    //format: value => value.toDateString(),

  },
  {
    id: 'dateCreated',
    label: 'D_Created',
    minWidth: 50,
    align: 'right',
    format: value => value.toLocaleString(),
    //format: value => value.toDateString(),
  },
  {
    id: 'edit',
    label: 'Fav',
    minWidth: 20,
    align: 'right',
    //format: value => value.toFixed(2),
    format: value => <FavoriteBorderIcon variant="contained" color="disabled">Fav</FavoriteBorderIcon>,
    
  },
  {
    id: 'setDelete',
    label: 'Delete',
    minWidth: 30,
    align: 'right',
    //format: value => value.toFixed(2),
    format: value => <DeleteIcon variant="contained" color="disabled">Delete</DeleteIcon>,
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    textTransform: "none",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows] = useState(getData());

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
  
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {console.log(columns)}
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {/* {column.format && typeof value === 'number' ? column.format(value) : value} */}
                        {column.format && value ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
