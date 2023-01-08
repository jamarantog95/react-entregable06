import React from 'react'
import './styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer-page'>
            <div>© Diseñado por JUAN AMARANTO. All rigths reserved</div>
            <div className='footer__list-itms'>

                <a className='footer__item' href=""><i className="fa-brands fa-instagram"></i></a>


                <a className='footer__item' href=""><i className="fa-brands fa-linkedin-in"></i></a>


                <a className='footer__item' href=""><i className="fa-brands fa-youtube"></i></a>

            </div>
        </footer>

    )
}

export default Footer