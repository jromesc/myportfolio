import styled from 'styled-components';
import { Navbar, Nav, Container } from 'react-bootstrap'

export const StyledNavbar = styled(Navbar)`
    background-color: rgba(20, 20, 20, 0.5);
    backdrop-filter: blur(6px); 
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10 !important;
    padding-bottom: 0;

    @media (max-width: 991px) {
        a.nav-link{
            width: 100px;
        }
        .nav-icons {
            display: flex;
            flex-direction: row;
            margin: 0 !important;
            justify-content: end;
        }

        .nav-icons a{
            width: auto;
            margin-left: 2rem !important;
        }
    }
    
    & a, span {
        color: #fff;
        border-bottom: 2px solid transparent;
        padding-bottom: 1rem;
        
    }

    & .mynav-brand:hover, a:hover, a.active{
        color: rgb(255, 202, 44) !important;
    }

    & a:hover, a.active{
        border-bottom: 2px solid rgb(255, 202, 44);
        transition: 0.2s ease-in-out;
    }

    & .navbar-toggler-icon {
        background-image: url("data:image/svg+xml, %3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgb(255, 202, 44)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22' /%3e%3c/svg%3e") !important;
    }

`
export const MaxContainer = styled.div`
    min-height: ${props => props.min_height ? props.min_height : '700px'};
    max-height: ${props => props.max_height};
    display: ${props => props.display};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    position: ${props => props.position ? props.position : 'relative'};
    flex-direction: ${props => props.flex_direction};
    width: 100%;
    max-width: 1200px;
    padding: ${props => props.padding ? props.padding : '8rem 1rem 5rem 1rem'};
    margin: ${props => props.margin ? props.margin : 'auto'};
    overflow: ${props => props.overFlow ? props.overFlow : 'hidden'};

    @media (max-width: 991px) {
       
    }
`

export const FlexContainer = styled(Container)`
    display: flex;
    height: ${props => props.height};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    position: ${props => props.position};
    flex-direction: ${props => props.flex_direction};
    margin: ${props => props.margin};
    padding: ${props => props.padding ? props.padding : '0'};
`
export const ImageContainer = styled(Container)`
    height: ${props => props.height};
    width: ${props => props.width};
    height: ${props => props.size};
    width: ${props => props.size};
    min-height: ${props => props.minHeight};
    border-radius: ${props => props.radius ? props.radius : '50%'};
    overflow: ${props => props.isOverflowHidden ? "hidden" : "visible"};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.mbg ? props.mbg : '#fff'};
    margin: ${props => props.margin ? props.margin : 'auto'};

    & img {
        height: 100%;
    }
`

export const FooterContainer = styled(Container)`
    margin-top: ${props => props.margintop};
    border-bottom: ${props => props.borderbottom};
    padding: ${props => props.padding ? props.padding : '0'};

    & a{
        color: #fff;
        padding: 6.5px 1.3rem !important;
    }

    & a:hover{
        color: rgb(255, 202, 44);
    }
`

export const BackgroundCircle = styled.div`
    height: 8px;
    width: 8px;
    background-color: rgba(20, 20, 20, 0.5);
    border-radius: 50%;
    margin: 1rem;
    flex-shrink: 0;

    @media (max-width: 991px) {
        height: 4px;
        width: 4px;
    }
`