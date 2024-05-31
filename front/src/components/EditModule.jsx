import React, { useState } from "react";
import { SettingsInput } from "./UI/input/SettingsInput";
import { SettingButton } from "./UI/button/SettingButton";
import { validateEmail } from "../module/validEmail";

export const EditModule = (props) => {
    const [check, setCheck] = useState('')
    const [input, setInput] = useState('')

    const clickUp = (e) => {
        props.upDateCampInfo(e, props.data.upItem)
        setCheck('✅')
        setInput('')
    }
    const chengText = (e) => {
        setInput(e.target.value)
        props.setNewset({...props.newset, [props.data.upItem]: e.target.value})
        setCheck('')
    }
    const showBut = () => {
        if(props.newset[props.data.upItem]){
            if(['managers', 'supermanagers', 'masters'].includes(props.data.upItem)){
                if(!validateEmail(props.newset[props.data.upItem].split(' ')[2])){
                    return <div style={{color:'red'}}>Пример: Аркадий Паровозов arkadiparovoz@gmail.com</div>
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
            <div><b>{'\n'}{check}{props.data.title}{':\n'}</b>{props.data.name}</div>
            <div><SettingsInput
                type='text' 
                placeholder={'new'} 
                value={input}
                onChange={e => chengText(e)}
                key={props.data.title}/>
            </div>
            <div>
                {showBut()}
            </div>
        </div>
    )
}