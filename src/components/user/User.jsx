/* eslint-disable no-unused-vars */
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components"

const User = () => {

    const nameRef = useRef("");
    const name2Ref = useRef("");
    const symbolRef = useRef("");
    const [color, setColor] = useState(true)
    const [gameMode, setGameMode] = useState("one");
    const [playerName, setPlayerName] = useState("");
    const [player2Name, setPlayer2Name] = useState("Computer");
    const [symbol, setSymbol] = useState("");
    const [symbol2, setSymbol2] = useState("");
    const [isEnabled0, setIsEnabled0] = useState(true)
    const [isEnabled1, setIsEnabled1] = useState(false)
    const [isEnabled2, setIsEnabled2] = useState(false)

    const navigate = useNavigate();

    const Wrapper = styled.section`
        div{
            margin:auto;
            width:50%;
            height:50vh;
            background-color:#1DE7D3;
            display:grid;
            place-items:center;
            margin-top:10%;
            box-shadow:2px 2px 2px 2px grey;
            h1{
                margin:0;
                font-size:30px;
                color:blue;
                text-shadow: 2px 2px #fff;
            }
            input{
                padding:2%;
                text-align:center;
                font-size:20px;
            }
            button{
                color:white;
                padding:2%;
                cursor:${color ? "pointer" : "arrow"};
                background-color:${color ? "green" : "grey"};
                font-weight:bold;
                &:hover{
                    color:${color ? "green" : "#fff"};
                    background-color:${color ? "#fff" : "grey"};
                }
            }
        }
        @media screen and (max-width:700px){
            div{
                width:90%;
                margin-top:40%;
            }
        }
    `

    const handleNameChange = () => {
        setPlayerName(nameRef.current.value)
        nameRef.current.value ? setColor(true) : setColor(false)
    }

    const handleName2Change = () => {
        setPlayer2Name(name2Ref.current.value)
        name2Ref.current.value ? setColor(true) : setColor(false)
    }

    const handleNext1 = () => {
        const ele = document.getElementsByName('GameMode');
        for (let i = 0; i < ele.length; i++)
            if (ele[i].checked) {
                setGameMode(ele[i].value)
                setIsEnabled0(false)
                setIsEnabled1(true)
                break
            }
        setColor(false)
    }

    const handleNext2 = () => {
        const ele = document.getElementsByName('Symbol');
        for (let i = 0; i < ele.length; i++)
            if (ele[i].checked) {
                var tempVal = ele[i].value;
                setSymbol(ele[i].value)
                ele[i].value === "O" ? setSymbol2("X") : setSymbol2("O")
                setIsEnabled1(false)
                console.log(ele[i].value)
                break
            }
        setColor(false)
        gameMode === "two" ? setIsEnabled2(true) : navigate('/tic-tac-toe/game', { state: { userName: playerName, user2Name: player2Name, userSymbol: tempVal } })
    }

    const handleStartGame = () => {
        navigate('/tic-tac-toe/game', { state: { userName: playerName, user2Name: player2Name, userSymbol: symbol, gameMode } })
    }

    return (
        <Wrapper>
            <div>
                <h1>Tic Tac Toe</h1>

                {isEnabled0 &&
                    <><h3>Select Game Mode</h3>
                        <section>
                            <input id="oneplayer" name="GameMode" value="one" type="radio" defaultChecked />
                            <label htmlFor="oneplayer">One Player</label>
                            <input id="twoplayer" name="GameMode" value="two" type="radio" />
                            <label htmlFor="twoplayer">Two Players</label>
                        </section>
                        <button onClick={handleNext1}>Next</button></>}

                {isEnabled1 && <><caption>Please Enter Your Name</caption>
                    <input type="text" placeholder="Enter Your Name..." value={playerName} onChange={handleNameChange} ref={nameRef} autoFocus />
                    <caption>Select Your Symbol</caption>
                    <section>
                        <input id="choice1" name="Symbol" value="O" type="radio" defaultChecked />
                        <label htmlFor="choice1">O</label>
                        <input id="choice2" name="Symbol" value="X" type="radio" />
                        <label htmlFor="choice2">X</label>
                    </section>
                    <button disabled={nameRef.current.value ? false : true} onClick={handleNext2}>Next</button></>}

                {isEnabled2 && <><input type="text" placeholder="Player 2 Name..." value={player2Name} onChange={handleName2Change} ref={name2Ref} autoFocus />
                    <h3>Symbol: {symbol2}</h3>
                    <button disabled={name2Ref.current.value ? false : true} onClick={handleStartGame}>Start Game</button></>}

            </div>
        </Wrapper>
    )
}

export default User