import styled, { keyframes } from "styled-components"

const Wrapper = styled.div`
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: clamp(2em, 30%, 4em);
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const SpinnedElement = styled.div`
    margin: 0;
    animation: 1s ${rotate} linear infinite;
`

function Spinner({type='circle-notch', color='black', size='1em'}) {

  return (
    <Wrapper>
        <SpinnedElement>
            <i style={{fontSize:size, color:color, margin:'0'}} className={`fa-solid fa-${type}`}></i>
        </SpinnedElement>
    </Wrapper>
  )
}
export default Spinner