import React from "react"
import { CampItem } from "./CampItem"

export const CampList = (props) => {

    const campAllList = () => {
        const ar = []
        for(let i of Object.keys(props.camps)){
            for(let x of props.camps[i]){
                const index = ar.findIndex(item => item._id.toString() === x._id.toString())
                if(index < 0){
                    ar.push({_id: x._id, name: x.namecomp, role: i, color: x.colorsettings.main})
                }
                else{
                    ar[index].role = ar[index].role + ', ' + i
                }
            }
        }
        return ar
    }

    return (
        <div>
            <h3 style={{textAlign: 'center'}}>
                <div>Список моих компаний</div>
                <div>{sessionStorage.getItem('email')}</div>
            </h3>
            {campAllList().map((camp, index) => <CampItem camp={camp} key={index}/>)}
        </div>
    )
}