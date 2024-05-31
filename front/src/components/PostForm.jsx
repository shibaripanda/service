import React, { useState, useRef, useEffect } from "react"
import { MyInput } from "./UI/input/MyInput"
import { fix } from "../fix.js"
import { rendomNumberOrder } from "../module/rendomNumberOrder.js"
import { rendomLetteOrder } from "../module/rendomLetteOrder.js"
import { MyButtonCr } from "./UI/button/MyButtonCr.jsx"
import { updatingFastList } from "../module/updatingFastList.js"

export const PostForm = ({create, fixlist}) => {

    const inputRef = useRef(null)
    
    const sun = (x) => {
        const newObj = {}
        for(let i of x){
            newObj[i.index] = ''
        }
        return newObj
    }
    const [post, setPost] = useState(sun(fix.listOfFields))
    
    const addNewPost = async (e) => {
        updatingFastList(fixlist, post)
        e.preventDefault()
        const newPost = {
            ...post,
            open: 'open',
            historylist: [{time: Date.now(), text: 'Создан', author: sessionStorage.getItem('email')}],
            campId: sessionStorage.getItem('campId'),
            id: Date.now(), order: rendomNumberOrder(fix.orderNumbers) +
             '_' +
            post.manager.split(' ')[0][0] +
            post.manager.split(' ')[1][0] + 
            rendomLetteOrder(), date: Date.now()
        }
        create(newPost)
        
        setPost(sun(fix.listOfFields))
    }
    function checkPress(e, step){
		if(e.key === 'Enter' && step !== 'speed'){
			inputRef.current.focus();
		}
	}
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    const inputField = (fields) => {
        const ar = []
        let test = 0
        let keyIndex = 0
        const arw =  fields.filter(item => !['id', 'order', 'date', 'history'].includes(item.index))
        for(let i of arw){
            
            if(i.index === 'manager' || post[arw[keyIndex - 1].index] !== ''){
                const opt = fixlist[i.index] ? fixlist[i.index] : []
                keyIndex++
                ar.push(
                    <MyInput
                        type='text' 
                        placeholder={i.name} 
                        value={post[i.index]}
                        onChange={e => setPost({...post, [i.index]: e.target.value})}
                        key={keyIndex}
                        options={opt.sort((a,b) => b.level - a.level).map(item => item.name)}
                        ref={inputRef}
                        onKeyPress={(e) => checkPress(e, i.index)}
                    />
                ) 
            }
            if(post[i.index] === '') test++
        }
        if(test === 0){
            keyIndex++
            ar.push(<MyButtonCr onClick={addNewPost} key={keyIndex}>Создать заказ</MyButtonCr>)
        }
        // if(post.manager !== ''){
        //     setView(false)
        // }
        // else{
        //     setView(true)
        // }
        
        return ar
    }
    

    return (
        <div>
            <form>
                {inputField(fix.listOfFields)}
            </form>
        </div>
    )
}