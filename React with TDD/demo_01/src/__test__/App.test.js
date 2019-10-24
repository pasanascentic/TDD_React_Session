import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

let app = shallow(<App debug />);

describe('App', () => {
    it('Should render correctly in `debug`', () => {
        expect(app).toMatchSnapshot();
    });

    it('Init the `state` with default values', () => {
        expect(app.state().todos).toEqual([]);
    });

    describe('When clicking the `add todo` button,', () => {
        beforeEach(() => {
            app.find('.add-btn').simulate('click');
        });

        afterEach(() => {
            app.setState({ todos: [] });
        });

        it('A todo item should add to todos array in the state', () => {
            expect(app.state().todos).toEqual([{ id: 1 }]);
        });
    
        it('Add todo item to todos list in view', () => {
            expect(app.find('.todos').children().length).toEqual(1);
        });

        it('Add another todo item to todos state', () => {
            app.find('.add-btn').simulate('click');

            expect(app.state().todos.length).toEqual(2);
        });
    });
});