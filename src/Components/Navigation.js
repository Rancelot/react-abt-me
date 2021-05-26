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
                    <NavLink to="/home" activeClassName="active-class">Home</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/about" activeClassName="active-class">About</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/resume" activeClassName="active-class">Resume</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/blogs" activeClassName="active-class">Blogs</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to="/contact" activeClassName="active-class">Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2021 Rafael Angelo Pucut</p>
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
        width: 80%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 2rem 0;
        img {
            width: 90%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items {
        width: 100%;
        text-align: center;
        li {
            display: block;
            a {
                display: block;
            }
        }
    }
`;
export default Navigation;