import MainPhotos from '../client/src/components/MainPhotos.jsx';
import Enzyme, { shallow, render, mount } from 'enzyme';
import 'jest-styled-components';

const wrapper = mount(<MainPhotos photos={
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

describe('MainPhotos Test Suite', () => {

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render correctly with props', () => {
    expect(wrapper).toMatchSnapshot();
  });

});