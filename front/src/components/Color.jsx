import { useState } from "react"
import { RgbStringColorPicker } from "react-colorful"
import { MyButton } from "./UI/button/MyButton"

export const ColorSettings = (props) => {
    const [color, setColor] = useState(props.data.color)
    const [check, setCheck] = useState('')

    const clickUp = (e) => {
        props.upDateCampInfo(e, props.data.upItem)
        setCheck('✅')
    }
    const chengColor = (e) => {
        props.setNewset({...props.newset, [props.data.upItem]: e})
        setCheck('')
        setColor(e)
    }
    const showBut = () => {
        if(color !== props.data.color){
            return (
                <MyButton
                    cl={'colorBut'}
                    onClick={(e) => clickUp(e)}
                    key={Date.now() + 1}>
                    {props.data.titleBut}
                </MyButton>
            )
        }
        return (
            <MyButton
                disabled={true}
                cl={'colorButDisable'}
                onClick={(e) => clickUp(e)}
                key={Date.now() + 1}>
                {props.data.titleBut}
            </MyButton>
        )
    }
    return (
        <div>
            <div><b>{'\n'}{check}{props.data.title}</b></div>
            <div>
                <RgbStringColorPicker color={color} onChange={e => chengColor(e)}/>
            </div>
            <div>
                {showBut()}
            </div>
        </div>
    )
}