
import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button';

describe('Button', () => {
    describe('Rendering', () => {
        it('should match to snapshot - Primary', () => {
            const component = shallow(<Button label="test label" primary />)
            expect(component).toMatchSnapshot("Primary button snapshot")
        });
        
        it('should match to snapshot - Secondary', () => {
            const component = shallow(<Button label="test label" primary={false} />)
            expect(component).toMatchSnapshot("Secondary button snapshot")
        });
    });
});