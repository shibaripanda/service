import React, { useState } from "react"
import '../styles/App.css'
import { MyButton } from "./UI/button/MyButton"
import { fix } from "../fix.js"
// import { axiosCall } from "../module/axiosCall.js"
import { AddInfoInput } from "./UI/input/AddInfoInput.jsx"
import BasicModal from "./Modal.jsx"
import classesBut from './UI/button/css/Button.module.css'
import { Button } from "./UI/button/Button"
import SimpleGrow from "./GrowMod.jsx"


export const PostItem = (props) => {

    const [history, setHistory] = useState({newHis: '', time: ''})
    
    const editOldPost = async () => {
        await props.editPost(props.post._id, {$push: {historylist: {time: history.time, text: history.newHis, author: sessionStorage.getItem('email')}}})
        props.post.historylist.push({time: history.time, text: history.newHis, author: sessionStorage.getItem('email')})
        setHistory({newHis: '', time: ''})
    }
    const editReadyPost = async (stat) => {
        const ready = () => {
            if(stat === 'Готов'){return 'Назначен статус ГОТОВ'}
            else if (stat === 'Новый') {return 'Возврат в ремонт'}
            else if (stat === 'Выдан') {
                props.printVar(props.post)
                return 'Выдан'
            }
        }
        await props.editPost(props.post._id, {status: stat, $push: {historylist: {time: Date.now(), text: ready(stat), author: sessionStorage.getItem('email')}}})
        props.post.historylist.push({time: Date.now(), text: ready(stat), author: sessionStorage.getItem('email')})
        props.post.status = stat
        setHistory({newHis: '', time: ''})
    }
    const upDateOrder = async (newservice) => {
        if(props.post.service.includes(newservice)){
            await props.editPost(props.post._id, {
                $push: {historylist: {time: Date.now(), text: '- Удалено: ' + newservice.name + ' ' + newservice.cost, author: sessionStorage.getItem('email')}},
                $pull: {service: newservice}
            })
            props.post.historylist.push({time: Date.now(), text: '- Удалено: ' + newservice.name + ' ' + newservice.cost, author: sessionStorage.getItem('email')})
            props.post.service = await props.post.service.filter(item => item !== newservice)
        }
        else{
            await props.editPost(props.post._id, {
                $push: {historylist: {time: Date.now(), text: '- Добавлено: ' + newservice.name + ' ' + newservice.cost, author: sessionStorage.getItem('email')}, service: newservice}
            })
            props.post.historylist.push({time: Date.now(), text: '- Добавлено: ' + newservice.name + ' ' + newservice.cost, author: sessionStorage.getItem('email')})
            await props.post.service.push(newservice)
        }
        setHistory({newHis: '', time: ''})
    }
    const checkPress = async (e) => {
		if(e.key === 'Enter'){
            editOldPost(e)
		}
	}
    const itemsAr = () => {
        const ar = []
        ar.push(
        <AddInfoInput 
            type='text' 
            placeholder={'Добавить информацию'} 
            value={history.newHis}
            onChange={e => setHistory({...history, newHis: e.target.value, time: Date.now()})}
            key={777}
            options={fix.searchList}
            onKeyPress={(e) => checkPress(e)}
        />
        )
        if(history.newHis !== ''){
            ar.push(<Button st={classesBut.modaldell} onClick={editOldPost} key={7777}>Добавить</Button>)
        }
        return ar
    }
    const serviceList = () => {

        if(props.post.service.length){
            const list = [
                <tr key={0}>
                <td width={'70%'} align="center">
                    <b>{'Услуги / Запчасти'}</b>
                </td>
                <td width={'15%'} align="center">
                    <b>{'Гарантия'}</b>
                </td>
                <td width={'15%'} align="center">
                    <b>{'Стоимость'}</b>
                </td>
                </tr>
            ]
            let key = 0
            for(let i of props.post.service){
                key++
                list.push(
                        <tr key={key}>
                            <td align="left">
                            &nbsp;&nbsp;{Number(props.post.service.indexOf(i) + 1) + '. ' + i.name}
                            </td>
                            <td align="center">
                                {i.var + ' дней '}
                            </td>
                            <td align="center">
                                {i.cost + ' бел.руб. '}
                            </td>
                        </tr>
                )
                key++
                list.push(
                    <tr key={key++}>
                      <td colSpan={4}><hr style={{margin: '7px 0', width: '100%'}}/></td>
                    </tr>
                  )
            }
            const sumCost = props.post.service.reduce((sum, a) => sum + Number(a.cost), 0)
            if(sumCost > 0){
                list.push(
                    <tr key={1000}>
                        <td align="center">
                        
                        </td>
                        <td align="center">
                        {' Итого: '}
                        </td>
                        <td align="center">
                            {sumCost + ' бел.руб. '}
                        </td>
                    </tr>
                )
            }
    
            return(
                <div>
                    <div key={324}>
                        <table border="0" cellSpacing="0" cellPadding="0" width='123%' className='tableAct1'>
                            <tbody>
                                {list}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
        
    }
    const historyList = () => {
        return(
            <div className="code">
                {SimpleGrow(props.post.historylist.sort((a,b) => b.time - a.time).map(item => '⏰ ' + new Date(item.time).toLocaleString() + '\n✉️' + item.text + '\n✏️' + item.author + '\n'))}
            </div>
        )
    }
    const colorBorderOrder = (status) => {
        if(status === 'Новый') return props.colors.order
        else if(status === 'Готов') return props.colors.ready
        else if(status === 'Выдан') return props.colors.close
        return 'rgb(1, 75, 235)'
    }
    const varantOrReadyButton = () => {
        if(props.post.status === 'Готов'){
            return (
                <div>
                    <div style={{margin: '10px 0'}}><MyButton cl='myButton' onClick={() => editReadyPost('Новый')}>В ремонт</MyButton></div>
                    {/* <div style={{margin: '10px 0'}}><MyButton cl='myButton' onClick={() => props.printVar(props.post)}>Гарантия</MyButton></div> */}
                    <div style={{margin: '10px 0'}}><MyButton cl='myButton' onClick={() => editReadyPost('Выдан')}>Выдать</MyButton></div>
                </div>
            )
        }
        else if(props.post.status === 'Новый'){
            return (
                <div>
                    <div style={{margin: '10px 0'}}><MyButton cl='myButton' onClick={() => props.printOrder(props.post)}>Квитанция</MyButton></div>
                    <div style={{margin: '10px 0'}}><MyButton cl='myButton' onClick={() => editReadyPost('Готов')}>Готов</MyButton></div>
                </div>
            )
        }
        else if(props.post.status === 'Выдан'){
            return (
                <div>
                    <div style={{margin: '10px 0'}}><MyButton cl='myButton' onClick={() => editReadyPost('Новый')}>В ремонт</MyButton></div>
                </div>
            )
        }
       
    }
    const timeSet = (time) => {
        if(new Date(time).toLocaleString().split(',')[0] === new Date(Date.now()).toLocaleString().split(',')[0]){
            return (new Date(time).toLocaleString().split(',')[1]).slice(0, -3)
        }
        return new Date(time).toLocaleString().split(',')[0]
    }
    const orderOpen = () => {
        if(props.post.open === 'open'){
            return (
                <div className={`post`}  style={{border: `3px solid ${colorBorderOrder(props.post.status)}`}}  align='left'>
                    <div className="post__content">
                        <div><strong>№ {props.post.order}  {props.post.title} {props.post.model}</strong></div>
                        <div><strong>{new Date(props.post.date).toLocaleString()}</strong></div>
                        <hr style={{margin: '7px 0', width: '40%'}}/>
                        <div>
                            <table border="0" cellSpacing="0" cellPadding="0" width='100%' className='tableAct1'>
                                <tbody>
                                    <tr><td align='left' width={'25%'}><b>Серийный номер:</b></td><td>{props.post.sn}</td></tr>
                                    <tr><td align='left'><b>Неисправность:</b></td><td>{props.post.problem}</td></tr>
                                    <tr><td align='left'><b>Внешний вид:</b></td><td>{props.post.view}</td></tr>
                                    <tr><td align='left'><b>Комплект:</b></td><td>{props.post.complect}</td></tr>
                                    <tr><td align='left'><b>Приёмщик:</b></td><td>{props.post.manager}</td></tr>
                                    <tr><td align='left'><b>Срочность:</b></td><td>{props.post.speed}</td></tr>
                                    <tr><td align='left'><b>Согласовано:</b></td><td>{props.post.cost}</td></tr>
                                    <tr><td align='left'><b>Заказчик:</b></td><td><strong>{props.post.clientTel}</strong>, {props.post.name}, {props.post.addres}</td></tr>
                                </tbody>
                            </table>
                            <hr style={{margin: '7px 0', width: '40%'}}/>
                            <div style={{margin: '10px 0', width: '20%'}}><BasicModal camp={props.camp} post={props.post} upDateOrder={upDateOrder}/></div>
                            <div key={324}>{serviceList()}</div>
                            <hr style={{margin: '7px 0', width: '100%'}}/>
                            <div>{itemsAr()}</div>
                            <div>{historyList()}</div>
                        </div>
                    </div>
                    <div className="post__btns">
                        <div style={{margin: '10px 0'}}><MyButton onClick={() => props.editOpen(props.post._id)} cl='myButton'>Свернуть</MyButton></div>
                        <div style={{margin: '10px 0'}}>{varantOrReadyButton()}</div>
                        <div style={{margin: '10px 0'}}><MyButton onClick={() => props.deletePost(props.post)} cl='myButton'>Удалить</MyButton></div>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className={`post`} style={{border: `3px solid ${colorBorderOrder(props.post.status)}`, cursor: 'pointer'}} onClick={() => props.editOpen(props.post._id)}>
                    <table border="0" cellSpacing="0" cellPadding="0" width='100%' className='tableAct1'>
                            <tbody>
                                <tr>
                                    <td align='left' width={'15%'}><b>№ {props.post.order}</b></td>
                                    <td align='left' width={'25%'}><b>{props.post.title}</b></td>
                                    <td align='left' width={'40%'}><b>{props.post.model}</b></td>
                                    <td align='right' width={'20%'}><b>{timeSet(props.post.date)}</b></td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            )
        }
    }

    return (
        <div>
            {orderOpen()}
        </div>
    )
}
