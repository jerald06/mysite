import React from 'react';
import { useMediaQuery } from 'react-responsive';
import backgroundImg from './assets/background-login.jpg';
import profileImg from './assets/jero006.png';
import instagramIcon from './assets/instagram.png';
import facebookIcon from './assets/facebook.png';
import twitterIcon from './assets/twitter.png';
function Profile() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: isMobile ? 'column' : 'row',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: isMobile ? 'center' : 'space-between',
        width: isMobile ? '100%' : '80%',
        alignItems: 'center',
        position: 'relative',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
          <div style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginBottom: '20px',
            marginLeft: '300px',
          }}>
            <img src={profileImg} alt="Profile" style={{ width: '100%', height: '100%' }} />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '20px',
          }}>
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          color: 'white',
          textAlign: 'center',
          marginTop: isMobile ? '20px' : '0',
          marginRight: '300px',
        }}>
          <h1 style={{ marginBottom: '20px' }}>Sebestin Jerald</h1>
          <h2 style={{ marginBottom: '40px' }}>Software Developer</h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <button style={buttonStyle}>ABOUT ME</button>
            <button style={buttonStyle}>LOOKBOOK</button>
            <button style={buttonStyle}>COLLABORATIONS</button>
            <button style={buttonStyle}>WORK WITH ME</button>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          gap: '25px',
          marginLeft: '30%',
          marginTop: '28%'
        }}>
          <img src={instagramIcon} alt="Instagram" style={iconStyle} />
          <img src={facebookIcon} alt="Facebook" style={iconStyle} />
          <img src={twitterIcon} alt="Twitter" style={iconStyle} />
        </div>
      </div>
    </div>
  );
}
const buttonStyle = {
  backgroundColor: 'transparent',
  border: '2px solid white',
  color: 'white',
  padding: '10px 20px',
  margin: '10px 0',
  cursor: 'pointer',
  fontSize: '16px',
  width: '200px',
  textAlign: 'center',
};
const iconStyle = {
  width: '30px',
  height: '30px',
  cursor: 'pointer',
};
export default Profile;