import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';



const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);


const useStyles = makeStyles({
    table: {
        width: "100%"
      },
})

const CategoryTable = ({ categories, deleteCategory }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.table}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="left">Category</StyledTableCell>
                            <StyledTableCell align="left">Date</StyledTableCell>
                            <StyledTableCell align="left">Actions</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {categories.map((row) => (
                            <StyledTableRow key={row._id}>
                            <StyledTableCell component="th" scope="row">
                                {row._id}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.categoryName}</StyledTableCell>
                            <StyledTableCell align="left">{row.date}</StyledTableCell>
                            <StyledTableCell align="left">
                              <Button variant="contained" size="small" color="secondary" onClick={() => {
                                 deleteCategory(row._id);
                              }}>Delete</Button>
                            </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>

    )
}

export default CategoryTable
