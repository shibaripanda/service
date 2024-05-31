import React from "react"
import classes from './css/Input.module.css'

export const SettingsInput = React.forwardRef((props, ref) => {
    return (
        <div>
        <input type="text" list={props.options} ref={ref} {...props} className={classes.settingsInput}/>
        <datalist id={props.options}>
        {[...new Set(props.options)].map(option =>
                <option key={props.options.indexOf(option)}>
                    {option}
                </option>
                    )}
        </datalist>
        </div>
    )
})