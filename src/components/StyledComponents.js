import styled from 'styled-components'

const Navbari = styled.i`
    {
    position: relative;
    display: -moz-inline-stack;
    display: inline-block;
    zoom: 1;
    *display: inline;
    width: 30px;
    height: 2px;
    color: #000;
    font: bold 14px/.4 Helvetica;
    text-transform: uppercase;
    text-indent: -55px;
    background: ${props => props.navbarColor};
    -webkit-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out;
    }
    &:after {
        background: ${props => props.navbarColor};
    }
    &:before {
        background: ${props => props.navbarColor};
    }
`

export default Navbari