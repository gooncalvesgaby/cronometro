import * as S from "./HeaderStyle.jsx"
import React, { useState } from "react"

function Header() {
    let [seconds, setSeconds] = useState(0)
    let [minutes, setMinutes] = useState(0)
    let [hours, setHours] = useState(0)
    let [intervalSeconds, setIntervalSeconds] = useState(null)

    function start() {
        if (!intervalSeconds) {
            const newInterval = setInterval(() => {
                setSeconds(prevSeconds => {
                    if (prevSeconds === 59) {
                        setMinutes(prevMinutes => {
                            if (prevMinutes === 59) {
                                setHours(prevHours => prevHours + 1)
                                return 0
                            }
                            return prevMinutes + 1
                        });
                        return 0
                    }
                    return prevSeconds + 1
                });
            }, 1000);

            setIntervalSeconds(newInterval)
        }
    }

    function stop() {
        if (intervalSeconds) {
            clearInterval(intervalSeconds)
            setIntervalSeconds(null)
        }
    }

    function clear() {
        stop()
        setHours(0)
        setMinutes(0)
        setSeconds(0)
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
                <S.Button onClick={stop}>
                    PARAR
                </S.Button>
                <S.Button onClick={clear}>
                    ZERAR
                </S.Button>
                </S.Section>
        </S.StyleHeader>
    )
}

export default Header