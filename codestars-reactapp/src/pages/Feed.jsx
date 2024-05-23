import React from 'react';
import './Feed.css';
import '../components/header/Header.css';
import '../components/nav/Nav.css';
import '../components/postCard/PostCard.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'boxicons/css/boxicons.min.css';

const Feed = () => {
    return (
        <section className="Feed">
                  <header className="Header">
            <div className="main-container">
                <div className="wrapper-logo" style={{color: "black"}}>  
                    <div>CODESTARS</div>
                </div>
                <div className="wrapper-my-account">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="36" fill="blue" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="wrapper-following-section" style={{ marginBottom: "20px"}}>
                <div className="wrapper">
                    <div className="slider__wrapper">
                        <div className="moving__box"></div>
                    </div>
                    <div className="button__wrapper">
                        <a href="#" id="forYouBtn">Following</a>
                        <a href="#" id="followingBtn">For you</a>
                    </div>
                </div>
            </div>
            
        </header>

            <main>
                <div className="PostCard">
                    <header className="PostCard__header">
                        <div className="PostCard__profile">
                            <img className="PostCard__profileImg" src="/public/assets/bird.jpg" alt="Profile Picture" />
                            <span className="PostCard__username">username</span>
                        </div>
                        <div className="PostCard__menu">
                            <i className="fa-solid fa-ellipsis"></i>
                            <ul className="PostCard__dropdownMenu">
                                <li><a href="#">Report Post</a></li>
                                <li><a href="#">Copy Link</a></li>
                                <li><a href="#">Follow</a></li>
                            </ul>
                        </div>
                    </header>
                    <main className="PostCard__body">
                        <div className="PostCard__imgContainer">
                            <img className="PostCard__image" src="/public/assets/solitude.png" alt="Post Image" />
                        </div>
                        <h2>Post Title</h2>
                        <p className="truncate">Post Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis ex velit perferendis atque omnis, laboriosam reiciendis, assumenda adipisci id quibusdam at facilis, temporibus in non earum iste commodi mollitia!</p>
                        <button className="read-more">Read More...</button>
                    </main>
                    <footer className="PostCard__footer">
                        <button className="PostCard__actionBtn"><i className="fa-solid fa-heart"></i></button>
                        <button className="PostCard__actionBtn"><i className="fa-solid fa-comment"></i></button>
                        <button className="PostCard__actionBtn"><i className="fa-solid fa-share"></i></button>
                        <button className="PostCard__actionBtn"><i className="fa-solid fa-bookmark"></i></button>
                    </footer>
                </div>
            </main>

            <footer>
                <section className="navigation">
                    <ul className="nav">
                        <span className="nav-indicator"></span>
                        <li><a href="#"><i className="bx bx-home"></i><span className="title">Home</span></a></li>
                        <li><a href="#"><i className="bx bx-search-alt-2"></i><span className="title">Search</span></a></li>
                        <li><a href="#" className="nav-item-active"><i className="bx bx-plus-circle"></i><span className="title"></span></a></li>
                        <li><a href="#"><i className="bx bx-message-square-dots"></i><span className="title">Messages</span><span className="notification-bubble notification-bubble-messages">3</span></a></li>
                        <li><a href="#"><i className="bx bx-bell"></i><span className="title">Notifications</span><span className="notification-bubble notification-bubble-notification">3</span></a></li>
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
            </footer>
        </section>
    );
};

export default Feed;

// This is the js 

// { <script src="../../js/header.js" defer></script>
// <script src="../../components/Nav.js" defer></script>
// <script src="../../components/postCard/postCard.js" defer></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js" defer></script> }
