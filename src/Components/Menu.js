import React from 'react';
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub';
import Pinterest from '@material-ui/icons/Pinterest';

function Menu({menuItem}) {
    return (
        <MenuItemStyled>
            {
                menuItem.map((item) => {
                    return <div className="grid-item" key={item.id}>
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <img src={item.image} alt="" />
                                <ul>
                                    <li>
                                        <a href={item.link1}>
                                            <GitHub />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={item.link2}>
                                            <Pinterest />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h6>{item.title}</h6>
                            <p>{item.text}</p>
                        </div>
                    </div>
                })
            }
        </MenuItemStyled>
    )
}

const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    
    .grid-item {
        .portfolio-content {
            display: block;
            position: relative;
            
            h6 {
                font-size: 1.5rem;
            }

            img {
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }

            ul {
                display: none;
            }

            .portfolio-image {
                &::before {
                    content: "";
                    position: absolute;
                    left: 2%;
                    top: 4%;
                    height: 0;
                    width: 0;
                    transition: all 0.4s ease-in-out;
                }
            }

            .portfolio-image:hover {
                &::before {
                    height: calc(100% - 32%);
                    width: calc(100% - 4%);
                    background-color: white;
                    opacity: 0.9;
                    transform-origin: left;
                    transition: all 0.4s ease-in-out;
                }
            }
        }
    }
`;

export default Menu;
