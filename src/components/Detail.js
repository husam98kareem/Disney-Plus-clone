import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase'

function Detail(props) {

    const { id } = useParams();
    const [detailData, setdetailData] = useState({});

    useEffect(() => {
        db.collection("movies")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setdetailData(doc.data());

                } else {
                    console.log(" no such firebase");

                }

            })

    }, [id]);



    return (
        <Container >
            <Background>
                <img src={detailData.backgroundImg} alt=" " />
            </Background>
            <ImageTitle>
                <img src={detailData.titleImg} alt="" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="images/play-icon-black.png" alt="" />
                    <span>PLAY</span>

                </PlayButton>
                <TrailerButton>
                    <img src="images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>


                </TrailerButton>

                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="images/group-icon.png" alt="" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                {detailData.subTitle}
            </SubTitle>
            <Describtion>
                {detailData.description}
            </Describtion>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.6;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`
const ImageTitle = styled.div`
     height:30vh;
     min-height: 170px;
     width: 35vw;
     min-width: 200px;
     margin-top: 60px;


     img{
        width: 100%;
        height: 100%;
        object-fit: contain;
     }
`
const Controls = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;


`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border:none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198) ;
        
    }


`

const TrailerButton = styled(PlayButton)`
    background:rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;

    `

const AddButton = styled.button`
    margin-right: 16px;
    width:44px;
    height:44px;
    display:flex;
    aling-items:center;
    justify-content:center;
    border-radius:50%;
    border: 2px solid white;
    background: rgb(0, 0, 0,0.6);
    cursor: pointer;
    

    span{
      font-size: 30px;
      color: white;
      
    }
`

const GroupWatchButton = styled(AddButton)`
   background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
     color: rgb(249, 249, 249);
     font-size: 15px;
     min-height:20px;
     margin-top: 26px;
`

const Describtion = styled.div`
     line-height: 1.4;
     font-size: 20px;
     margin-top: 16px;
     color: rgb(249, 249, 249);
     max-width: 760px;
`