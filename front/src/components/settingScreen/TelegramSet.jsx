// import { EditModule } from "../EditModule"
import { MyButton } from "../UI/button/MyButton"

export const TelegramSet = (props) => {
    return (
        <div>
            <div className="perenos">
                <div><b>{props.camp.namecomp}</b></div>
                <div><hr style={{margin: '7px 0', width: '100%'}}/></div>
                <div><MyButton cl={'modal'}>Подключить бот сервиса</MyButton></div>
                {/* <EditModule {...props} data={{
                    upItem: 'namecomp', 
                    name: props.camp.comp, 
                    title: 'Название филлиала', 
                    titleBut: 'Изменить'}}/> */}
            </div>
        </div>
    )
}