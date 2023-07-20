import React from 'react'
import dp from "/dp.jpg";
const Header = () => {
  return (
    <div>
        <div className="text-center p-10 ">
            <h1 className="text-5xl py-4 text-teal-700 font-medium">
            Soumya Prabha Maiti
            </h1>
            <p className="text-lg py-4">
            Hello everyone! Welcome to my website. My name is Soumya and I am a
            final year undergraduate student of Electronics and
            Tele-Communication Engineering at Jadavpur University.
            {/* I love to code and have a strong interest in AI/ML and Image processing. */}
            {/* Here, you will find a collection of my work, achievements, and skills.  */}
            </p>
        </div>
        <div className="mx-auto bg-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden">
            <img src={dp} alt="" />
        </div>
    </div>
  )
}

export default Header