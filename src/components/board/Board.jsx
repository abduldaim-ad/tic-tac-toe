/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Tile from './Tile'

// import tileData from './tileData'

const Board = ({ playerName, playerTurn, setPlayerTurn, symbol, setSymbol, status, setStatus, disableRestart, setDisableRestart }) => {

    const [showText, setShowText] = useState("")

    useEffect(() => {
        if (status === `${playerTurn} Wins` || status === "Game Draw")
            setDisableBtn(true)
        setShowText(`Hi ${playerTurn}! Welcome to Tic Tac Toe! Your Symbol is ${symbol}`)
    }, [status])

    const initialState = [
        {
            tileVal: 1,
            strikeMe: false
        },
        {
            tileVal: 2,
            strikeMe: false
        },
        {
            tileVal: 3,
            strikeMe: false
        },
        {
            tileVal: 4,
            strikeMe: false
        },
        {
            tileVal: 5,
            strikeMe: false
        },
        {
            tileVal: 6,
            strikeMe: false
        },
        {
            tileVal: 7,
            strikeMe: false
        },
        {
            tileVal: 8,
            strikeMe: false
        },
        {
            tileVal: 9,
            strikeMe: false
        },
    ]

    const [tileData, setTileData] = useState(initialState)

    const Wrapper = styled.section`

        h1{
            text-align:center;
            color:#1DE7D3;
            margin:1%;
        }

        div{
            width:40%;
            height:70vh;
            margin:auto;
            background-color:#14bdac;
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:space-around;
            border:2px solid #1DE7D3;
            box-shadow:2px 2px 5px 5px #1DE7D3;
            border-radius:10%;
        }

        @media screen and (max-width:1024px){
            div{
                width:60%;
            }
        }

        @media screen and (max-width:460px){
            div{
                width:90%;
                height:50vh;
                margin:5%;
            }
        }
    `

    const [disableBtn, setDisableBtn] = useState(false)

    const handleRestartGame = () => {
        setTileData(initialState)
        setDisableBtn(false)
        setPlayerTurn(playerTurn === playerName ? "Player 2" : playerName)
        setSymbol(symbol === "O" ? "X" : "O")
    }

    return (
        <Wrapper>
            <h1 style={{ backgroundColor: "grey", marginTop: "0" }}>{showText}</h1>
            <div>
                {
                    tileData.map((tile, id) => {
                        return (
                            <Tile key={id} id={id} tile={tile} symbol={symbol} setSymbol={setSymbol} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} tileData={tileData} setTileData={setTileData} status={status} setStatus={setStatus} disableBtn={disableBtn} setDisableBtn={setDisableBtn} disableRestart={disableRestart} playerName={playerName} setShowText={setShowText} />
                        )
                    })
                }
            </div>
            <h1>{status}</h1>
            <button onClick={() => handleRestartGame()} style={{ margin: "1% 47%", backgroundColor: !disableBtn ? "grey" : "red", color: "white", padding: "1%", cursor: !disableBtn ? "arrow" : "pointer" }} disabled={!disableBtn}>Restart</button>
        </Wrapper>
    )
}

export default Board
