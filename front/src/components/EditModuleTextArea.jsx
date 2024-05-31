import React, { useState } from "react";
import { SettingButton } from "./UI/button/SettingButton";
import { validateEmail } from "../module/validEmail";
import TextArea from "antd/es/input/TextArea";

export const EditModuleTextArea = (props) => {
    const [check, setCheck] = useState('')

    const clickUp = (e) => {
        props.upDateCampInfo(e, props.data.upItem)
        setCheck('✅')
    }
    const textInArea = () => {
        if(props.newset[props.data.upItem] === ''){
            return props.data.name
        }
        return props.newset[props.data.upItem]
    }
    const chengText = (e) => {
        props.setNewset({...props.newset, [props.data.upItem]: e.target.value})
        setCheck('')
    }
    const showBut = () => {
        if(props.newset[props.data.upItem]){
            if(['managers', 'supermanagers', 'masters'].includes(props.data.upItem)){
                if(!validateEmail(props.newset[props.data.upItem])){
                    return <div style={{color:'red'}}>некоректный емейл</div>
                } 
            }
            return (
                <SettingButton
                    onClick={(e) => clickUp(e)}
                    key={Date.now() + 1}>
                    {props.data.titleBut}
                </SettingButton>
            )
        }
    }
    return (
        <div>
            <div><b>{'\n'}{check}{props.data.title}{':\n'}</b></div>
            <div><TextArea
                maxrows={150}
                aria-label="maximum height"
                placeholder="new"
                defaultValue={props.data.name}
                type='text'
                value={textInArea()}
                onChange={e => chengText(e)}
                key={props.data.title}/>
            </div>
            <div>
                {showBut()}
            </div>
        </div>
    )
}
