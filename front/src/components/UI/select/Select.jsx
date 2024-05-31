import React from "react"
import classesSel from './css/Select.module.css'

export const Select = ({options, defaultValue, name}) => {

    return (
            <select
                className={classesSel.select}
                name={name}
                // placeholder="vfvfvf"
                // value={value}
                // onChange={event => onChange(event.target.value)}
            >
                <option value="JS" selected="selected">{defaultValue}</option>
                {options.map(option =>
                <option key={options.indexOf(option)}>
                    {option.name}
                </option>
                )}

            </select>
    )
}