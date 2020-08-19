import App from '../client/src/components/App.jsx';
import Enzyme, { shallow, render, mount } from 'enzyme';

const wrapper = shallow(<App />);

describe('App Test Suite', () => {

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render correctly with no props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should get property data during `componentDidMount()`', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getProperties');
    instance.componentDidMount();
    expect(instance.getProperties).toHaveBeenCalledTimes(1);
  });

  it('should get room data during `componentDidMount()`', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getRooms');
    instance.componentDidMount();
    expect(instance.getRooms).toHaveBeenCalledTimes(1);
  });

  it('should get photo data during `componentDidMount()`', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getPhotos');
    instance.componentDidMount();
    expect(instance.getPhotos).toHaveBeenCalledTimes(1);
  });

});