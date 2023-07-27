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

        let tempArray, win;
        if (newState[0].tileVal === newState[1].tileVal && newState[1].tileVal === newState[2].tileVal) {
            tempArray = [0, 1, 2];
            setStatus(`${playerTurn} Wins`)
            win = `${playerTurn} Wins`;
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
            win = `${playerTurn} Wins`;
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
            win = `${playerTurn} Wins`;
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
            win = `${playerTurn} Wins`;
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
            win = `${playerTurn} Wins`;
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
            win = `${playerTurn} Wins`;
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
            win = `${playerTurn} Wins`;
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
            win = `${playerTurn} Wins`;
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
            win = "Game Draw";
            setShowText("Game Over");
            setDisableBtn(true)
        }

        console.log("Drawwww1", win, tempArray)

        if (tempArray?.length > 0 || win == "Game Draw") {
            const existingData = (JSON.parse(localStorage.getItem('gameData')) || []);
            const userIndex1 = existingData.findIndex((item) => item.userName === playerName);
            const userIndex2 = existingData.findIndex((item) => item.userName === player2Name);


            if (userIndex1 !== -1) {
                if (win === `${playerName} Wins`) {
                    existingData[userIndex1].win = existingData[userIndex1].win + 1;
                }
                else if (win === `${player2Name} Wins`) {
                    existingData[userIndex1].lose = existingData[userIndex1].lose + 1;
                }
                else if (win === "Game Draw")
                    existingData[userIndex1].draw = existingData[userIndex1].draw + 1;
            } else {
                let tempData;
                if (win === `${playerName} Wins`) {
                    tempData = { userName: playerName, win: 1, lose: 0, draw: 0 };
                }
                else if (win === `${player2Name} Wins`) {
                    tempData = { userName: playerName, win: 0, lose: 1, draw: 0 };
                }
                else if (win === "Game Draw") {
                    tempData = { userName: playerName, win: 0, lose: 0, draw: 1 };
                }
                existingData.push(tempData);
            }

            if (userIndex2 !== -1) {
                if (win === `${player2Name} Wins`) {
                    existingData[userIndex2].win = existingData[userIndex2].win + 1;
                }
                else if (win === `${playerName} Wins`) {
                    existingData[userIndex2].lose = existingData[userIndex2].lose + 1;
                }
                else if (win === "Game Draw")
                    existingData[userIndex2].draw = existingData[userIndex2].draw + 1;
            } else {
                let tempData = {};
                if (win === `${player2Name} Wins`) {
                    console.log('here --->', player2Name)
                    tempData.userName = player2Name;
                    tempData.win = 1;
                    tempData.lose = 0;
                    tempData.draw = 0;
                }
                else if (win === `${playerName} Wins`) {
                    tempData.userName = player2Name;
                    tempData.win = 0;
                    tempData.lose = 1;
                    tempData.draw = 0;
                }
                else if (win === "Game Draw") {
                    tempData = { userName: player2Name, win: 0, lose: 0, draw: 1 };
                }
                console.log('tempData ---->', tempData)
                existingData.push(tempData);
            }

            console.log('existingData', existingData)

            localStorage.setItem('gameData', JSON.stringify(existingData));

            setShowText("Game Over");
            setPlayerTurn(playerName)
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


        // status === `${playerName} Wins` || status === 'Game Draw'
        //     ? localStorage.setItem("gameData", JSON.stringify([{ userName: playerName, win: 1, lose: 0 }, { userName: player2Name, win: 0, lose: 1, draw: 0 }]))
        //     : localStorage.setItem("gameData", JSON.stringify([{ userName: player2Name, win: 1, lose: 0 }, { userName: playerName, win: 0, lose: 1, draw: 0 }]))

    }

    return (
        <Wrapper>
            <button onClick={() => handleTileClick()} disabled={disableBtn}>{tileVal}</button>
        </Wrapper>
    )
}

export default Tile