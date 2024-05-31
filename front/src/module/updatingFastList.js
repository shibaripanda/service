import { fix } from "../fix"
import { axiosCall } from "./axiosCall"

const upFunc = async (data) => {
    await axiosCall('PUT', fix.link + '/camps/' + sessionStorage.getItem('campId'), {lists: {}})
    const list = {}
    for(let i of Object.keys(data)){
        list[i] = []
        for(let y of data[i]){
            list[i].push({name: y, level: 1})  
        }
    }
    await axiosCall('PUT', fix.link + '/camps/' + sessionStorage.getItem('campId'), {lists: list})
}

export const updatingFastList = async (list, data) => {
    // upFunc(fix.lists)
    if(!list){
        // upFunc(fix.lists)
        list = {start: [{name: 'start', level: 1}]}
        upFunc(fix.lists)
    }
    for(let i of Object.keys(data).filter(item => !['sn', 'addres', 'clientTel', 'name', 'date', 'history', 'id', 'order'].includes(item))){
        if(!list[i]){
            list[i] = []
        }
        const index = list[i].findIndex(item => item.name === data[i])
        if(index > -1){
            list[i][index].level++
        }
        else{
            list[i].push({name: data[i], level: 1})
        }
    }
    await axiosCall('PUT', fix.link + '/camps/' + sessionStorage.getItem('campId'), {lists: list})
    
    console.log(list)
    
}