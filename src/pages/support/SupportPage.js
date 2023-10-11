// SupportPage

import { useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'

// import Repair from '../../components/repair/Repair'
// import Loading from '../../components/Loading'
import { sendMail } from '../../http/mailAPI'

import './SupportPage.css'


const SupportPage = () => {

    const [ email, setEmail ] = useState("")
    const [ message, setMessage] = useState("")
    const [ loader, setLoader] = useState(false)

    const onClickButtonSend = async () => {
        // alert(email + message)
        if (email && message) {
            setLoader(true)
            let response = await sendMail(email, message)
            if (response) {
                alert("Письмо отправлено!")
                window.location.href = "/"
            }else {
                alert("Ошибка отправки.")
            }
            setLoader(false)
        }
    }

    if (loader)  
    return (
        <div className="SupportPage globalStylePage">
            <div className="SupportPage_box">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        </div>
    )

    // if (loader) return <Loading />

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
