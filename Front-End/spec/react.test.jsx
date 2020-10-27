import React from 'react';
import { mount, shallow } from 'enzyme';
import Review from '../client/src/components/Review.jsx';
import Photos from '../client/src/components/Photos.jsx';
import Attribute from '../client/src/components/Attribute.jsx';
import axios from 'axios';
import 'jest-styled-components';

let reviewData = {
  productId: 10,
  userName: 'Jorge R.',
  userAvatar: 'null',
  userLocation: 'Seattle, WA',
  userFriends: 5,
  userReviews: 6,
  userPhotos: 7,
  userEliteStatus: 10,
  reviewRating: 4,
  reviewBody: 'test lorem ipsum',
  reviewDate: '2020-07-05',
  reviewPhotos: 4,
  atrCool: 2,
  atrUseful: 1,
  atrFunny: 2,
  displayPhotos: ['cat.png', 'dog.png', 'bull.png']
};




describe('<Review />', () => {
  it(' exists', () => {
    const wrapper = mount(<Review review={reviewData} />);
    expect(wrapper.find('span')).toExist();
    expect(wrapper.find('Rating')).toExist();
  });
});



describe('<Photos />', () => {
  it(' exists', () => {
    const wrapper = mount(<Photos photos={reviewData.displayPhotos} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('img')).toExist();
    expect(wrapper.find('span')).not.toExist();

  });
});


describe('<Attribute />', () => {
  it(' exists', () => {
    const attribute = mount(<Attribute text={'text'} iconKey={'test'} value={reviewData.atrCool} />);

    expect(attribute).toMatchSnapshot();
    expect(attribute.find('svg')).toExist();
    expect(attribute.find('img')).not.toExist();
    expect(attribute).toHaveProp('value');

  });
});