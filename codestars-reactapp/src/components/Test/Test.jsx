import { useEffect } from 'react';
import './Test.style.css';

const Wrapper = styled.div`
padding: 1em;
margin: auto;
width: fit-content;
border: 1px solid black;
`

function Test(props){

    const [child1, child2, ...rest] = Children.toArray(props.children) ///importing Children from React

    const myFn=()=>{}

    useEffect(myFn, [])


    return(
        <>
            <Wrapper>
                {child1}
                <h1>Hallo individual {props.name} {props.lname}</h1>
            {/* {props.children} */}
                {child2}
                {rest}
            </Wrapper>
        </>
    )
}

export default Test;