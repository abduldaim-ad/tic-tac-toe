/* eslint-disable no-unused-vars */
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components"

const User = () => {

    const nameRef = useRef("");
    const symbolRef = useRef("");
    const [playerName, setPlayerName] = useState("");
    const [symbol, setSymbol] = useState("");

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
            input{
                padding:2%;
                text-align:center;
                font-size:20px;
            }
            button{
                color:white;
                padding:2%;
                cursor:${nameRef.current.value ? "pointer" : "arrow"};
                background-color:green;
                font-weight:bold;
                &:hover{
                    color:${nameRef.current.value ? "green" : "#fff"};
                    background-color:${nameRef.current.value ? "#fff" : "green"};
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
    }

    const handleStartGame = () => {
        const ele = document.getElementsByName('Symbol');
        for (let i = 0; i < ele.length; i++)
            if (ele[i].checked) {
                var tempVal = ele[i].value;
                setSymbol(ele[i].value)
                console.log(ele[i].value)
                break
            }

        navigate('/game', { state: { userName: nameRef.current.value, userSymbol: tempVal } })
    }

    return (
        <Wrapper>
            <div>
                <h1>Tic Tac Toe</h1>
                <caption>Please Enter Your Name</caption>
                <input type="text" placeholder="Enter Your Name..." value={playerName} onChange={handleNameChange} ref={nameRef} autoFocus />
                <caption>Select Your Symbol</caption>
                <section>
                    <input id="choice1" name="Symbol" value="O" type="radio" defaultChecked />
                    <label htmlFor="choice1">O</label>
                    <input id="choice2" name="Symbol" value="X" type="radio" />
                    <label htmlFor="choice2">X</label>
                </section>
                <button disabled={nameRef.current.value ? false : true} onClick={handleStartGame}>Start Game</button>
            </div>
        </Wrapper>
    )
}

export default User