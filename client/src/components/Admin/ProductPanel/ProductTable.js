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

const ProductTable = ({ deleteProduct, products, categories }) => {
    const classes = useStyles();


    function getCategoryName(id){
      const name = categories.filter(cat => cat._id === id);

      return name.length > 0 ? name[0].categoryName : 'Not Categorized';
    }

    return  (
        <TableContainer component={Paper} className={classes.table}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="left">Product Name</StyledTableCell>
                            <StyledTableCell align="left">Price</StyledTableCell>
                            <StyledTableCell align="left">Category</StyledTableCell>
                            <StyledTableCell align="left">Stocks</StyledTableCell>
                            <StyledTableCell align="left">Date</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {products.map((row) => (
                            <StyledTableRow key={row._id}>
                            <StyledTableCell component="th" scope="row">
                                {row._id}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.productName}</StyledTableCell>
                            <StyledTableCell align="left">{row.price}. Rs</StyledTableCell>
                            <StyledTableCell align="left">{row.category ? getCategoryName(row.category) : 'Not Categorized'}</StyledTableCell>
                            <StyledTableCell align="left">{row.attributes.stock}</StyledTableCell>
                            <StyledTableCell align="left">{row.date}</StyledTableCell>
                            <StyledTableCell align="left">
                              <Button variant="contained" size="small" color="secondary" onClick={() => {
                                 deleteProduct(row._id);
                              }}>Delete</Button>
                            </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>

    )
}

export default ProductTable
