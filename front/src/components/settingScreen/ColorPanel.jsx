import { ColorItem } from "../ColorItem"

export const ColorPanel = (props) => {
    return (
        <div>
            <b>{props.camp.namecomp}</b>
            <div><hr style={{margin: '7px 0', width: '100%'}}/></div>
            <table border="0" cellSpacing="5" cellPadding="5" width='100%' className='tableAct1'>
                <tbody>
                    <tr>
                        <td align='center' width={'33%'}>
                            <ColorItem {...props} title={'Общий цвет'} upItem={'colorsettings.main'}/>  
                        </td>
                        <td align='center' width={'33%'}>
                            {/* <ColorItem {...props} title={'Текущий заказ'} upItem={'colorsettings.order'}/> */}
                        </td>
                        <td align='center' width={'33%'}>
                            {/* <ColorItem {...props} title={'Готовый заказ'} upItem={'colorsettings.ready'}/> */}
                        </td>
                    </tr>
                    <tr>
                        <td align='center' width={'33%'}>
                            <ColorItem {...props} title={'Текущий заказ'} upItem={'colorsettings.order'}/>
                        </td>
                        <td align='center' width={'33%'}>
                            <ColorItem {...props} title={'Готовый заказ'} upItem={'colorsettings.ready'}/>
                        </td>
                        <td align='center' width={'33%'}>
                            <ColorItem {...props} title={'Закрытый заказ'} upItem={'colorsettings.close'}/>
                        </td>
                    </tr>
                </tbody>
            </table> 
        </div>
    )
}