// import React from 'react'
import './Postcard.css'

function Postcard() {
  return (
    <>
        <div className="Postcard">
        <div className="Postcard__header">
            <div className="Postcard__profile" >
                <img className="Postcard__profileImg" src="/public/assets/bird.jpg" alt="Profile Picture">
                <span className="Postcard__username">username</span>
    
            </div>    

            <div className="Postcard__menu"><i className="fa-solid fa-ellipsis"></i>
                <ul className="Postcard__dropdownMenu" >
                    <li><a href="#">Report Post</a></li>
                    <li><a href="#">Copy Link</a></li>
                    <li><a href="#">Follow</a></li>

                </ul>
            </div> 
                

        </div>

        <main className="Postcard__body" >
            <div className="Postcard__imgContainer" >
                <img className="Postcard__image" src="/public/assets/solitude.png" alt="Post Image">
            </div>
            <h2>Post Title</h2>
            <p className="truncate" >Post Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis ex velit perferendis atque omnis, laboriosam reiciendis, assumenda adipisci id quibusdam at facilis, temporibus in non earum iste commodi mollitia!</p>
            <button className="read-more">Read More...</button>
        </main>

        <footer className="Postcard__footer" >
            <button className="Postcard__actionBtn">
            <i className="fa-solid fa-heart"></i>
            </button>

            <button className="Postcard__actionBtn">
                <i className="fa-solid fa-comment"></i>
            </button>

            <button className="Postcard__actionBtn">
                <i className="fa-solid fa-share"></i> 
            </button>

            <button className="Postcard__actionBtn">
                <i className="fa-solid fa-bookmark"></i>
            </button>

        </footer>

    </div>
      
    </>
  )
}

export default Postcard
