import { ColorSettings } from "./Color"

export const ColorItem = (props) => {
    return (
        <div className={`colorset`} style={{border: `3px solid ${typeof props.camp[props.upItem.split('.')[0]][props.upItem.split('.')[1]] !== 'undefined' ? props.camp[props.upItem.split('.')[0]][props.upItem.split('.')[1]] : 'rgb(1, 75, 235)'}`}}>
            <ColorSettings
            {...props}
            data={{
                   upItem: props.upItem, 
                    color: typeof props.camp[props.upItem.split('.')[0]][props.upItem.split('.')[1]] !== 'undefined' ? props.camp[props.upItem.split('.')[0]][props.upItem.split('.')[1]] : 'rgb(1, 75, 235)',
                    title: props.title, 
                 titleBut: 'Сохранить'
            }}
            key={1}/>
        </div>
    )

}