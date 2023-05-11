import React, { useState } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import styled from 'styled-components'


const Slider = ({sliderData, subIndex}) => {

    // let sliderData = [ 'assets/slider/bg.jpg', 'assets/slider/pic1.jpeg', 'assets/slider/pic2.jpeg', 'assets/slider/pic3.jpeg', 'assets/slider/pic4.jpeg' ]
    const [current, setCurrent] = useState(subIndex)
    
    // console.log(sliderData)

    // console.log(subIndex)

    let length = sliderData.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const moveDots = (index) => {
        setCurrent(index)
    }

  return (
    <Section className='main'>
        <div className='slider'>
            <div className='leftArrow arrow'>
                <BsFillArrowLeftCircleFill onClick={() => prevSlide()} />
            </div>
            <div className='rightArrow arrow'>
                <BsFillArrowRightCircleFill onClick={() => nextSlide()} />
            </div>
            <img src={sliderData[current].src} className='portfolio_images' style={{borderRadius: '5px'}} alt="Slider Pic" />
            <div className='dots'>
                {Array.from({length: length}).map((item,index) => (
                    <div key={index} onClick={() => moveDots(index)} className={current === index ? 'dot active' : 'dot'}></div>
                ))}
            </div>
        </div>
    </Section>
  )
}

export default Slider

const Section = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: rem;
    .slider{
        display: flex;
        align-items: center;
        justify-content: center;

        margin: 2rem 0;
        .arrow{
            position: absolute;
            z-index: 100;
            user-select: none;
            svg{
                cursor: pointer;
                font-size: 25px;
                color: #ffff;
                :hover{
                    color: #FDB716
                }
            }
            @media screen and (max-width: 1240px){
                top: 100%;
                svg{
                    font-size: 45px;
                }
            }
            @media screen and (max-width: 425px){
                svg{
                    font-size: 25px;
                }
            }
        }
        .rightArrow{
            right: 2.5%;
            top: 49%;
            @media screen and (max-width: 1240px){
            }
        }
        .leftArrow{
            left: 1%;
            top: 49%;
            @media screen and (max-width: 1240px){
            }
        }
        .slide{
            opacity: 0;
            transition: opacity ease-in-out .4s;
        }
        .active{
            opacity: 1;
        }

        @media screen and (max-width: 425px){
            .portfolio_images{
            }
        }
    }
    }
`