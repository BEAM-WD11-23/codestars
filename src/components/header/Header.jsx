import { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    const [activeButton, setActiveButton] = useState('following')
    // const [isExpanded, setIsExpanded] = useState(false)
    function handleHeaderBar(event){
        const buttonName = event.target.dataset.buttonname
        setActiveButton(buttonName)
    }

  return (
    <>
        <header className="Header">
            <div className="main-container">
                <div className="wrapper-logo" style={{color: "black"}}>  
                    <div>CODESTARS</div>
                </div>
                <Link to="/profile">
                    <div className="wrapper-my-account">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="36" fill="blue" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                            </svg>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="wrapper-following-section" style={{ marginBottom: "20px"}}>
                <div className="wrapper">
                    <div className="slider__wrapper">
                        <div className="moving__box"></div>
                    </div>
                    <div className="button__wrapper">
                        <a href="#" data-buttonname="following" onClick={handleHeaderBar} >Following</a>
                        <a href="#" data-buttonname="forYou" onClick={handleHeaderBar} >For you</a>
                    </div>
                </div>
            </div>
            
        </header>
    </>
  )
}
export default Header