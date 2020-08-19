import React from 'react';
import { shallow } from 'enzyme';

// Components
import Guest from '../Guest';


describe('Guest Test Suite', () => {
    it('should render correctly with no props', () => {
        const component = shallow(<Guest/>);
        expect(component).toMatchSnapshot();
        });
        it('should render each person category correctly with given props', () => {
        const adult = 5;
        const component = shallow(<Guest adult={adult} />);
        expect(component).toMatchSnapshot();
})
});