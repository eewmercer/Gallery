"use client";
import React, {useState} from 'react';
import bigApple from "../../../public/pictures/bigApple.jpeg"

interface GalleryProps {
    name: string;
    images: Array<string>;
};

const Gallery = (props: GalleryProps) => {
    const [galleryCounter, setGalleryCounter] = useState(0)

    return (
        <>
            <div className='heading'>
                <img src={String(bigApple)} alt="BIG" />
                <h1>Welcome to the Gallery!</h1>
                <h3>Feel free to peruse the hightly sought after art pieces</h3>
            </div>
            <div className='gallery-scroll'>
                <button onClick={() => {
                    setGalleryCounter(galleryCounter-1);
                    console.log(galleryCounter)
                }}>Prev</button>
                {props.images.map((image) => {
                    return <div>
                        <img src={String(bigApple)} alt="bigApple pic" />
                    </div>
                })}
                <button onClick={() => {
                    setGalleryCounter(galleryCounter+1);
                    console.log(galleryCounter)
                }}>Next</button>
            </div>
        </>
    )
}

export default Gallery;