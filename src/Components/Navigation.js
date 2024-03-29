import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../img/avatar.jpg';

function Navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt=""/>
            </div>
            <ul className="nav-items">
                <li className="nav-items">
                    <NavLink to="/" activeClassName="active-class" exact>HOME</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/about" activeClassName="active-class" exact>ABOUT</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/resume" activeClassName="active-class" exact>RESUME</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/portfolios" activeClassName="active-class" exact>PORTFOLIOS</NavLink>
                </li>
                {/* <li className="nav-items">
                    <NavLink to="/blogs" activeClassName="active-class" exact>BLOGS</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/contact" activeClassName="active-class" exact>CONTACT</NavLink>
                </li> */}
            </ul>
            <footer className="footer">
                <p>&copy;2021 Rafael Angelo Pucut</p>
            </footer>
        </NavigationStyled>
    );
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);

    .avatar {
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img {
            width: 70%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items {
        width: 100%;
        text-align: center;

        .active-class {
            background-color: var(--primary-color);
            color: var(--white-color);
        }

        li {
            display: block;
            a {
                display: block;
                padding: 0.45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all 0.4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                
                &:hover {
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition: All 0.4s cubic-bezier(.9,-0.13,.13,.88);    //cubic-bezier.com to get right values
                    z-index: 3;
                    opacity: 0.21;
                    transform-origin: right;
                    z-index: -1;
                }
            }

            a:hover::before {
                width: 100%;
                height: 100%;
            }
        }
    }

    .footer {
        border-top: 1px solid var(--border-color);
        width: 100%;
        p {
            padding: 2rem 0;
            font-size: 1.1.rem;
            display: block;
            text-align: center;
        }
    }
`;
export default Navigation;