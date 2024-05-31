import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MyButton } from "./UI/button/MyButton";
import { Input } from "./UI/input/Input";

import classesBut from './UI/button/css/Button.module.css'
import { Button } from "./UI/button/Button";
import { SelectMui } from "./UI/select/SelectMui";

const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

export default function BasicModal(props) {

console.log(props)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [service, newSevice] = React.useState({name: '', cost: '', var: ''})


  const updateOrderService = (item) => {
    props.upDateOrder(item)
    newSevice({name: '', cost: '', var: '', master: ''})
  }
  const serviceList = () => {

    if(props.post.service.length){
        const list = [
            <tr key={0}>
            <td width={'10%'} align="center">
                
            </td>
            <td width={'70%'} align="center">
                <b>{'Услуги / Запчасти'}</b>
            </td>
            <td width={'10%'} align="center">
                <b>{'Гарантия'}</b>
            </td>
            <td width={'10%'} align="center">
                <b>{'Стоимость'}</b>
            </td>
            </tr>
        ]
        let key = 0
        for(let i of props.post.service){
          key++
            list.push(
                    <tr key={key}>
                        <td align="center" valign="center"><Button st={classesBut.modaldellbut} onClick={() => updateOrderService(i)}>Удалить</Button></td>
                        <td align="left">
                        &nbsp;&nbsp;{Number(props.post.service.indexOf(i) + 1) + '. ' + i.name}
                        </td>
                        <td align="center">
                            {i.var + ' дней '}
                        </td>
                        <td align="center">
                            {i.cost + ' бел.руб. '}
                        </td>
                    </tr>
            )
            key++
            list.push(
              <tr key={key}>
                <td colSpan={4}><hr style={{margin: '7px 0', width: '100%'}}/></td>
              </tr>
            )
        }
        const sumCost = props.post.service.reduce((sum, a) => sum + Number(a.cost), 0)
        if(sumCost > 0){
            list.push(
                <tr key={1000}>
                    <td align="center">
                    
                    </td>
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
                    <div key={374}>
                    <table border="0" cellSpacing="0" cellPadding="0" width='100%' className='tableAct1'>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                </div>
                <div>&nbsp;&nbsp;</div>
            </div>
        )
    }
    
  }
  const showBut = () => {
      if(service.name !== '' && Number(service.var) && Number(service.cost)){
        return (
            <div>
              <Button st={classesBut.modal} onClick={() => updateOrderService(service)}>Добавить</Button> <Button st={classesBut.modal} onClick={handleClose}>Закрыть</Button> 
            </div>
          )
      }
      return (
        <div>
          <Button st={classesBut.modal} onClick={handleClose}>Закрыть</Button>
        </div>
      )
  }

  return (
    <div>
      <MyButton onClick={handleOpen} cl='myButton'>Услуги</MyButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography  id="modal-modal-title"  variant="h7" component="h3">
            {props.post.order} {props.post.title} {props.post.model}
          </Typography>
          <div>{serviceList()}</div>
          <Typography id="modal-modal-description" variant="h7" sx={{ mt: 1 }}>
            Услуга / Деталь
          </Typography>
          <Input 
            cl='modal'
            type='text' 
            placeholder={'new'} 
            value={service.name}
            onChange={e => newSevice({...service, name: e.target.value})}
            key={1}
          />

          {/* <Typography id="modal-modal-description" variant="h7" sx={{ mt: 1 }}>
            Мастер
          </Typography>

          <div><SelectMui
          className="ml-4 mb-4 w-[180px]"
          placeholder="School Name"
          isClearable={true}
          options={[
            {  label: "Mumbai", value: "Mumbai" },
            {  label: "tuljapur", value: "tuljapur" }]}
          name={"class"} 
            cl='modalSmall'
            defaultValue={'5555555555555'} 
            
            value={service.master}
            onChange={e => newSevice({...service, master: e.target.value})}
            options={props.camp.masters}
            key={2}
          />
          </div>
          props.camp.masters.map(item => item.name) */}


          <Typography id="modal-modal-description" variant="h7" sx={{ mt: 1 }}>
            Стоимость (бел. руб.)
          </Typography>
          <Input 
            cl='modalSmall'
            type='text' 
            placeholder={'new'} 
            value={service.cost}
            onChange={e => newSevice({...service, cost: e.target.value})}
            key={3}
            />
          <Typography id="modal-modal-description" variant="h7" sx={{ mt: 1 }}>
            Гарантия (дней)
          </Typography>
          <Input 
            cl='modalSmall'
            type='text' 
            placeholder={'new'} 
            value={service.var}
            onChange={e => newSevice({...service, var: e.target.value})}
            key={4}
            />
          <div align='right'>
              {showBut()}
            </div>
        </Box>
      </Modal>
    </div>
  );
}