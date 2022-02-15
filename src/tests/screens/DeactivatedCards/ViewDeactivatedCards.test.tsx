import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DeactivatedCard from '../../../screens/DeactivatedCards/ViewDeactivedCards';

Enzyme.configure({ adapter: new Adapter() });

describe('Deactivated Cards Screen', () => {

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.resetAllMocks();
    });

    it('verify the screen', () => {
        const component = shallow(<DeactivatedCard />);

        expect(component).toBeTruthy();
    });
});
