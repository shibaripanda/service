import { useState } from "react"
import React from "react"
import { fix } from "../../fix"
import { axiosCall } from "../../module/axiosCall"
import  Preloader  from "../Preloader"
import MainPage from "../MainPage"
import { AdminSet } from "../settingScreen/AdminSet"
import '../../styles/App.css'
import { DocPrintSet } from "../settingScreen/DocPrintSet"
import { ColorPanel } from "../settingScreen/ColorPanel"
import { TelegramSet } from "../settingScreen/TelegramSet"
import { OwnerSet } from "../settingScreen/OwnerSet"
import { SuperAdminSet } from "../settingScreen/SuperAdminSet"
import { MasterSet } from "../settingScreen/MasterSet"
import { PeopleSet } from "../settingScreen/PeopleSet"

export const SettingsScreen = (props) => {
    const [newset, setNewset] = useState({})
    
    const upDateCampInfo = async (e, index) => {
            await props.getCamp()
            if(['managers', 'supermanagers', 'masters'].includes(index)){
                
                const mask = {email: newset[index].split(' ')[2], name: newset[index].split(' ')[0] + ' ' + newset[index].split(' ')[1]}

                if(props.camp[index].some(user => user.email === mask.email && user.name === mask.name)){
                    await axiosCall('PUT', fix.link + '/camps/' + sessionStorage.getItem('campId'), {$pull: {[index]: mask}})
                }
                else if(props.camp[index].some(user => user.email === mask.email)){
                    // await axiosCall('PUT', fix.link + '/camps/' + sessionStorage.getItem('campId'), {$pull: {[index]: mask}})
                }
                else{
                    const userAr = props.camp['managers'].concat(props.camp['supermanagers']).concat(props.camp['masters'])
                    if(userAr.some(user => user.email === mask.email && user.name !== mask.name)){
                        console.log('name')
                    }
                    else if(userAr.some(user => user.email !== mask.email && user.name === mask.name)){
                        console.log('email')
                    }
                    else{
                        await axiosCall('PUT', fix.link + '/camps/' + sessionStorage.getItem('campId'), {$addToSet: {[index]: mask}})
                    }
                }
            }
            else if(['bot'].includes(index)){
                await axiosCall('PUT', fix.link + '/camps/' + sessionStorage.getItem('campId'), {bot: newset[index]})
            }
            else{
                await axiosCall('PUT', fix.link + '/camps/' + sessionStorage.getItem('campId'), {[index]: newset[index]})
            }
            setNewset({...newset, [index]: ''})
            await props.getCamp()
    }
    const ManagerList = (user) => {
        if(props.camp[user].length > 1){
            return props.camp[user].map(item => item.name + ' (' + item.email + ')\n')
        }
        else if(props.camp[user].length === 0){
            return ''
        }
        return props.camp[user][0].name + ' (' + props.camp[user][0].email + ')'
    }

    const updateColorOfOrders = async (status, newColor) => {
        // (props.camp.statusesOfOrders.find(item => item.status === status)).color = newColor
        await props.getCamp()
        await axiosCall('PUT', fix.link + '/camps/' + sessionStorage.getItem('campId'), {"statusesOfOrders.status" : status}, {"$set" : {"statusesOfOrders.$.color" : newColor}})
        await props.getCamp()
    }

    const roleStatus = () => {
        if(sessionStorage.getItem('role').includes('owner')){
            return [
                {name: 'Владелец', inbox: <OwnerSet camp={props.camp} newset={newset} setNewset={setNewset} upDateCampInfo={upDateCampInfo} managerList={ManagerList}/>},
                {name: 'Сотрудники', inbox: <PeopleSet camp={props.camp} newset={newset} setNewset={setNewset} upDateCampInfo={upDateCampInfo} managerList={ManagerList}/>},
                {name: 'Документы', inbox: <DocPrintSet camp={props.camp} newset={newset} setNewset={setNewset} upDateCampInfo={upDateCampInfo}/>},
                {name: 'Цвет', inbox: <ColorPanel camp={props.camp} newset={newset} setNewset={setNewset} upDateCampInfo={updateColorOfOrders}/>},
                {name: 'Telegram', inbox: <TelegramSet camp={props.camp} newset={newset} setNewset={setNewset} upDateCampInfo={upDateCampInfo}/>}
            ]
        }
        else if(sessionStorage.getItem('role').includes('supermanagers')){
            return [
                {name: 'Супер-Менеджер', inbox: <SuperAdminSet camp={props.camp} newset={newset} setNewset={setNewset} upDateCampInfo={upDateCampInfo} managerList={ManagerList}/>},
                {name: 'Документы', inbox: <DocPrintSet camp={props.camp} newset={newset} setNewset={setNewset} upDateCampInfo={upDateCampInfo}/>},
                {name: 'Цвет', inbox: <ColorPanel camp={props.camp} newset={newset} setNewset={setNewset} upDateCampInfo={updateColorOfOrders}/>},
                {name: 'Telegram', inbox: <TelegramSet camp={props.camp} newset={newset} setNewset={setNewset} upDateCampInfo={upDateCampInfo}/>}
            ]
        }
        else if(sessionStorage.getItem('role').includes('managers')){
            return [
                {name: 'Менеджер', inbox: <AdminSet camp={props.camp} newset={newset} setNewset={setNewset} upDateCampInfo={upDateCampInfo} managerList={ManagerList}/>},
                {name: 'Telegram', inbox: <TelegramSet camp={props.camp} newset={newset} setNewset={setNewset} upDateCampInfo={upDateCampInfo}/>}
            ]
        }
        else if(sessionStorage.getItem('role').includes('masters')){
            return [
                {name: 'Мастер', inbox: <MasterSet camp={props.camp} newset={newset} setNewset={setNewset} upDateCampInfo={upDateCampInfo} managerList={ManagerList}/>},
                {name: 'Telegram', inbox: <TelegramSet camp={props.camp} newset={newset} setNewset={setNewset} upDateCampInfo={upDateCampInfo}/>}
            ]
        }
    }

    if(props.camp){
        return (
            <div className="settingcreen">
                {MainPage(roleStatus())}
            </div>
        )
    }
    else{
        return (
            <Preloader getModule={props.getCamp}/>
        )
    }
}
