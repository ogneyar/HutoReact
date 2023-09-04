// SupportPage

import { useState } from 'react'
import { Button } from 'react-bootstrap'

import Repair from '../../components/repair/Repair'
import { sendMail } from '../../http/mailAPI'

import './SupportPage.css'


const SupportPage = () => {

    const [ email, setEmail ] = useState("")
    const [ message, setMessage] = useState("")

    const onClickButtonSend = async () => {
        // alert(email + message)
        if (email && message) {
            let response = await sendMail(email, message)
            if (response === "send") {
                alert("Письмо отправлено!")
                window.location.href = "/"
            }else {
                alert("Ошибка отправки.")
            }
        }
    }

    return (
        <div 
            className="SupportPage globalStylePage"
        >
            {/* <div 
                className="SupportPage_title globalStylePage_title"
            >
                <h2>
                    Тех. поддержка
                </h2>
            </div> */}

            <div 
                className="SupportPage_box"
            >
                <div 
                    className="SupportPage_title"
                >
                    <h2>Тех. поддержка</h2>
                </div>

                <div
                    className="SupportPage_body"
                >
                    {/* <Repair /> */}
                    <input
                        name="Email"
                        placeholder="Email"
                        className="SupportPage_Email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <textarea
                        rows="10" 
                        cols="45" 
                        name="Message"
                        placeholder="Message"
                        className="SupportPage_Message"
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                    />

                    <Button 
                        variant="outline-primary"
                        onClick={onClickButtonSend}
                    >
                        Отправить
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SupportPage
