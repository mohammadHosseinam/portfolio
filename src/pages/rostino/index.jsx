import React from 'react'
import Header from '../../layout/Header'
import RostinoCasestudy from "../../assets/images/RostinoCasestudy.png"

function Rostino() {
    return (
        <div className="max-w-294 mx-auto px-4 sm:px-6 lg:px-0">
            <Header />
            <img src={RostinoCasestudy} alt="Rostino Casestudy" />
        </div>
    )
}

export default Rostino