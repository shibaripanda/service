import React from "react"
import '../styles/App.css'
import { MyButton } from "./UI/button/MyButton.jsx"
import { useNavigate } from "react-router-dom"


export const CampItem = (props) => {

    // console.log(props.camp.role)

    const navigate = useNavigate()

    const openService = () => {
        console.log(props.camp.role.split(',')[0])
        sessionStorage.setItem('role', props.camp.role.split(','))
        // sessionStorage.setItem('role', 'manager')
        sessionStorage.setItem('campId', props.camp._id)
        sessionStorage.setItem('maincolor', props.camp.color)
        navigate('../service')
        window.location.reload()
    }
    
    const orderOpen = () => {

        return  (
            <div className="post" style={{border: `3px solid rgb(1, 75, 235)`}}>
                <div className="post__content">
                    <strong>{props.camp.name}</strong>
                    <div>{props.camp.role}</div>
                </div>
                <div>&nbsp;&nbsp;&nbsp;</div>
                <div className="post__btns">
                <MyButton onClick={() => openService()}>Вход</MyButton>

                </div>
            </div>
        )
    }

    return (
        <div>
            {orderOpen()}
        </div>
    )
}