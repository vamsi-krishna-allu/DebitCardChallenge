import * as React from 'react';
import * as ReactRedux from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewCard from '../../../screens/NewCard/GetNewCardScreen';

Enzyme.configure({ adapter: new Adapter() });

describe('New Card Screen', () => {
    let props;

    const mockDispatch = jest.fn();

    const mockSelectorState = jest.fn();

    const mockDispatchState = jest.fn().mockReturnValue(mockDispatch);

    beforeEach(() => {

        props = {
            navigation: {
                navigate: jest.fn(),
            },
        };

        mockDispatch.mockImplementation(callback => callback({}));
        mockSelectorState.mockImplementation(callback =>
            callback({
                spendingLimit: '5000',
                cardDetails: {
                    id: 1,
                    cardNumber: '',
                    cardOwnerName: '',
                    cvv: '',
                    startDate: '',
                    amountSpent: 0,
                    availableBalance: 0,
                }
            }),
        );
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.resetAllMocks();
    });

    it('verify the screen', () => {
        jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(mockDispatchState);
        jest.spyOn(ReactRedux, 'useSelector').mockImplementation(mockSelectorState);

        const component = shallow(<NewCard {...props} />);

        expect(component).toBeTruthy();
    });
});
