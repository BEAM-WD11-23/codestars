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
  Read_More_Less,
  DropdownList
} from "./Postcard.styled"
import profilePicture from "/src/assets/postcard/bird.jpg"
import postPicture from "/src/assets/postcard/solitude.png"
import { Carousel } from "@material-tailwind/react";

function Postcard({post}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMenu, setIsMenu] = useState(false)

  function handleMenu(){
    setIsMenu(!isMenu)
  }

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
        <Menu onClick={handleMenu}>
          <i className="fa-solid fa-ellipsis" />
          {isMenu && <DropdownList>
            <li>
              <a href="#">Report Post</a>
            </li>
            <li>
              <a href="#">Copy Link</a>
            </li>
            <li>
              <a href="#">Follow</a>
            </li>
          </DropdownList>}
        </Menu>
      </Header>
      <Body>
      {post.images.length > 0 && <Carousel>
          {post.images.map((img, index) => (
            <img
              key={index}
              className="Postcard__image"
              src={img}
              alt="Post Image"
            />
          ))}
        </Carousel>}
        <TextWrapper>
          {post.title && <Title>{post.title}</Title>}
          <Text $truncate={!isExpanded} animate={isExpanded ? {height:'auto', } : {height:'fit-content'}} >
            {post.content}
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
