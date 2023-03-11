import React from 'react'

const Offer = () => {
    return (
        <div className='w-full md:h-[100vh] md:w-[100%]'>
            <video autoPlay muted loop id="myVideo" className='w-full h-full'>
                <source src="https://res.cloudinary.com/dsuh9ww6d/video/upload/v1678499336/Pexels_Videos_2113326_xskl6p.mp4" type="video/mp4" />
            </video>

            <div className='w-full md:max-w-[80%] mx-auto  md:bottom-60 relative bg-black/50 p-10'>
                <h1 className='text-white text-3xl lg:text-6xl font-semibold'>Looking  for a best place?</h1>

                <p className='text-white mt-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam alias ab qui quia? Ipsam sit accusantium id cumque, animi libero asperiores esse,
                    soluta necessitatibus autem porro officia architecto, culpa molestiae?</p>
            </div>

        </div>
    )
}

export default Offer