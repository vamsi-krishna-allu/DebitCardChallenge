import * as React from 'react';
import * as ReactRedux from 'react-redux';
import DebitCardScreen from '../../../screens/DebitCard/DebitCardScreen';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('Debit Cards Screen', () => {
  let props;

  const mockEffect = jest.fn();

  const mockSelectorState = jest.fn();

  beforeEach(() => {
    props = {
      navigation: {
        navigate: jest.fn(),
      },
    };

    mockSelectorState.mockImplementation(callback =>
      callback({
        spendingLimit: '5000',
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

    const component = shallow(<DebitCardScreen {...props} />);

    expect(component).toBeTruthy();
  });
});
