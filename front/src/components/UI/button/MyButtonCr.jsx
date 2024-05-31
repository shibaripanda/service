import React from "react"
import classes from './css/Button.module.css'

export const MyButtonCr = ({children, ...props}) => {
    return (
           <button {...props} className={classes.myButtonCr}>
            {children}
           </button>
    )
}