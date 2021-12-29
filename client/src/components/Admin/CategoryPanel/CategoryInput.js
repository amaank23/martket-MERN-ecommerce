import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        padding: 20
    },
    inputText: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10
    }
})



const CategoryInput = ({ addCategory }) => {
    const classes = useStyles();

    const[categoryName, setCategoryName] = useState('');

    return (
        <div className="category-input-form">
            <Paper>
                <form className={classes.root} onSubmit={(e) => e.preventDefault()}>    
                    <Typography variant="h5">Add Category</Typography>   
                    <TextField id="outlined-basic" 
                    label="Category" 
                    variant="outlined" 
                    className={classes.inputText}
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)} />
                    <Button variant="contained" color="primary"  onClick={(e) => {
                    e.preventDefault();
                    addCategory(categoryName);
                }}>Submit</Button>
                </form>
            </Paper>
            
        </div>
    )
}

export default CategoryInput
