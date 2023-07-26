/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
// import tileData from './tileData';

const Tile = ({ id, tile, symbol, setSymbol, playerTurn, playerName, player2Name, setShowText, setPlayerTurn, tileData, setTileData, status, setStatus, disableBtn, setDisableBtn, setVertices }) => {

    console.log(id)

    const { strikeMe, tileVal } = tile;

    console.log(`strikeMe ${strikeMe} ${tileVal}`)

    const bgColor = strikeMe ? "green" : "#1DE7D3";

    const Wrapper = styled.section`
        margin:5%;
        button{
            width:15vh;
            height:15vh;
            background-color:${bgColor};
            box-shadow:2px 2px 2px 2px #1DE7D3;
            border-radius:25%;
            cursor:pointer;
            font-size:30px;
            &:hover{
                font-size:40px;
                background-color:black;
                color:#fff;
            }
        }
        @media screen and (max-width:700px){
            button{
                width:10vh;
                height:10vh;
            }
        }
    `

    const handleTileClick = () => {
        let noNumber = true;
        const newState = tileData.map((tile, index) => {
            if (id === index && !isNaN(tile.tileVal)) {
                playerTurn === playerName ? setPlayerTurn(player2Name) : setPlayerTurn(playerName);
                symbol === "O" ? setSymbol("X") : setSymbol("O");
                setShowText(symbol === "O" ? "X Turn" : "O Turn");
                return { ...tile, tileVal: symbol }
            }
            else {
                return tile
            }
        })
        noNumber = !!newState.find((item) => typeof item.tileVal === 'number');
        setTileData(newState)

        let tempArray;
        if (newState[0].tileVal === newState[1].tileVal && newState[1].tileVal === newState[2].tileVal) {
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
        else if (newState[3].tileVal === newState[4].tileVal && newState[4].tileVal === newState[5].tileVal) {
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
        else if (newState[6].tileVal === newState[7].tileVal && newState[7].tileVal === newState[8].tileVal) {
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
        else if (newState[0].tileVal === newState[3].tileVal && newState[3].tileVal === newState[6].tileVal) {
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
        else if (newState[1].tileVal === newState[4].tileVal && newState[4].tileVal === newState[7].tileVal) {
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
        else if (newState[2].tileVal === newState[5].tileVal && newState[5].tileVal === newState[8].tileVal) {
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
        else if (newState[0].tileVal === newState[4].tileVal && newState[4].tileVal === newState[8].tileVal) {
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
        else if (newState[2].tileVal === newState[4].tileVal && newState[4].tileVal === newState[6].tileVal) {
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
            const finalState = newState.map((tile, index) => {
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

    return (
        <Wrapper>
            <button onClick={() => handleTileClick()} disabled={disableBtn}>{tileVal}</button>
        </Wrapper>
    )
}

export default Tile