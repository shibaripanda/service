import React from "react"
import classesSel from './css/Select.module.css'

export const Select = ({options, defaultValue, value, onChange}) => {

    return (
            <select
                name="selectedFruit"
                // defaultValue={'orange'}
                // multiple={true}
            >
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
            </select>
            // <select
            //     className={classesSel.modalSmall}
            //     value={value}
            //     onChange={event => onChange(event.target.value)}
            // >
            //     <option disabled value="">{defaultValue}</option>
            //     {options.map(option =>
            //     <option value={option.email} key={options.indexOf(option)}>
            //         {option.name}
            //     </option>
            //         )}

            // </select>
    )
}