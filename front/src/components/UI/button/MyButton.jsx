import React from "react"
import classes from './css/Button.module.css'

export const MyButton = ({cl, children, ...props}) => {
    return (
        <button {...props} className={classes[cl] ? classes[cl] : classes.myButton}>
        {children}
        </button>
    )
}