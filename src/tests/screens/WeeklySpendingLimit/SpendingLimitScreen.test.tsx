import * as React from 'react';
import * as ReactRedux from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SpendingLimit from '../../../screens/WeeklySpendingLimit/SpendingLimitScreen';

Enzyme.configure({ adapter: new Adapter() });

describe('Spending Limit Screen', () => {

    const mockDispatch = jest.fn();

    const mockDispatchState = jest.fn().mockReturnValue(mockDispatch);

    beforeEach(() => {

        mockDispatch.mockImplementation((callback) => callback({}));
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.resetAllMocks();
    });

    it('verify the screen', () => {
        jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(mockDispatchState);

        const component = shallow(<SpendingLimit />);

        expect(component).toBeTruthy();
    });

});