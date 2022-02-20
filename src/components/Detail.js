import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import db from "../firebase";



function Detail() {
    const { id } = useParams();
  
    const [movie, setMovie] = useState([]);
    const fetchMovies=async()=>{
        const response=db.collection('movies');
        const data=await response.get();
        data.docs.forEach(item=>{
         setMovie([...movie,item.data()])
        })
      }
    useEffect(() => {
        fetchMovies();
    }, [])
    console.log(movie)
   
  return (
    <Container>
         {
            movie && movie.map(data => (
                <>
                <BackGround>
                <img src={data.backgroundImg}/>
                </BackGround>
                <ImageTitle>
                <img src={data.titleImg}/>
                </ImageTitle>
                <Controls>
                <PlayButton>
                <img src="/images/play-icon-black.png"/>
                <span>Play</span>
                </PlayButton>
                <TrailerButton>
                <img src="/images/play-icon-white.png"/>
                <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                <span>+</span>
                </AddButton>
                <GroupButton>
                <img src="/images/group-icon.png"/>
                </GroupButton>
                </Controls>
                <SubTitle>
                {data.SubTitle}
                </SubTitle>
                <Description>
                
                {data.description}
                </Description>
                </>
            ))
        }
        
        
        
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const BackGround = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit:cover;

    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px; 
    width: 35vw;
    min-width: 200px;
    img{
        width: 60%;
        width: 60%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`


const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249,249,249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background: rgb(198,198,198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.9);
    color: white;
    border: 1px solid rgb(249,249,249);
    text-transform:  uppercase;
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;
    span {
        font-size: 30px;
        color: white;
        margin-bottom: 4px;
    }
`

const GroupButton = styled(AddButton)`
    background: rgb(0,0,0);
`

const SubTitle = styled.div`
    font-size: 15px;
    min-height: 20px;
    margin-top: 25px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 26px;
    max-width: 550px;
`