import "./Postcard.css"
import profilePicture from "/src/assets/postcard/bird.jpg"
import postPicture from "/src/assets/postcard/solitude.png"
function Postcard() {
  return (
    <>
    <div className="Postcard">
      <div className="Postcard__header">
        <div className="Postcard__profile">
          <img
            className="Postcard__profileImg"
            src={profilePicture}
            alt="Profile Picture"
          />
          <span className="Postcard__username">username</span>
        </div>
        <div className="Postcard__menu">
          <i className="fa-solid fa-ellipsis" />
          <ul className="Postcard__dropdownMenu">
            <li>
              <a href="#">Report Post</a>
            </li>
            <li>
              <a href="#">Copy Link</a>
            </li>
            <li>
              <a href="#">Follow</a>
            </li>
          </ul>
        </div>
      </div>
      <main className="Postcard__body">
        <div className="Postcard__imgContainer">
          <img
            className="Postcard__image"
            src={postPicture}
            alt="Post Image"
          />
        </div>
        <h2>Post Title</h2>
        <p className="truncate">
          Post Content Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit veritatis ex velit perferendis atque omnis, laboriosam
          reiciendis, assumenda adipisci id quibusdam at facilis, temporibus in
          non earum iste commodi mollitia!
        </p>
        <button className="read-more">Read More...</button>
      </main>
      <footer className="Postcard__footer">
        <button className="Postcard__actionBtn">
          <i className="fa-solid fa-heart" />
        </button>
        <button className="Postcard__actionBtn">
          <i className="fa-solid fa-comment" />
        </button>
        <button className="Postcard__actionBtn">
          <i className="fa-solid fa-share" />
        </button>
        <button className="Postcard__actionBtn">
          <i className="fa-solid fa-bookmark" />
        </button>
      </footer>
    </div>
  </>
  )
}

export default Postcard
