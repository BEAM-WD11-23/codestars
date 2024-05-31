import { useState } from "react"
import "./Postcard.css"
import { 
  Wrapper, 
  Header, 
  Body, 
  Footer, 
  Menu, 
  ImageWrapper,
  TextWrapper,
  Title,
  Text,
  Read_More_Less
} from "./Postcard.styled"
import profilePicture from "/src/assets/postcard/bird.jpg"
import postPicture from "/src/assets/postcard/solitude.png"
import { Carousel } from "@material-tailwind/react";

function Postcard() {
  const [isExpanded, setIsExpanded] = useState(false)

  function handleReadMoreLess(){
    setIsExpanded(!isExpanded)
  }
  return (
    <>
    <Wrapper>
      <Header>
        <div className="Postcard__profile">
          <img
            className="Postcard__profileImg"
            src={profilePicture}
            alt="Profile Picture"
          />
          <span className="Postcard__username">username</span>
        </div>
        <Menu>
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
        </Menu>
      </Header>
      <Body>
      <Carousel>
          <img
            className="Postcard__image"
            src={postPicture}
            alt="Post Image"
          />
          <img
            className="Postcard__image"
            src={postPicture}
            alt="Post Image"
          />
        </Carousel>
        <TextWrapper>
          <Title>Post Title</Title>
          <Text $truncate={!isExpanded} animate={isExpanded ? {height:'auto', } : {height:'fit-content'}} >
            Post Content Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit veritatis ex velit perferendis atque omnis, laboriosam
            reiciendis, assumenda adipisci id quibusdam at facilis, temporibus in
            non earum iste commodi mollitia!
          </Text>
          <Read_More_Less onClick={handleReadMoreLess}>
            {isExpanded ? "Read Less" : "Read More"}
          </Read_More_Less>
        </TextWrapper>
      </Body>
      <Footer>
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
      </Footer>
    </Wrapper>
  </>
  )
}

export default Postcard
