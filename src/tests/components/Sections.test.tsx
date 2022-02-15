import * as React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SectionView} from '../../components/Sections';

Enzyme.configure({adapter: new Adapter()});

describe('Section Component', () => {
  let props;

  beforeEach(() => {
    props = {
      index: '1',
      heading: 'mock heading',
      subHeading: 'mock sub heading',
      name: 'mock name',
      onSwitchClick: jest.fn(),
      isSwitchEnabled: false,
      navigation: {
        navigate: jest.fn(),
      },
      type: 'mock type',
    };
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('verify the section', () => {
    const component = shallow(<SectionView {...props} />);

    expect(component).toBeTruthy();
  });
});
