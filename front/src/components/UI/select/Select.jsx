import React from "react"
import classesSel from './css/Select.module.css'

export const Select = ({options, defaultValue}) => {

    return (
            <select
                className={classesSel.select}
            >
                <option selected="selected">{defaultValue}</option>

                {options.map(option =>
                <option key={options.indexOf(option)}>
                    {option.name}
                </option>
                )}

            </select>
    )
}