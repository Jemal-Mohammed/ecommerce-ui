import React from 'react';
import Carousel from 'better-react-carousel';
import '/src/css/slider.css'
export const Slider = () => {
  return (
    <>
    <Carousel cols={4} rows={1} gap={10} loop>
      <Carousel.Item className='slider-item'>
        <div className='slider'>
          <img width="100%" src="https://picsum.photos/800/600?random=1" />
          <div className="content">
            <h2>Image 1</h2>
            <p>Content for Image 1</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='slider-item'>
        <div className='slider'>
          <img width="100%" src="https://picsum.photos/800/600?random=2" />
          <div className="content">
            <h2>Image 2</h2>
            <p>Content for Image 2</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='slider-item'>
        <div className='slider'>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
          <div className="content">
            <h2>Image 3</h2>
            <p>Content for Image 3</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='slider-item'>
        <div className='slider'>
          <img width="100%" src="https://picsum.photos/800/600?random=4" />
          <div className="content">
            <h2>Image 4</h2>
            <p>Content for Image 4</p>
          </div>
        </div>
      </Carousel.Item>
 
    
      <Carousel.Item className='slider-item'>
        <div className='slider'>
          <img width="100%" src="https://picsum.photos/800/600?random=1" />
          <div className="content">
            <h2>Image 1</h2>
            <p>Content for Image 1</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='slider-item'>
        <div className='slider'>
          <img width="100%" src="https://picsum.photos/800/600?random=2" />
          <div className="content">
            <h2>Image 2</h2>
            <p>Content for Image 2</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='slider-item'>
        <div className='slider'>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
          <div className="content">
            <h2>Image 3</h2>
            <p>Content for Image 3</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='slider-item'>
        <div className='slider'>
          <img width="100%" src="https://picsum.photos/800/600?random=4" />
          <div className="content">
            <h2>Image 4</h2>
            <p>Content for Image 4</p>
          </div>
        </div>
      </Carousel.Item>
 
    </Carousel>

    </>
    
  );
};
