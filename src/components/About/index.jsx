import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://picsum.photos/id/123/1900/800',
    altText: 'Slide 1',
    caption: 'Hi my name is Oliver  Ready to embark on the journey of Software Engineer. I enjoy creating Websites and software applications to improve the end user experience. Very excited to be a part of UCF coding bootcamp. A catalyst with plenty of energy in learning HTML & CSS and Git, JavaScript & Web APIs, Node.js',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1900/800',
    altText: 'Slide 2',
    caption: ' With each project, I aim to understand how best to engage users for an impactful user experience while keeping stakeholder initiatives in mind. I practice fiscal responsibility to optimize business solutions and product outcomes.',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1900/800',
    altText: 'Slide 3',
    caption: 'When I’m not coordinating projects and promoting efficiency, I enjoy visiting beautiful islands like Punta Cana and Bora Bora, trying out new recipes, or honing my skills with new courses.',
    key: 3,
  },
];

function About(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default About;









