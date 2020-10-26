import React from 'react';
import styled from 'styled-components';


const StyledAttributes = styled.button`
   text-align: top;
   line-height: 20px;
   margin-right: 25px;
   font-size: 12px;
   fill: ${props => props.clicked ? 'black' : 'black'};
   color: ${props => props.clicked ? 'black' : '#757280'};
   font-weight: ${props => props.clicked ? 700 : 400};
   background-color: ${props => props.clicked ? '#d5d5d9' : 'transparent'};
   border: 0px;
   border-radius: 4px;
   outline: none;

   &:hover {
    background-color: #d5d5d5;
    transition: all .8s;
    cursor: pointer;

   }
`;

const StyledSpan = styled.span`
  display: block;
  margin-left:5px;
  position: relative;
  float: right;
  line-height: 24px;
`;



class Attribute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
      isClicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isClicked) {
      this.setState({isClicked: !this.state.isClicked, value: this.state.value - 1});
    } else {
      this.setState({isClicked: !this.state.isClicked, value: this.state.value + 1});
    }
  }


  render() {
    return (
      <StyledAttributes clicked={this.state.isClicked} onClick={() => this.handleClick()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d={this.props.iconKey}></path></svg>

        <StyledSpan >
          {"   " + this.props.text}
          <b>{this.state.value}</b>

        </StyledSpan>
      </StyledAttributes>

    );
  }

}

export default Attribute;