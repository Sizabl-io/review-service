import React from 'react';
import styled from 'styled-components';



const MainRating = styled.div`
  width: 416px;
  height: 101px;
  padding: 24px;
  border: 1px solid #eeeeef;
  background-color: #f4f4f4;
  border-radius: 4px;
  position: relative;
  float: right;
  display: block;
  `;

const StarsDiv = styled.div`
   border-bottom: 1px solid #eeeeef;
   margin-bottom: 15px;
   height: 50px;
   padding-bottom: 15px;
   padding-left: 125px;
   display: block;
   position: relative;
  //  float: right;
  `;

const ReviewDiv = styled.div`
  text-align: center;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #2b273c;
`;

const StyledSpan = styled.span`
&:hover {
  text-decoration: underline;
  text-decoration-color: #00838f;
  cursor: pointer;
}
`;

const StyledList = styled.ul`
background: url(https://s3-media0.fl.yelpcdn.com/assets/public/selector_stars.yji-ec283fc1c019a74bcc6924bfb7b950a7.png) no-repeat;
background-size: 162px 180px;
display: inline-block;
vertical-align: middle;
width: 162px;
height: 30px;
background-position: 0 -${props => props.hoveredStar * 30}px;
margin-bottom: 10px;
padding-inline-start: 0px;

&:hover{
  cursor: pointer;

}

`;

const StyledListItem = styled.li`
  display: none;
  float: left;
  height: 32px;
  width: 32px;
  padding: 0;
  margin: 0;
  display: list-item;
    text-align: -webkit-match-parent;
  list-style: none;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
`;


class NewReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoveredStar: 0
    };
  }




  render() {

    return (

      <MainRating>
        <StarsDiv>
          <StyledList hoveredStar={this.state.hoveredStar}>
            <StyledListItem onMouseEnter={() => this.setState({hoveredStar: 1})} onMouseLeave={() => this.setState({hoveredStar: 0})}></StyledListItem>
            <StyledListItem onMouseEnter={() => this.setState({hoveredStar: 2})} onMouseLeave={() => this.setState({hoveredStar: 0})}></StyledListItem>
            <StyledListItem onMouseEnter={() => this.setState({hoveredStar: 3})} onMouseLeave={() => this.setState({hoveredStar: 0})}></StyledListItem>
            <StyledListItem onMouseEnter={() => this.setState({hoveredStar: 4})} onMouseLeave={() => this.setState({hoveredStar: 0})}></StyledListItem>
            <StyledListItem onMouseEnter={() => this.setState({hoveredStar: 5})} onMouseLeave={() => this.setState({hoveredStar: 0})}></StyledListItem>
          </StyledList>
        </StarsDiv>
        <ReviewDiv>
          <StyledSpan>Start your review</StyledSpan>
        </ReviewDiv>
      </MainRating>
    );
  }
}

export default NewReview;