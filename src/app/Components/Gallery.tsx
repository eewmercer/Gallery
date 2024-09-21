"use client";
import React, {FC, useState} from 'react';
import Image from 'next/image'


interface GalleryProps {
    name: string;
    images: Array<string>;
};

const Gallery: FC<GalleryProps> = (props) => {
    const [galleryCounter, setGalleryCounter] = useState(0)

    function boundaryChecker() {
        if (galleryCounter > 6) {
            setGalleryCounter(galleryCounter-1);
        } else if (galleryCounter < 0) {
            setGalleryCounter(galleryCounter+1);
        } 
    }

    console.log(galleryCounter)
    boundaryChecker()

    return (
        <>
            <div className='heading'>
                <h1>Welcome to the Gallery!</h1>
                <h3>Feel free to peruse the highly sought after art pieces</h3>
            </div>
            <div className='gallery-scroll'>
                <button onClick={() => {
                    setGalleryCounter(galleryCounter-1);
                }}>Prev</button>
                {props.images.map((image, index) => {
                    if (galleryCounter === index) {
                        return <Image
                        width={500}
                        height={500}
                        src={`/../../../public/pictures/${image}`}
                        alt={image}
                    /> 
                    }                                    
                })}
                <button onClick={() => {
                    setGalleryCounter(galleryCounter+1);
                }}>Next</button>
            </div>
        </>
    )
}

export default Gallery;