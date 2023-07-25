/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Board from './board/Board'
import { useLocation } from 'react-router-dom';

const Game = () => {

    const location = useLocation();

    const [playerTurn, setPlayerTurn] = useState(location.state.userName);
    const [playerName, setPlayerName] = useState(location.state.userName);
    const [symbol, setSymbol] = useState(location.state.userSymbol);
    const [status, setStatus] = useState("");
    const [disableRestart, setDisableRestart] = useState(true);

    return (
        <>
            <Board playerName={playerName} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} symbol={symbol} setSymbol={setSymbol} status={status} setStatus={setStatus} disableRestart={disableRestart} setDisableRestart={setDisableRestart} />
        </>
    )
}

export default Game