import React, { useState } from "react";
import { MyButton } from "../components/UI/button/MyButton";
import { axiosCall } from "../module/axiosCall";
import { Link, useNavigate } from "react-router-dom";
import { fix } from "../fix";
import { LoginInput } from "../components/UI/input/LoginInput";
import { validateEmail } from "../module/validEmail";

export const Enter = () => {
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const [password] = useState('password')
    const [emaillist, setEmaillist] = useState([])
    const [mode, setMode] = useState(3)
    const [nameCamp, setNameCamp] = useState('')
    const [authcode, setAuthcode] = useState('') 

    const navigate = useNavigate()

    const loginUser = async () => {
        setEmaillist([...emaillist, email])
        await axiosCall('POST', fix.link + '/auth/login', {email: email, password: password})
        .then((res) => {
            setText(email + '\n' + res.data)
            setMode(1)
        })
        .catch((error) => {
            setEmail('')
            setText(email + '\n' + error.response.data.message)
        })
    }
    const loginCreateComp = async () => {
        await axiosCall('POST', fix.link + '/auth/registration', {email: email, password: password, nameCamp: nameCamp})
        .then(async (res) => {
            setText(email + '\n' + res.data)
            setMode(1)
        })
        .catch(async (error) => {
            setNameCamp('')
            setEmail('')
            setText(error.response.data.message)
        })
    }
    const authEmailCode = async () => {
        await axiosCall('POST', fix.link + '/auth/authemailcode', {email: email, password: password, authcode: String(authcode)})
        .then(async (res) => {
            sessionStorage.setItem('token', res.data.token)
            sessionStorage.setItem('email', email)
            navigate('mycamps')
        })
        .catch(async (error) => {
            setText(error.response.data.message)
            setNameCamp('')
            setEmail('')
            setMode(3)
        })
    }
    
    const showButCreateCamp = () => {
        if(email && password && validateEmail(email)){
            return (
                <div>
                    <div className={'enter_page'}><MyButton name='enter' onClick={() => loginCreateComp()}>Создать</MyButton></div>
                </div>
            )
        }
        else if(email.length){
            return (
                <div align='center'>некоректный email</div>
            )
        }
    }
    const showButLogin = () => {
        if(email && password && validateEmail(email)){
            return (
                <div>
                    <div className={'enter_page'}><MyButton name='enter' onClick={() => loginUser(email, password)}>Вход</MyButton></div>
                </div>
            )
        }
        else if(email.length){
            return (
                <div align='center'>некоректный email</div>
            )
        }
    }
    const showButAuth = () => {
        if(authcode.length){
            return (
                <div>
                    <div className={'enter_page'}><MyButton name='enter' onClick={() => authEmailCode()}>Проверка</MyButton></div>
                </div>
            )
        }
    }

    const screen = () => {
        
        if(mode === 1){
            return ( 
                    <div style={{margin: '150px'}}>
                        <LoginInput
                        name='codelInput'
                        value={authcode}
                        onChange={e => {
                            setAuthcode(e.target.value)
                            // setText('')
                        }}
                        placeholder="code"
                        options={[]}
                        />
                        <div align='center' className="perenos"><b>{text}</b></div>
                        {showButAuth()}
                        <hr style={{margin: '15px 0'}}/>
                        <div align='center' onClick={() => setMode(3)}><Link>Назад</Link></div>
                    </div>
            )
        }
        else if(mode === 2){
            return (
                <div style={{margin: '110px'}}>
                    Новая компания
                    <hr style={{margin: '15px 0'}}/>
                    <div align='center'>
                        <LoginInput
                        id='email'
                        type="email"
                        name='emailInput'
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value)
                            setText('')
                        }}
                        placeholder="email"
                        options={[]}
                        />
                        <LoginInput
                        name='nameCampInput'
                        value={nameCamp}
                        onChange={e => {
                            setNameCamp(e.target.value)
                            setText('')
                        }}
                        placeholder="company name"
                        options={[]}
                        />
                    </div>
                    <div align='center' className="perenos"><b>{text}</b></div>
                    {showButCreateCamp()}
                    <hr style={{margin: '15px 0'}}/>
                    <div align='center' onClick={() => setMode(3)}><Link>Назад</Link></div>
                </div>
            )
        }
        else if(mode === 3){
            return (
                <div style={{margin: '110px'}}>
                    Вход
                    <hr style={{margin: '15px 0'}}/>
                    <div align='center'>
                    <LoginInput
                    type="email"
                    name='emailInput'
                    value={email}
                    onChange={e => {
                        setEmail(e.target.value)
                        setText('')
                    }}
                    placeholder="email"
                    options={emaillist}
                    />
                    </div>
                    <div align='center' className="perenos"><b>{text}</b></div>
                    {showButLogin()}
                    <hr style={{margin: '15px 0'}}/>
                    <div align='center' onClick={() => setMode(2)}><Link>Create new company</Link></div>
                </div>
            )
        }
    }

    return (
        <div>
            {screen()}
        </div>
    )
}
