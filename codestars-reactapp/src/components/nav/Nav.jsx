import './Nav.css'

function Header() {
  return (
    <>
        <section class="navigation">
        <ul class="nav">
            <span class="nav-indicator"></span>
            <li>
                <a href="#">
                    <i class='bx bx-home'></i>
                    <span class="title">Home</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-search-alt-2'></i>
                    <span class="title">Search</span>
                </a>
            </li>
            <li>
                <a href="#" class="nav-item-active">
                    <i class='bx bx-plus-circle'></i>
                    <span class="title">New Post</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-message-square-dots'></i>
                    <span class="title">Messages</span>
                    <span class="notification-bubble notification-bubble-messages">3</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-bell'></i>
                    <span class="title">Notifications</span>
                    <span class="notification-bubble notification-bubble-notification">3</span>
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
export default Header