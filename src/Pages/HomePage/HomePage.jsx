import React from 'react';
import BannerSlider from './BannerSlider/BannerSlider';
import Intro from './Intro/Intro';
import LatestBlogs from './LatestBlogs/LatestBlogs';

const HomePage = () => {
    return (
        <div >
        <Intro/>
            <BannerSlider />
            <LatestBlogs/>
        </div>
    );
};

export default HomePage;