import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
    margin-top: .5em;
    margin-inline: .7em;
    border-radius: 5px;
    box-shadow: 1px 2px 7px #cecece;
    /* background-color: burlywood; */
`

export const Header = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between; 
    align-items: center; 
    height: 80px;
    padding: 10px 20px;
    box-shadow: none;
    /* background-color: lightgreen; */
`

export const Body = styled.article`
    flex: 1; /* Allow main content to fill remaining space */
    /* background-color: orange; */
`

export const Footer = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
    height: 80px;
    padding: 10px;
    box-shadow: none;
    /* background-color: lightcoral; */
`

export const Menu = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5em 1em;
`

export const DropdownList = styled.ul`
    position: absolute;
    top: 1.2em;
    right: -1em;
    border: 1em;
    margin: 1em;
    padding: 1em;
    color: white;
    white-space: nowrap;
    border-radius: .4em;
    z-index: 100;
    background-color: #416ABB;
`

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    /* background-color: dodgerblue; */
`
export const TextWrapper = styled.section`
    padding: .7em;
    margin-block: .5em;
    /* background-color:red; */
`

export const Title = styled.h2`
    font-size: 1.2em;
    font-weight: 600;
`

export const Text = styled(motion.p)`
    display: ${({ $truncate }) => $truncate ? '-webkit-box' : 'block'};
    -webkit-line-clamp: 2;  /* Limit to 2 lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: height 0.3s ease;
`;

export const Read_More_Less = styled.a`
    color: #2868B9;
    font-size: .8em;
    font-weight: 600;
    padding-block: 0.1em;
    /* padding-inline: 0.5em; */
    cursor: pointer;
    border-radius: 20px;
    /* background-color: #416ABB; */
`