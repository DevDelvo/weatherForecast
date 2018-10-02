import React from 'react';
import App from './App';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

describe('Weather App', () => {
  it('renders correctly', () => {
    expect(toJson(mount(<App />))).toMatchSnapshot();
  });
})