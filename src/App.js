import { useEffect, useState } from 'react';
import './App.css';
import video from './video.mp4';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
import icon5 from './icon5.png';
import icon6 from './icon6.png';
import { bounce, bounceInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components';


function App() {
  const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`}`;
  const BounceInLeft = styled.div`animation: 2s ${keyframes`${bounceInLeft}`}`;

  const [activity, setActivity] = useState('');

  useEffect(()=>{
    getActivity();
  },[])

  const getActivity = async() =>{
    const responce = await fetch('https://www.boredapi.com/api/activity/');
    const data = await responce.json();
    setActivity(data)
  }

  
  return (
    <div className="App">
      
      <div className="container">      
        <video autoPlay muted loop>      
          <source src={video} type="video/mp4" />      
        </video>      
        <BounceInLeft><h1>Do Something Good Today</h1></BounceInLeft>    
      </div>

      <div className="container icons">
        <img src={icon1} alt="icon" width='40px'/>
        <img src={icon2} alt="icon" width='40px'/>
        <img src={icon3} alt="icon" width='40px'/>
        <img src={icon4} alt="icon" width='40px'/>
        <img src={icon5} alt="icon" width='40px'/>
        <img src={icon6} alt="icon" width='40px'/>
      </div>

      <div className="container">
        <Bounce><p>• {activity.activity} •</p> </Bounce>
      </div>

      <div className="container">
      <button onClick={getActivity}>More Activities</button>
      </div>

    </div>
  );
}

export default App;
