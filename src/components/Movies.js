import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'


function Movies() {

    const movies = useSelector(selectMovies);
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                {
                    movies &&
                    movies.map((movie) => (
                        <Wrap key={movie.id}>
                            <Link to={`/detail/${movie.id}`}>
                                <img src={movie.cardImg} alt="" />
                            </Link>
                        </Wrap>


                    ))
                }

            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    
  
`
const Content = styled.div`

    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, minmax(0,1fr));

    @media (max-width:768px){
        grid-template-columns: repeat(2, minmax(0,1fr));
    }


`
const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius:10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    border: 3px solid rgba(294,294,294,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img{
        inset: 0px;
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        opacity: 1;
        position: absolute; 
        transition: opacity 250ms ease-in-out 0s;
        z-index: 1;
        top:0;
    }

    &:hover{
        transform: scale(1.05);
        border-color:  rgba(294,294,294,0.9);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        
    }
    
`


