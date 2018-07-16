import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Application from './';

import PlayerPanel from '../components/PlayerPanel'

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe('Application', () => {
  const application = shallow(<Application />);
  
  it('Mounts', () => {
    expect(application.length).toEqual(1)
  })

  it('OpponentPanel is present', () => {
    expect(application.find('OpponentPanel').length).toEqual(1)
  })

  it('Heading is present', () => {
    const numHeadings = 3
    expect(application.find('Heading').length).toEqual(numHeadings)
  })

  it('ResultModal is NOT present start of match', () => {
    expect(application.find('ResultModal').length).toEqual(0)
  })

  it('ResultModal is present when end of match', () => {
    application.setState({score:{endMatch:true}})
    expect(application.find('ResultModal').length).toEqual(1)
  })

})