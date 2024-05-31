import React from "react"
import classes from './css/Button.module.css'

export const SettingButton = ({children, ...props}) => {
    return (
           <button {...props} className={classes.settingButton}>
            {children}
           </button>
    )
}