import React from 'react';
import Homeslider from '../common/homeslider';
import Nft from '../common/nft';

const slide_imgs = [
    "imgs/1.png", "imgs/2.png", "imgs/3.png"
]

const HomePage = () => (
    <div className="main">
        <div style={{display: 'block', height: '100%', margin: 'auto', width: '500px'}}>
            <Homeslider data={slide_imgs }></Homeslider>
        </div>
        <div style={{display: 'block', width: '260px', height: 'auto'}}>
            <Nft src="imgs/low.mp4" link="http://localhost:3000" type="mp4" title="OBLIQUITY - LAMALA HARRIS" name="SIMON WAN" /> 
            <Nft src="imgs/rip.mp4" link="http://localhost:3000" type="mp4" title="OBLIQUITY - LAMALA HARRIS" name="SIMON WAN" /> 
            <Nft src="imgs/nft.png" link="http://localhost:3000" type="img" title="I am Phillip" name="David Kaye" />
            <Nft src="imgs/heart.png" link="http://localhost:3000" type="img" title="I am Phillip" name="David Kaye" />
        </div>
    </div>
);

export { HomePage };