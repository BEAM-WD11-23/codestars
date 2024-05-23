import './Nav.css'

function Navigation() {
  return (
    <>
        <section className="Navigation">
        <ul className="nav">
            <span className="nav-indicator"></span>
            <li>
                <a href="#">
                    <i className='bx bx-home'></i>
                    <span className="title">Home</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className='bx bx-search-alt-2'></i>
                    <span className="title">Search</span>
                </a>
            </li>
            <li>
                <a href="#" className="nav-item-active">
                    <i className='bx bx-plus-circle'></i>
                    <span className="title">New Post</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className='bx bx-message-square-dots'></i>
                    <span className="title">Messages</span>
                    <span className="notification-bubble notification-bubble-messages">3</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className='bx bx-bell'></i>
                    <span className="title">Notifications</span>
                    <span className="notification-bubble notification-bubble-notification">3</span>
                </a>
            </li>
        </ul>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="filter-svg">
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>
        </svg>
    </section>
    </>
  )
}
export default Navigation