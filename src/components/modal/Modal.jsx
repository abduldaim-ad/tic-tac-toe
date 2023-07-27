/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { styled } from 'styled-components'

const Modal = ({ showModal, setShowModal }) => {

    const Wrapper = styled.section`
    .modal-style{
        margin: 0 2%;
        padding: 2%;
        width: 90%;
        height: 90vh;
        background-color: grey;
        position: fixed;
        top:0;
        z-index: 1;
        box-shadow: 3px 3px 1px 1px grey;
        border-radius: 2px;
    }

    .table-style{
        background-color: black !important;
        width:50%;
        text-align:center;
    }

    .table-values{
        margin: 10%;
        background-color: #1DE7D3;
    }

    .table-values:hover{
        background-color: grey;
    }

    .close-btn{
        position: fixed;
        top: 0;
        right: 0;
        margin: 3% 5%;
        text-align: right;
        cursor: pointer;
        z-index: 1;
    }

    .inner-div{
        width: 90%;
    }

    @media screen and (max-width:600px) {
        .main-div{
            flex-direction: column;
        }
        .inner-div{
            width: 100%;
        }
        .modal-image{
            width: 80%;
            margin: 1% 10%;
        }
        .modal-style{
            margin-left: -2rem;
        }
        .caption-style{
            font-size: 0.5rem;
        }
    }
    `

    const handleCloseModal = () => {
        setShowModal(false)
    }

    if (showModal) {
        // const { title, overview, release_date, vote_average, vote_count, imageSource } = modalData;
        const userData = JSON.parse(localStorage.getItem("gameData"));
        return (
            <>
                <Wrapper>
                    <div className='modal-style'>
                        <table className='table-style'>
                            <thead className='inner-table'>
                                <tr className='table-data'>
                                    <th className='table-values'>Sr#</th>
                                    <th className='table-values'>Player Name</th>
                                    <th className='table-values'>Win</th>
                                    <th className='table-values'>Lose</th>
                                    <th className='table-values'>Draw</th>
                                </tr>
                            </thead>
                            <tbody className='inner-table'>
                                {userData.map((data, key) => {
                                    const { userName, win, lose, draw } = data;
                                    return (
                                        <tr key={data.id}>
                                            <td className='table-values'>{key + 1}</td>
                                            <td className='table-values'>{userName}</td>
                                            <td className='table-values'>{win}</td>
                                            <td className='table-values'>{lose}</td>
                                            <td className='table-values'>{draw}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <button className='close-btn' onClick={handleCloseModal}>X</button>
                </Wrapper>
            </>
        )
    }
}

export default Modal