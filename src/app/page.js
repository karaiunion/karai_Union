"use client"
import styled from 'styled-components'
import { imageData } from '../../lib/data.js'
import Image from 'next/image'
import Cards from '@/Components/Cards/page.jsx'
import Videos from '@/Components/Videos/page.jsx'
import { useEffect, useState } from 'react';
import Connection from '../../lib/utils.js'
const Home = styled.div`
`;
const Images = styled.div`
display: flex;
justify-content: center;
align-items: center;  
`
const page = () => {

    const [currentImage, setCurrentImage] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            if (currentImage === imageData.length - 1) {
                setCurrentImage(0)
            } else {
                setCurrentImage(currentImage + 1)
            }
        }, 5000)
        return () => clearInterval(interval)
    }, [currentImage])


    return <Home>
        <Images>
            <Image src={imageData[currentImage].img} alt="Image" width={500} height={500} />
        </Images>
        <Cards />
        <Videos />
    </Home>
}

export default page
