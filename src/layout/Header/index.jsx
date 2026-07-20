import React from 'react'
import Button from '../../components/Button'
import Logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='flex h-30 items-center justify-between'>
            <div className='flex items-center gap-32'>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
                <nav className='flex gap-8'>
                    <Link className='text-[20px] font-medium text-[#212121]' to="/">کیس استادی</Link>
                    <Link className='text-[20px] font-medium text-[#212121]' to="/">خدمات من</Link>
                    <Link className='text-[20px] font-medium text-[#212121]' to="/">درباره من</Link>
                    <Link className='text-[20px] font-medium text-[#212121]' to="/">ارتباط من</Link>
                </nav>
            </div>
            <Button text='دانلود رزومه' LinkTo='/1' />
        </div>
    )
}

export default Header