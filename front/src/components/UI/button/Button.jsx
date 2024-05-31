import React from "react"

export const Button = ({children, ...props}) => {
    return (
           <button {...props} className={props.st}>
            {children}
           </button>
    )
}