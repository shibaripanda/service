import React from "react"


export const PrintComp = React.forwardRef((props, ref) => {
    
    const post = props.props.post
    const camp = props.props.camp
    console.log(camp)
    return (
    <div ref={ref} className="App">
     <table border="1" cellSpacing="0" cellPadding="0" width='775px' className="table">
    <thead>
        <tr>
            <th colSpan="10">{camp.docprint.name} № {post.order} от {new Date(post.date).toLocaleString()}</th>
        </tr>
    </thead>
        <tbody>
        <tr>
            <td colSpan="5">&nbsp;{camp.namecomp}</td>
            <td colSpan="3" rowSpan="2" align="center"><b><h2>&nbsp;{post.clientTel}</h2></b></td>
            <td colSpan="1" rowSpan="14" className='vertical'><span><h1>&nbsp;{post.order}</h1></span></td>
        </tr>
        <tr>
            <td colSpan='5'>&nbsp;{camp.address}</td>
        </tr>
        <tr>
            <td colSpan="2">&nbsp;Квитанция №</td>
            <td align="center">&nbsp;{post.order}</td>
            <td colSpan='2' align="center">&nbsp;{new Date(post.date).toLocaleString()}</td>
            <td align="center">&nbsp;Приемщик:</td>
            <td colSpan='2' align="center">&nbsp;{post.manager}</td>
        </tr>
        <tr>
            <td colSpan="2">&nbsp;Заказчик:</td>
            <td colSpan="6">&nbsp;{post.name}, {post.addres}, {post.clientTel}</td>
        </tr>
        
        <tr>
            <td colSpan="2">&nbsp;Устройство:</td>
            <td colSpan="3">&nbsp;{post.title}</td>
            <td colSpan="3">&nbsp;{post.model}</td>
        </tr>
        <tr>
            <td colSpan="2">&nbsp;Серийный номер:</td>
            <td colSpan="6">&nbsp;{post.sn}</td>
        </tr>
        <tr>
            <td colSpan="2">&nbsp;Внешний вид:</td>
            <td colSpan="6">&nbsp;{post.view}</td>
        </tr>
        <tr>
            <td colSpan="2">&nbsp;Комплектация:</td>
            <td colSpan="6">&nbsp;{post.complect}</td>
        </tr>
        <tr>
            <td colSpan="2">&nbsp;Неисправность со слов заказчика:</td>
            <td colSpan="6">&nbsp;{post.problem}</td>
        </tr>
        <tr>
            <td colSpan="2"><b>&nbsp;Предварительная стоимость:</b></td>
            <td colSpan="6"><b>&nbsp;{post.cost}</b></td>
        </tr>
        <tr>
            <td colSpan="8"><b>&nbsp;Окончательная стоимость и срок ремонта согласуются с заказчиком после диагностики в течении 10 рабочих дней.</b></td>
        </tr>
        <tr>
            <td colSpan={2}>&nbsp;Телефоны для справок:</td>
            <td colSpan={6}>&nbsp;{camp.docprint.telefonnumber}</td>
        </tr>
        <tr>
            <td colSpan="8" align="center"><b>&nbsp;Правила и условия ремонта и диагностики.</b></td>
        </tr>
        <tr>
            <td colSpan="8" className="border">
            <font size="1">
            <div className="perenos">{camp.docprint.maintext}</div>
            </font>
            </td>
        </tr>
        <tr>
            <td colSpan="10" className="border"><b>&nbsp;Заказчик ознакомился и принимает все условия, правила, сроки и стоимость</b></td>
        </tr>
        <tr>
            <td className="border">&nbsp;Заказчик</td>
            <td colSpan="3" align="center" className="border" rowSpan={2}>&nbsp;подпись</td>
            <td className="border">&nbsp;Приемщик</td>
            <td align="center" colSpan="3" className="border" rowSpan={2}>&nbsp;подпись</td>
            <td colSpan="2" rowSpan={2} className="border"></td>
        </tr>
        <tr>
            <td className="border">&nbsp;{post.name}</td>
            <td className="border">&nbsp;{post.manager}</td>
        </tr>
        <tr>
            <td colSpan="10" className="border">-----------------------------------------------------------------------------------------------------------------------------------------------------------------</td>
        </tr>
        <tr>
            <td colSpan="8">&nbsp;{camp.namecomp}</td>
            <td colSpan="1" rowSpan={10} className='vertical'><span><h1>&nbsp;{post.order}</h1></span></td>
        </tr>
        <tr>
            <td colSpan="5" align="center"><b>&nbsp;{camp.docprint.varantname} №</b></td>
            <td align="center">&nbsp;{post.order}V</td>
            <td colSpan="2">&nbsp;от</td>
        </tr>
        <tr>
            <td>&nbsp;Устройство:</td>
            <td colSpan={2}>&nbsp;{post.title}</td>
            <td colSpan={4}>&nbsp;{post.model}</td>
            <td align="center">М.П.</td>
        </tr>
        <tr>
            <td>&nbsp;Серийный номер\IMEI:</td>
            <td colSpan={7}>&nbsp;{post.sn}</td>
        </tr>
        <tr>
            <td>&nbsp;Услуга:</td>
            <td colSpan={7}></td>
        </tr>
        <tr>
            <td>&nbsp;Срок гарантии (дней):</td>
            <td colSpan={7}></td>
        </tr>
        <tr>
            <td>&nbsp;Стоимость:</td>
            <td colSpan={7}></td>
        </tr>
        <tr>
            <td>&nbsp;Заказчик:</td>
            <td colSpan={7}>&nbsp;{post.name}, {post.addres}, {post.clientTel}</td>
        </tr>
        <tr>
            <td colSpan="8" className="border">
            <font size="1">
            <div className="perenos">{camp.docprint.varanttext}</div>
            </font>
            </td>
       </tr>
        <tr>
            <td className="border">&nbsp;Мастер:</td>
            <td colSpan={4} className="border">&nbsp;Сотрудник СЦ:</td>
            <td colSpan={2} className="border">&nbsp;Заказчик:</td>
        </tr>
        <tr>
            <td colSpan={10} className="border">-----------------------------------------------------------------------------------------------------------------------------------------------------------------</td>
        </tr>
        <tr>
            <td colSpan={8}>&nbsp;{post.manager}</td>
            <td rowSpan={8} className='vertical' align="center"><span><h2>&nbsp;{post.order}</h2></span></td>
        </tr>
        <tr>
            <td colSpan={2} rowSpan={2} align="center"><h2>&nbsp;{post.clientTel}</h2></td>
            <td colSpan={2} align="center">&nbsp;{post.order}</td>
            <td colSpan={2} align="center">&nbsp;{new Date(post.date).toLocaleString()}</td>
            <td>&nbsp;Цена</td>
            <td></td>
        </tr>
        <tr>
            <td colSpan={4}  rowSpan={2}></td>
            <td>&nbsp;Cоглас</td>
            <td></td>
        </tr>
        <tr>
            <td colSpan={2}>&nbsp;Заказчик:</td>
            <td>&nbsp;Готов</td>
            <td></td>
        </tr>
        <tr>
            <td colSpan={2}>&nbsp;Сог. цена</td>
            <td colSpan={4} align="center">&nbsp;{post.cost}</td>
            <td>&nbsp;Увед</td>
            <td></td>
        </tr>
        <tr>
            <td colSpan={6}>&nbsp;{post.view}</td>
            <td>&nbsp;Гарант</td>
            <td></td>
        </tr>
        <tr>
            <td colSpan={5}>&nbsp;{post.problem}</td>
            <td colSpan={3}>&nbsp;{post.complect}</td>
        </tr>
        <tr>
            <td colSpan={2}>&nbsp;{post.speed}</td>
            <td colSpan={6}>&nbsp;{post.order}-----------{post.order}-----------{post.order}-----------{post.order}-----------{post.order}</td>
        </tr>
    </tbody>
</table>
  </div>
    )
})