import React from 'react'
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'

import Logo from '../../assets/david-logo1.png'
import './Footer.scss'

const Footer = () => {
    let currentYear = new Date().getFullYear()

    return (
        <footer className='app__flex'>
            <div className='footer__links'>
                <div className='about-summary'>
                    <h2 className='footer__heading'>DAVID KINYANJUI</h2>
                    <p>A Fullstack developer focused on building applications that lead to product success.</p>
                </div>
                <div className='footer__social'>
                    <h2 className='footer__heading'>SOCIAL </h2>
                    <div>
                        <a href='https://github.com/kinyanjuiprince21' target='_blank' rel="noreferrer">
                            <BsGithub />
                        </a>
                        <a href='https://twitter.com/Kin_david' target='_blank' rel="noreferrer">
                            <BsTwitter />
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer__copyright'>
                <img src={Logo} alt='David Kinyanjui-Logo' />
                <span>&copy; Copyright {currentYear}. Made by David Kinyanjui.</span>
            </div>
        </footer>
    )
}

export default Footer
