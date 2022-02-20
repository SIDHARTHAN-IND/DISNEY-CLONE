import React from 'react'
import styled from "styled-components";
import {useHistory , Link} from "react-router-dom";
function Login() {
    
    let history = useHistory();
  return (
    <Container>
            <CTA>
                <CTAlogoOne src="/images/cta-logo-one.svg" />
                <SignUp onClick = {()=> {history.push('/home')}}>GET ALL THERE</SignUp>
                <Description>
                    Get Premier Access to Raya and the last Dragon with Disney+subscription. As of 13/2/2022,The price of disney bundle will increase by $1.
                </Description>
                <CTAlogoTwo src="/images/cta-logo-two.png" />
            </CTA>  
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before{
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        opacity: 0.8;
        background-image: url("/images/login-background.jpg");
    }
`



const CTA = styled.div`
 max-width: 650px;
 padding: 80px 40px;
 width: 80%;
 display: flex;
 flex-direction: column;
 margin-top: 45px;
 
`

const CTAlogoOne = styled.img`

`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0px;
    color: #f9f9f9;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 8px;

    &:hover{
        background-color: blueviolet;
        color:black;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTAlogoTwo = styled.img``