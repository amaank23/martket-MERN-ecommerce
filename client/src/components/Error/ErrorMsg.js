import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/styles' 

const ErrorMsg = ({ children }) => {
    const useStyles = makeStyles({
        textError: {
            color: "red",
            fontWeight: "bold"
        },
        textCenter: {
            textAlign: "center"
        }
    })
    const classes = useStyles();
    return (
        <>
         <Typography variant="body1" className={`${classes.textError} ${classes.textCenter}`}>{children}</Typography>   
        </>
    )
}

export default ErrorMsg
