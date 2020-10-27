import React from 'react';
import styled from 'styled-components';
import Rating from './Rating';
import Photos from './Photos';
import Atribute from './Attribute';
import icons from '../iconKeys.js';


const StyledReview = styled.div`
  display: flex;
  color: black;
  border-bottom: 1px solid #eeeeef;
  width: 715px;
  padding: 20px;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
`;

const StyledImg = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 10px;
  border-radius: 4px;
  position: relative;
  float: left;
`;


const UserDiv = styled.div`
  width: 33.333%;
`;

const ReviewDiv = styled.div`
  width: 66.666%;
  color: #2b273c;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const StyledUserInfo = styled.div`
  display: inline;
  position: relative;
  float: left;
  font-size: 12px;
  line-height: 22px;
  color: #2b273c;

`;

const StyledUser = styled.div`
  color: #00838f;
  &:hover {
    text-decoration:underline;

  };
  font-weight: 700;
  font-size: 14px;
`;

const StyledLocation = styled.div`
  line-height: 18px;
  font-weight: 700;
  text-align: left;
`;

const StyledIcon = styled.div`
  fill: rgba(241,92,0,1);
  height: 18px;
  `;

const StyledSpan = styled.span`
  vertical-align: text-bottom;
`;


const DateSpan = styled.span`
  color: #757280;
`;

const PhotosDiv = styled.div`
   color: #00838f;
   &:hover {
    text-decoration:underline;
   };
   margin-bottom: 20px;
`;


const Review = (props) => {

  let displayDate = () => {
    let date = new Date(props.review.reviewDate);
    return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
  };



  return (
    <StyledReview>
      <UserDiv>
        <StyledImg src={props.review.userAvatar}></StyledImg>
        <StyledUserInfo>
          <StyledUser>{props.review.userName}</StyledUser>
          <StyledLocation>{props.review.userLocation}</StyledLocation>
          <StyledIcon ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><g><path d={icons.friendsIcon1}></path><path d={icons.friendsIcon2} opacity=".502"></path></g></svg><StyledSpan ><b>{" " + props.review.userFriends}</b> friends</StyledSpan></StyledIcon>

          <StyledIcon ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" ><path d={icons.reviewsIcon}></path></svg><StyledSpan><b>{" " + props.review.userReviews}</b> reviews</StyledSpan></StyledIcon>

          <StyledIcon ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d={icons.photosIcon1}></path></svg><StyledSpan><b>{" " + props.review.userPhotos}</b> photos</StyledSpan></StyledIcon>
        </StyledUserInfo>
      </UserDiv>
      <ReviewDiv>
        <div>
          <Rating rating={props.review.reviewRating} />
          <DateSpan>{" " + displayDate()}</DateSpan>
        </div>
        <PhotosDiv>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d={icons.photosIcon2}></path></svg>
          <StyledSpan>
            {" " + props.review.reviewPhotos + " photos"}
          </StyledSpan>
        </PhotosDiv>
        <div>{props.review.reviewBody}</div>
        <br />
        <Photos photos={props.review.displayPhotos} />
        <div>
          <Atribute text={' Useful '} value={props.review.atrUseful} iconKey={icons.usefulIcon}/>
          <Atribute text={' Funny '}value={props.review.atrFunny}iconKey={icons.funnyIcon}/>
          <Atribute text={' Cool '}value={props.review.atrCool}iconKey={icons.coolIcon}/>
        </div>
      </ReviewDiv>
    </StyledReview>
  );
};

export default Review;

