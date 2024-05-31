import { EditModule } from "../EditModule"

export const AdminSet = (props) => {
    return (
        <div>
            <div className="perenos">
            <div><b>{props.camp.namecomp}</b></div>
            <div><hr style={{margin: '7px 0', width: '100%'}}/></div>
                {/* <b>Добавить / Удалить</b> */}
                <EditModule {...props} data={{
                    upItem: 'masters', 
                    name: props.managerList('masters'), 
                    title: 'Мастера', 
                    titleBut: 'Добавить / Удалить'}}/>
            </div>
        </div>
    )
}