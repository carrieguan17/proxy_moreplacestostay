import LandingPage from '../client/src/components/LandingPage.jsx';
import Enzyme, { shallow, render, mount } from 'enzyme';
import 'jest-styled-components';

const wrapper = mount(<LandingPage data={
    [{
      Description: "Sumptuous estate with views of Hollywood",
      Location: "Hollywood, California, United States",
      Rating: 4.74,
      Superhost: 1,
      TotalReviews: 14,
      id: 65,
    }]
  }
    photos={
    [
      {
        PhotoURL: "https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/4bb58786-cf86-48ac-9203-cde18dd33b7e.jpg",
        PropertyID: 65,
        RoomID: 449,
        ShowOrder: 1,
        id: 1345
      },
      {
        PhotoURL: "https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/50ff73e3-9d7a-44f0-8014-c3eaf95e6029.jpg",
        PropertyID: 65,
        RoomID: 449,
        ShowOrder: 2,
        id: 1346
      },
      {
        PhotoURL: "https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/5e01ea9c-778d-4e44-823f-b0d55b9719ab.jpg",
        PropertyID: 65,
        RoomID: 449,
        ShowOrder: 3,
        id: 1347
      }
    ]
  }/>);

describe('LandingPage Test Suite', () => {

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render correctly with props', () => {
    expect(wrapper).toMatchSnapshot();
  });

});