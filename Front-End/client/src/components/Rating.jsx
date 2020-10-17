import React from 'react';
import styled from 'styled-components';


const StyledStars = styled.div`
width: 108px;
height: 20px;
background-position: 0 ${props => props.rating === 5 ? -500 : (-320 - (props.rating * 40))}px;
background-image: url('https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2@2x.yji-6fb03840141c3117356e128a78ab81e7.png');
background-size: 176px 680px;
display: inline-block;
overflow: hidden;
`;

let Rating = (props) => {

  return (
    <span>
      <StyledStars rating={props.rating}></StyledStars>
    </span>
  );

};

export default Rating;