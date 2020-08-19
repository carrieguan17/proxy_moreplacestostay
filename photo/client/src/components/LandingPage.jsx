import React from 'react';
import Description from './Description.jsx';
import MainPhotos from './MainPhotos.jsx';

function LandingPage(props) {
  return (
    <div>
      <Description data={props.data} share={props.share}/>
      <MainPhotos photos={props.photos} click={props.click}/>
    </div>
  )
}

export default LandingPage;