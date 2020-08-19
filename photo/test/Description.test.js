import Description from '../client/src/components/Description.jsx';
import Enzyme, { shallow, render, mount } from 'enzyme';
import 'jest-styled-components';

const wrapper = mount(<Description data={
    [{
      Description: "Sumptuous estate with views of Hollywood",
      Location: "Hollywood, California, United States",
      Rating: 4.74,
      Superhost: 1,
      TotalReviews: 14,
      id: 65,
    }]
  }/>);

describe('Description Test Suite', () => {

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render correctly with props', () => {
    expect(wrapper).toMatchSnapshot();
  });

});