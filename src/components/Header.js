import React from 'react'
import styled from 'styled-components';
function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            
            <NavMenu>

                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>

                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>

                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>

                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>

                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>

                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>

                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="https://yt3.ggpht.com/yti/APfAmoGJwln5z5DSHrKg08ie43gHM1WrLrddUz-zo5CiGw=s88-c-k-c0x00ffffff-no-rj-mo"/>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0px 36px;
    overflow-x: hidden;
`
const Logo = styled.img`
    width: 80px;

`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    margin-left: 40px;
    a {
        display: flex;
        align-items: center;
        padding: 0px 12px;
        cursor: pointer;
        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
                transition: 0.5s;
            }
        }
    }
`

const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    cursor: pointer;
`