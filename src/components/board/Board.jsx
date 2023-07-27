/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Tile from './Tile'
import Modal from '../modal/Modal'

// import tileData from './tileData'

const Board = ({ playerName, player2Name, playerTurn, setPlayerTurn, symbol, setSymbol, status, setStatus, disableRestart, setDisableRestart, gameMode }) => {

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

    .stats-btn{
        color:white;
        margin:0 1%;
        padding:0.5%;
        cursor:pointer;
        background-color:green;
        font-weight:bold;
        &:hover{
            color:green;
            background-color:#fff;
        }
    }

    @media screen and (max-width:1024px){
        div{
            width:60%;
            svg{
                visibility:hidden;
            }
        }
    }

    @media screen and (max-width:460px){
        div{
            width:100%;
            height:50vh;
            margin:0%;
        }
    }
`
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

    const [showText, setShowText] = useState("")
    const [vertices, setVertices] = useState({
        h: '0',
        w: '0',
        x1: '0',
        y1: '0',
        x2: '0',
        y2: '0',
    })
    const [tileData, setTileData] = useState(initialState)
    const [disableBtn, setDisableBtn] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const checkWin = (copy) => {
        let tempArray = [], noNumber = true;
        noNumber = !!copy.find((item) => typeof item.tileVal === 'number');
        if (copy[0].tileVal === copy[1].tileVal && copy[1].tileVal === copy[2].tileVal) {
            tempArray = [0, 1, 2];
            setStatus(`${playerTurn} Wins`)
            setDisableBtn(true)
            setVertices({
                h: '420',
                w: '500',
                x1: '0',
                y1: '72.5',
                x2: '700',
                y2: '72.5',
            })
        }
        else if (copy[3].tileVal === copy[4].tileVal && copy[4].tileVal === copy[5].tileVal) {
            tempArray = [3, 4, 5];
            setStatus(`${playerTurn} Wins`)
            setDisableBtn(true)
            setVertices({
                h: '420',
                w: '500',
                x1: '0',
                y1: '222.5',
                x2: '700',
                y2: '222.5',
            })
        }
        else if (copy[6].tileVal === copy[7].tileVal && copy[7].tileVal === copy[8].tileVal) {
            tempArray = [6, 7, 8];
            setStatus(`${playerTurn} Wins`)
            setDisableBtn(true)
            setVertices({
                h: '420',
                w: '500',
                x1: '0',
                y1: '372',
                x2: '700',
                y2: '372',
            })
        }
        else if (copy[0].tileVal === copy[3].tileVal && copy[3].tileVal === copy[6].tileVal) {
            tempArray = [0, 3, 6];
            setStatus(`${playerTurn} Wins`)
            setDisableBtn(true)
            setVertices({
                h: '420',
                w: '500',
                x1: '70',
                y1: '20',
                x2: '70',
                y2: '600',
            })
        }
        else if (copy[1].tileVal === copy[4].tileVal && copy[4].tileVal === copy[7].tileVal) {
            tempArray = [1, 4, 7];
            setStatus(`${playerTurn} Wins`)
            setDisableBtn(true)
            setVertices({
                h: '420',
                w: '500',
                x1: '250',
                y1: '20',
                x2: '250',
                y2: '600',
            })
        }
        else if (copy[2].tileVal === copy[5].tileVal && copy[5].tileVal === copy[8].tileVal) {
            tempArray = [2, 5, 8];
            setStatus(`${playerTurn} Wins`)
            setDisableBtn(true)
            setVertices({
                h: '420',
                w: '500',
                x1: '430',
                y1: '20',
                x2: '430',
                y2: '600',
            })
        }
        else if (copy[0].tileVal === copy[4].tileVal && copy[4].tileVal === copy[8].tileVal) {
            tempArray = [0, 4, 8];
            setStatus(`${playerTurn} Wins`)
            setDisableBtn(true)
            setVertices({
                h: '420',
                w: '500',
                x1: "0",
                y1: "20",
                x2: "700",
                y2: "600",
            })
        }
        else if (copy[2].tileVal === copy[4].tileVal && copy[4].tileVal === copy[6].tileVal) {
            tempArray = [2, 4, 6];
            setStatus(`${playerTurn} Wins`)
            setDisableBtn(true)
            setVertices({
                h: '420',
                w: '500',
                x1: '490',
                y1: '20',
                x2: '0',
                y2: '430',
            })
        }
        else if (!noNumber) {
            setStatus(`Game Draw`)
            setDisableBtn(true)
        }

        if (tempArray.length) {
            setShowText("Game Over");
            const finalState = copy.map((tile, index) => {
                if (index === tempArray[0] || index === tempArray[1] || index === tempArray[2]) {
                    return { ...tile, strikeMe: true }
                }
                else {
                    return tile
                }
            })
            setTileData(finalState)
        }
    }

    useEffect(() => {
        setShowText(`Hi ${playerTurn}! Welcome to Tic Tac Toe! Your Symbol is ${symbol}`)
    }, [])

    useEffect(() => {
        if (status === `${playerTurn} Wins` || status === "Game Draw")
            setDisableBtn(true)
    }, [status])

    useEffect(() => {
        if (playerTurn === "Computer") {
            let stop = false;
            const copy = [...tileData];
            while (!stop) {
                const computerId = Math.floor(Math.random() * 10);
                const find = copy.find((tile, i) => !isNaN(tile.tileVal) && i == computerId);
                if (find) {
                    playerTurn === playerName ? setPlayerTurn(player2Name) : setPlayerTurn(playerName);
                    symbol === "O" ? setSymbol("X") : setSymbol("O");
                    setShowText(symbol === "O" ? "X Turn" : "O Turn");
                    find.tileVal = symbol;
                    setTileData(copy);
                    stop = true;
                } else {
                    let end = tileData.find((tile) => typeof tile.tileVal === 'number');
                    if (!end) {
                        stop = true;
                    }
                }
            }
            checkWin(copy)
        }
    }, [playerTurn])

    const handleRestartGame = () => {
        if (status !== "Game Draw")
            setSymbol(symbol === "O" ? "X" : "O")
        if (status === "Computer Wins") {
            playerTurn === playerName ? setPlayerTurn(player2Name) : setPlayerTurn(playerName);
        }

        setStatus("")
        setTileData(initialState)
        setDisableBtn(false)
        symbol === "O" ? setShowText("X Turn") : setShowText("O Turn")
        setVertices({
            h: '0',
            w: '0',
            x1: '0',
            y1: '0',
            x2: '0',
            y2: '0'
        })
    }

    return (
        <Wrapper>
            <h1 style={{ backgroundColor: "grey", marginTop: "0" }}>{showText}</h1>
            <button className='stats-btn' onClick={() => setShowModal(!showModal)}>Show Stats</button>
            {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
            <div>
                <svg height={vertices.h} width={vertices.w} style={{ position: "absolute" }}>
                    {/* <line x1="0" y1="20" x2="700" y2="600" style={{ stroke: "rgb(255,0,0)", strokeWidth: "5" }} /> */}
                    <line x1={vertices.x1} y1={vertices.y1} x2={vertices.x2} y2={vertices.y2} style={{ stroke: "rgb(255,0,0)", strokeWidth: "5" }} />
                </svg>
                {
                    tileData.map((tile, id) => {
                        return (
                            <Tile
                                key={id}
                                id={id}
                                tile={tile}
                                symbol={symbol}
                                setSymbol={setSymbol}
                                playerTurn={playerTurn}
                                setPlayerTurn={setPlayerTurn}
                                tileData={tileData}
                                setTileData={setTileData}
                                status={status}
                                setStatus={setStatus}
                                disableBtn={disableBtn}
                                setDisableBtn={setDisableBtn}
                                disableRestart={disableRestart}
                                playerName={playerName}
                                player2Name={player2Name}
                                setShowText={setShowText}
                                setVertices={setVertices}

                            />
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
