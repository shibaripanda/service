import React from "react"


export const PrintComp = React.forwardRef((props, ref) => {
    
    const post = props.props.post
    const camp = props.props.camp
    const textSet = (index) => {
        if(typeof camp.docprint[index] !== 'undefined'){
            return camp.docprint[index]
        }
        return 'не настроено'
    }

    return (
    <div ref={ref} className="App">
        
    <table border="0" cellSpacing="0" cellPadding="0" width='775px' className="table">
        <tbody>
        <tr>
            <td align="left"><b><font size="2">{camp.namecomp ? camp.namecomp : 'не настроено'}</font></b></td>  
        </tr>
        <tr>
            <td align="center"><b><font size="3">{textSet('name')} № {post.order} от {new Date(post.date).toLocaleString().split(',')[0]}</font></b></td>
        </tr>
        </tbody>
    </table>
    
    <table border="1" cellSpacing="0" cellPadding="0" width='775px' className="table">
        <tbody>
        <tr>
            <td colSpan="5" rowSpan="2" align="center"><b>&nbsp;Исполнитель принимает, а заказчик передает нижеуказанное оборудование</b></td>
            <td colSpan="3" rowSpan="2" align="center"><b><h2>&nbsp;{post.clientTel}</h2></b></td>
            <td colSpan="1" rowSpan="14" className='vertical'><span><h1>&nbsp;{post.order}</h1></span></td>
        </tr>
        <tr>
            
        </tr>
        <tr>
            <td colSpan="2"><b>&nbsp;Заказ №</b></td>
            <td align="center">&nbsp;{post.order}</td>
            <td colSpan='2' align="center">&nbsp;{new Date(post.date).toLocaleString()}</td>
            <td align="center">&nbsp;Сотрудник СЦ:</td>
            <td colSpan='2' align="center">&nbsp;{post.manager}</td>
        </tr>
        <tr>
            <td colSpan="2"><b>&nbsp;Заказчик:</b></td>
            <td colSpan="6">&nbsp;{post.name}, {post.addres}, {post.clientTel}</td>
        </tr>    
        <tr>
            <td colSpan="2"><b>&nbsp;Оборудование:</b></td>
            <td colSpan="3">&nbsp;{post.title}</td>
            <td colSpan="3">&nbsp;{post.model}</td>
        </tr>
        <tr>
            <td colSpan="2"><b>&nbsp;Серийный номер:</b></td>
            <td colSpan="6">&nbsp;{post.sn}</td>
        </tr>
        <tr>
            <td colSpan="2"><b>&nbsp;Внешний вид:</b></td>
            <td colSpan="6">&nbsp;{post.view}</td>
        </tr>
        <tr>
            <td colSpan="2"><b>&nbsp;Комплектация:</b></td>
            <td colSpan="6">&nbsp;{post.complect}</td>
        </tr>
        <tr>
            <td colSpan="2"><b>&nbsp;Неисправность со слов заказчика:</b></td>
            <td colSpan="6">&nbsp;{post.problem}</td>
        </tr>
        <tr>
            <td colSpan="2"><b>&nbsp;Предварительная стоимость:</b></td>
            <td colSpan="6"><b>&nbsp;{post.cost} бел.руб.</b></td>
        </tr>
        <tr>
            <td colSpan="8"><b>&nbsp;{camp.docprint.soglas ? camp.docprint.soglas : 'не настроено'}</b></td>
        </tr>
        <tr>
            <td colSpan={2}><b>&nbsp;Телефоны для справок:</b></td>
            <td colSpan={6}>&nbsp;{camp.docprint.telefonnumber ? camp.docprint.telefonnumber : 'не настроено'}</td>
            
        </tr>
        <tr>
            <td colSpan={2}><b>&nbsp;Исполнитель:</b></td>
            <td colSpan={6}>&nbsp;{camp.campinfo}</td>
        </tr>
        <tr>
            <td colSpan={2}><b>&nbsp;Время работы исполнителя:</b></td>
            <td colSpan={6}>&nbsp;{camp.docprint.time ? camp.docprint.time : 'не настроено'}</td>
        </tr>
        </tbody>
    </table>

    <table border="0" cellSpacing="0" cellPadding="0" width='775px' className="table">
        <tbody>
        <tr>
            <td align="center" colSpan={5}><b><font size="3">Правила и условия ремонта и (или) диагностики.</font></b></td>
        </tr>
        <tr>
            <td className="border" colSpan={5}>
            <font size="3">
            <div className="perenos">{camp.docprint.maintext ? camp.docprint.maintext : 'не настроено'}</div>
            </font>
            </td>
        </tr>
        <tr>
            <td colSpan={5}><font size="4"><b>&nbsp;{camp.docprint.oznak ? camp.docprint.oznak : 'не настроено'}</b></font></td>
        </tr>
        <tr>
            <td colSpan={5}>&nbsp;</td>
        </tr>
        <tr>
            <td align="left" colSpan={2} width={'50%'}><font size="3">Заказчик:</font></td>
            <td align="right">&nbsp;</td>
            <td align="left" colSpan={2} width={'50%'}><font size="3">Сотрудник СЦ:</font></td>
        </tr>
        <tr>
            <td align="center" colSpan={2}>&nbsp;</td>
            <td align="right">&nbsp;</td>
            <td align="center" colSpan={2}>&nbsp;</td>
        </tr>
        <tr>
            <td align="left" width={'10%'}><font size="3">Подпись:</font></td>
            <td align="right" width={'35%'}><font size="3">{post.name}</font></td>
            <td align="right" width={'10%'}>&nbsp;</td>
            <td align="left" width={'10%'}><font size="3">Подпись:</font></td>
            <td align="right" width={'35%'}><font size="3">{post.manager}</font></td>
        </tr>
        <tr>
            <td align="left" colSpan={2}><div className="create-line"></div></td>
            <td align="right">&nbsp;</td>
            <td align="left" colSpan={2}><div className="create-line"></div></td>
        </tr>
        </tbody>
    </table>

    </div>
    )
})