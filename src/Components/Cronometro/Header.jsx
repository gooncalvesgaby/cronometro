import React from "react"
import * as S from "./HeaderStyle.jsx"
// import React, { useState } from 'react'

function Header() {
    return(
        <S.StyleHeader>
            <S.Div>
                <S.H2>00: 00: 00</S.H2>
            </S.Div>
            <S.Section>
                <S.Button>
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