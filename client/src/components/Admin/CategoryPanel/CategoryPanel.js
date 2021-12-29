import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CategoryTable from './CategoryTable';
import CategoryInput from './CategoryInput';
import Paper from '@material-ui/core/Paper';
import { getCategories, addCategory, deleteCategory } from '../../../redux/actions/category';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      color: theme.palette.text.secondary,
      height: '90vh'
    },
    gridSpacing: {
        padding: theme.spacing(4)
    }
  }));

function CategoryPanel({ getCategories, categories, addCategory,  deleteCategory }) {
  const classes = useStyles();

  useEffect(() => {
    getCategories()
  }, [getCategories])

  return (
      <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container  spacing={3}>
                <Grid item xs={4} className={classes.gridSpacing}>
                    <CategoryInput addCategory={addCategory} />
                </Grid>
                <Grid item xs={8} className={classes.gridSpacing}>
                    <CategoryTable categories={categories}  deleteCategory={deleteCategory} />
                    
                </Grid>
            </Grid>
          </Paper>
          
      </div>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories
})


export default connect(mapStateToProps, { getCategories, addCategory, deleteCategory })(CategoryPanel);