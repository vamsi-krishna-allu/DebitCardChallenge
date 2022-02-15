import * as React from 'react';
import * as ReactRedux from 'react-redux';
import DebitCardScreen from '../../../screens/DebitCard/DebitCardScreen';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('../../../constants');

Enzyme.configure({ adapter: new Adapter() });

describe('Debit Cards Screen', () => {
  let props;

  const mockEffect = jest.fn();

  const mockSelectorState = jest.fn();

  const mockDispatch = jest.fn();

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

    global.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        json: () => Promise.resolve({}),
      });
    });

    mockEffect.mockImplementation(callback => callback({}));
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('verify the screen', () => {
    jest.spyOn(React, 'useEffect').mockImplementation(mockEffect);
    jest.spyOn(ReactRedux, 'useSelector').mockImplementation(mockSelectorState);
    jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(mockDispatchState);


    const component = shallow(<DebitCardScreen {...props} />);

    expect(component).toBeTruthy();
  });
});
