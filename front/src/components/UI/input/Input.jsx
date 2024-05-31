import classesInp from './css/Input.module.css'

import React from "react"

export const Input = React.forwardRef((props, ref) => {
    return (
        <div>
        <input type="text" list={props.options} ref={ref} {...props} className={classesInp[props.cl]}/>
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