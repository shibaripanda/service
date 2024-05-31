import { EditModule } from "../EditModule"

export const PeopleSet = (props) => {

    const serviceList = () => {
        const userAr = []
        for(let i of props.camp['managers'].concat(props.camp['supermanagers']).concat(props.camp['masters'])){
            if(!userAr.map(item => item.email).includes(i.email)){
                userAr.push(i)
            }
        }
        if(userAr.length){
            const list = [
                <tr key={0}>
                <td width={'33%'} align="left">
                    <b>{'Имя'}</b>
                </td>
                <td width={'33%'} align="left">
                    <b>{'email'}</b>
                </td>
                <td width={'33%'} align="center">
                    <b>{'Изменить'}</b>
                </td>
                </tr>
            ]
            let key = 1
            
            for(let i of userAr){
                key++
                list.push(
                        <tr key={key}>
                            <td align="left">
                            &nbsp;&nbsp;{Number(userAr.indexOf(i) + 1) + '. ' + i.name}
                            </td>
                            <td align="left">
                                {i.email}
                            </td>
                            <td align="center">
                                fff
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
            const sumCost = userAr.reduce((sum, a) => sum + Number(a.cost), 0)
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
                        <table border="0" cellSpacing="0" cellPadding="0" width='100%' className='tableAct1'>
                            <tbody>
                                {list}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
        
    }





    return (
        <div>
            <div className="perenos">
                <div><b>{props.camp.namecomp}</b></div>
                <div><hr style={{margin: '7px 0', width: '100%'}}/></div>
                <b>Сотрудники</b>
                {serviceList()}
                {/* <EditModule {...props} data={{
                    upItem: 'namecomp', 
                    name: props.camp.namecomp, 
                    title: 'Название филлиала', 
                    titleBut: 'Изменить'}}/> */}


            </div>
        </div>
    )
}