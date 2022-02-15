import * as React from 'react';
import * as ReactRedux from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Card } from '../../components/Card';

Enzyme.configure({ adapter: new Adapter() });

describe('Card Component', () => {

    let props;

    beforeEach(() => {
        props = {
            number: '5432 3456 5678 8769',
            name: 'Mark Henry',
            cvv: '324',
            startDate: '10/20',
        }
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.resetAllMocks();
    });

    it('verify the card', () => {

        const component = shallow(<Card {...props} />);

        expect(component).toBeTruthy();
    });

});