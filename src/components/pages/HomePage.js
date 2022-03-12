import React from 'react';
import {Header} from '../Header/Header';
//import Homeslider from '../../components/common/homeslider';
//import Nft from '../../components/common/nft';
import "../../styles/components/homepage.scss";

// import Meme_vip_1 from "../../images/meme_vip_1.png";
// import Meme_vip_2 from "../../images/meme_vip_2.png";
// import Meme_vip_3 from "../../images/meme_vip_3.png";
// import Phillip from "../../images/phillip_image.png";

// const slide_imgs = [
//     Meme_vip_1, Meme_vip_2, Meme_vip_3
// ]

const HomePage = () => (
    <div className="main">
        <Header/>  
        <div className='slider-features'>
            home slider
        </div>  
        <div className='nft-content'>
            <div className='available-nfts-title'>Available NFTs</div>
            <div className='nfts'>  
                <div className='nft-column-1'>
                    Nft Area
                </div>
                <div className='nft-column-2'>
                    Nft Area
                </div>
                <div className='nft-column-3'>
                    Nft Area
                </div>
                <div className='nft-column-4'>
                    NFT Area
                </div>
            </div>
        </div> 
           
    </div>
);

export { HomePage };