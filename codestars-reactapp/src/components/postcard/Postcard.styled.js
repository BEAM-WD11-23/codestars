import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: .5em;
    margin-inline: .7em;
    border-radius: 5px;
    box-shadow: 1px 2px 7px #cecece;
    background-color: burlywood;
`

export const Header = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between; 
    align-items: center; 
    height: 80px;
    padding: 10px 20px;
    box-shadow: none;
    background-color: lightgreen;
`

export const Body = styled.article`
    flex: 1; /* Allow main content to fill remaining space */
    background-color: orange;
`

export const Footer = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between; 
    align-items: center; 
    height: 80px;
    padding: 10px 20px;
    box-shadow: none;
    margin-bottom: 100px;
    background-color: lightcoral;
`

export const Menu = styled.div`
    position: relative;
    height: 50px;
    width: 50px;
    border-radius: 50%; 
    background-color: white;
    border: 2px solid #C9C9C9;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    background-color: dodgerblue;
`
export const TextWrapper = styled.section`
background-color:red;
`

export const Title = styled.h2``

export const Text = styled(motion.p)`
    display: ${({ $truncate }) => $truncate ? '-webkit-box' : 'block'};
    -webkit-line-clamp: 2;  /* Limit to 2 lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: height 0.3s ease;
`;

export const Read_More_Less = styled.a`
    display:block; 
    background-color: #416ABB;
    border-radius: 20px;
    color: white;
    cursor: pointer;
`