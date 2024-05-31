import React, { useState } from "react";
import { axiosCall } from "../module/axiosCall";
import { Link } from "react-router-dom";
import { fix } from "../fix";
import { CampList } from "../components/CampList";
import Preloader from "../components/Preloader";

export const MyCamps = () => {
    const [camps, setCamps] = useState([])

    const getMyCamps = async () => {
        const res = await axiosCall('GET', fix.link + '/camps/email/' + sessionStorage.getItem('email'))
        setCamps(res.data)
    }

    const loadingCamps = () => {
        if(Object.keys(camps).length){
                return(
                    <div style={{margin: '15px'}}>
                        <div><CampList camps={camps}/></div>
                        <hr style={{margin: '15px 0'}}/>
                        <div align='center'><Link to="/">Назад</Link></div>
                    </div>
                )
        }
        else{
            return <Preloader getModule={getMyCamps}/>
        }
    }
    
    return (
        <div>{loadingCamps()}</div>
    )
}