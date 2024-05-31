import { EditModule } from "../EditModule"

export const OwnerSet = (props) => {
    return (
        <div>
            <div className="perenos">
                ID сервиса: <b>{props.camp._id}</b>
                <div><hr style={{margin: '7px 0', width: '100%'}}/></div>
                <EditModule {...props} data={{
                    upItem: 'namecomp', 
                    name: props.camp.namecomp, 
                    title: 'Название филлиала', 
                    titleBut: 'Изменить'}}/>
                <EditModule {...props} data={{
                    upItem: 'owner', 
                    name: props.camp.owner, 
                    title: 'Владелец', 
                    titleBut: 'Изменить'}}/>
                <EditModule {...props} data={{
                    upItem: 'campinfo', 
                    name: props.camp.campinfo, 
                    title: 'Реквизиты компании', 
                    titleBut: 'Изменить'}}/>
                <EditModule {...props} data={{
                    upItem: 'supermanagers', 
                    name: props.managerList('supermanagers'), 
                    title: 'Супер-Менеджеры', 
                    titleBut: 'Добавить / Удалить'}}/>
                <EditModule {...props} data={{
                    upItem: 'managers', 
                    name: props.managerList('managers'), 
                    title: 'Менеджеры', 
                    titleBut: 'Добавить / Удалить'}}/>
                <EditModule {...props} data={{
                    upItem: 'masters', 
                    name: props.managerList('masters'), 
                    title: 'Мастера', 
                    titleBut: 'Добавить / Удалить'}}/>
                {/* <EditModule {...props} data={{
                    upItem: 'bot', 
                    name: props.camp.bot, 
                    title: 'Telegram Bot Token', 
                    titleBut: 'Изменить'}}/> */}
            </div>
        </div>
    )
}