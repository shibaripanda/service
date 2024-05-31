import { EditModule } from "../EditModule"
import { EditModuleTextArea } from "../EditModuleTextArea"

export const DocPrintSet = (props) => {
    return (
        <div>
            <div className="perenos">
            <div><b>{props.camp.namecomp}</b></div>
            <div><hr style={{margin: '7px 0', width: '100%'}}/></div>
                <EditModule 
                    {...props}
                    data={{
                          upItem: 'docprint.name', 
                            name: props.camp.docprint.name,
                           title: 'Название главного документа', 
                        titleBut: 'Сохранить'
                    }}
                    key={1}
                />
                <EditModule 
                    {...props}
                    data={{
                          upItem: 'docprint.varantname', 
                            name: props.camp.docprint.varantname,
                           title: 'Название закрывающего документа', 
                        titleBut: 'Сохранить'
                    }}
                    key={2}
                />
                <EditModule 
                    {...props}
                    data={{
                          upItem: 'docprint.time', 
                            name: props.camp.docprint.time,
                           title: 'Время работы', 
                        titleBut: 'Сохранить'
                    }}
                    key={3}
                />
                <EditModule 
                    {...props}
                    data={{
                          upItem: 'docprint.telefonnumber', 
                            name: props.camp.docprint.telefonnumber,
                           title: 'Телефоны', 
                        titleBut: 'Добавить / Удалить'
                    }}
                    key={4}
                />
                <EditModule 
                    {...props}
                    data={{
                          upItem: 'docprint.oznak', 
                            name: props.camp.docprint.oznak,
                           title: 'Ознакомление', 
                        titleBut: 'Сохранить'
                    }}
                    key={5}
                />
                <EditModule 
                    {...props}
                    data={{
                          upItem: 'docprint.soglas', 
                            name: props.camp.docprint.soglas,
                           title: 'Условия согласования стоимости и сроков', 
                        titleBut: 'Сохранить'
                    }}
                    key={6}
                />
                <EditModuleTextArea
                    {...props}
                    data={{
                        upItem: 'docprint.maintext', 
                            name: props.camp.docprint.maintext,
                        title: 'Основной текст', 
                        titleBut: 'Сохранить'
                    }}
                    key={7}
                    />
                <EditModuleTextArea
                    {...props}
                    data={{
                        upItem: 'docprint.varanttext', 
                            name: props.camp.docprint.varanttext,
                        title: 'Текст гарантии', 
                        titleBut: 'Сохранить'
                    }}
                    key={8}
                    />
            </div>
        </div>
    )
}