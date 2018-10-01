import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import nock from 'nock';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

describe('Weather App', () => {
  it('renders correctly', () => {
    expect(toJson(mount(<App />))).toMatchSnapshot();
  });

  describe('when given only zip code', () => {
    it('works', () => {
      const root = mount(<App />);
      const zipCodeForm = root.find('.zipcode-form');
      console.log(zipCodeForm)
      // zipCodeForm.props().value = 11228;
      // zipCodeForm.simulate('change', { target: { value: 11228 } });
      // zipCodeForm.simulate('submit');
      // expect(toJson(root)).toMatchSnapshot();
    })
  });
  // {"coord":{"lon":-74.02,"lat":40.69},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":68.58,"pressure":1026,"humidity":58,"temp_min":66.02,"temp_max":71.06},"visibility":16093,"wind":{"speed":8.05,"deg":160},"clouds":{"all":1},"dt":1538342100,"sys":{"type":1,"id":1969,"message":0.0045,"country":"US","sunrise":1538304750,"sunset":1538347098},"id":420025983,"name":"New York","cod":200}
})
