import * as S from "./HeaderStyle.jsx"
import React, { useState, useEffect } from "react"

function Header() {

    let [minutes, setMinutes] = useState(0)
    let [hours, setHours] = useState(0)
    let [seconds, setSeconds] = useState(50)
    let intervalSeconds;

    function start() {

        intervalSeconds = setInterval(() => {
            setSeconds(seconds += 1)
            startMinutes()
        }, 1000)   
    }
    
    
    function startMinutes() {
        
        if(seconds == 60) {
            clearInterval(intervalSeconds)
            setMinutes(minutes += 1)
            setSeconds(seconds = 0)
        }
    }

    return(
        <S.StyleHeader>
            <S.Div>
                <S.H2>{ hours }: { minutes }: { seconds }</S.H2>
            </S.Div>
            <S.Section>
                <S.Button onClick={start}>
                    INICIAR
                </S.Button>
                <S.Button>
                    PARAR
                </S.Button>
                <S.Button>
                    ZERAR
                </S.Button>
                </S.Section>
        </S.StyleHeader>
    )
}

export default Header