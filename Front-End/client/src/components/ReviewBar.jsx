import React from 'react';
import styled from 'styled-components';
import icons from '../iconKeys.js';
import NewReview from './NewReview.jsx';

const StyledBar = styled.div`
  width: 715px;
  height: 300px;
  padding-top: 32px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eeeeef;
  border-top: 1px solid #eeeeef;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;

`;

const StyledHeader = styled.h4`
  font-size: 20px;
  line-height: 26px;
  color: #2b273c;
  font-weight: 700;

  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-bottom: 15px;
`;


const StyledForm = styled.form`
  padding-bottom: 25px;
  margin-right:25px;
`;

const StyledSearch = styled.input`
  outline: none;
  height: 22px;
  width: 252px;
  padding: 13px 16px;
  border-radius: 4px 0px 0px 4px;
  position: relative;
  float: left;
  border: 2px solid #eeeeef;
  border-right: 0px;
  border-collapse: collapse;

`;

const StyledButton = styled.button`
  height: 52px;
  width: 50px;
  background-color: #f43a3a;
  border-radius: 0px 4px 4px 0px;
  border-color: #eeeeef;
  border-collapse: collapse;
  border: 0;
  position: relative;
  float: left;
  outline: none;
  &:hover {
    cursor: pointer;

   }
   border-top: 0px;
   border-left: 0px;
`;

const FakeImage = styled.img`
   margin-right: 50px;
   position: relative;
   float: left;

`;

const SearchDiv = styled.div`
  font-weight: 700;
  padding-bottom: 20px;

`;

const StyledClearButton = styled.button`
   font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
   margin-left: 5px;
   color: #757280;
   border: 1px solid #ccc;;
   display: inline-block;
   padding: 7px;
   border-radius: 3px;
   font-size: 12px;
   line-height: 18px;
   background: transparent;
   box-shadow: none;
   transition: all .3s;
   &:hover {
     color: black;
     cursor: pointer;
     liner-gradient:
   }
`;

class ReviewBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      isSearched: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.onClear = this.onClear.bind(this);

  }

  handleClick(e) {
    e.preventDefault();
    this.props.searchReviews(this.state.value);
    this.setState({ isSearched: true });
  }

  onClear(e) {
    e.preventDefault();
    this.props.searchReviews('');
    this.setState({isSearched: false, value: ''});
  }

  searchOn() {
    if (this.state.isSearched) {
      return (
        <SearchDiv>{this.props.reviewsCount} reviews mentioning "{this.state.value}"<StyledClearButton onClick={(e) => this.onClear(e)}>Clear Results <b>X</b></StyledClearButton></SearchDiv>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <StyledBar>
        <StyledHeader>
          Recommended Reviews
        </StyledHeader>
        <StyledForm>
          <StyledSearch onChange={(e) => this.setState({ value: e.target.value })} value={this.state.value} type='text' placeholder='Search within reviews' ></StyledSearch>
          <StyledButton onClick={(e) => this.handleClick(e)}><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d={icons.searchIcon}></path></svg></span></StyledButton>
          <img src='https://yelpratingsstars.s3-us-west-1.amazonaws.com/fakeSort.png' width="350" height="45" ></img>
        </StyledForm>
        {this.searchOn()}
        <FakeImage src='https://yelpratingsstars.s3-us-west-1.amazonaws.com/fakeProfile.png' width="148" height="68"></FakeImage>

        <NewReview />
      </StyledBar>
    );
  }
}

export default ReviewBar;