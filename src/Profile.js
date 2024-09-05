import React from 'react';
import backgroundImg from './assets/background-login.jpg';
import profileImg from './assets/jero006.png';
import instagramIcon from './assets/instagram.png';
import facebookIcon from './assets/facebook.png';
import twitterIcon from './assets/twitter.png';

function Profile() {
  return (
    <div className="w-full h-screen bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="flex flex-col md:flex-row justify-between w-4/5 items-center relative">
        <div className="flex flex-col justify-center items-center mb-10 md:mb-0">
          <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden mb-5">
            <img src={profileImg} alt="Profile" className="w-full h-full" style={{filter:"drop-shadow(1px 1px 20px grey)"}} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-white text-center mb-10 md:mb-0">
          <h1 className="mb-5 text-xl md:text-3xl">Sebestin Jerald</h1>
          <h2 className="mb-10 text-lg md:text-2xl">Software Developer</h2>
          <div className="flex flex-col items-center">
            <button className="bg-transparent border-2 border-white text-white px-5 py-2 mt-2 cursor-pointer text-base md:text-lg w-48 text-center">ABOUT ME</button>
            <button className="bg-transparent border-2 border-white text-white px-5 py-2 mt-2 cursor-pointer text-base md:text-lg w-48 text-center">LOOKBOOK</button>
            <button className="bg-transparent border-2 border-white text-white px-5 py-2 mt-2 cursor-pointer text-base md:text-lg w-48 text-center">COLLABORATIONS</button>
            <button className="bg-transparent border-2 border-white text-white px-5 py-2 mt-2 cursor-pointer text-base md:text-lg w-48 text-center">WORK WITH ME</button>
          </div>
        </div>
        <div className="absolute flex flex-row gap-5 bottom-10 " style={{marginLeft:'10%',marginBottom:'-4%'}}>
          <img src={instagramIcon} alt="Instagram" className="w-8 h-8 cursor-pointer" />
          <img src={facebookIcon} alt="Facebook" className="w-8 h-8 cursor-pointer" />
          <img src={twitterIcon} alt="Twitter" className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
