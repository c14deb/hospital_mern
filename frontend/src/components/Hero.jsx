import React from 'react'

const Hero = ({ title, imageUrl }) => {
  return (
    <div className='hero container'>
      <div className="banner">
        <h1>{title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis minima pariatur molestias laudantium iusto error eveniet blanditiis aliquam, iure modi quaerat, recusandae rem! Ullam asperiores, ipsa minus quod assumenda earum nostrum itaque voluptas mollitia saepe reiciendis placeat, nisi, dicta corrupti sint eaque praesentium cum commodi repellendus tempora non? Odio.</p>
      </div>

      <div className="banner">
        <img src={imageUrl} alt="hero" className='animated-image' />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>

    </div>
  )
}

export default Hero