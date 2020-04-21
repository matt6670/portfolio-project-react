import React from 'react';
import App from '../App';
import Enzyme, { shallow, render, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

test('Does homepage load', () => {
  const wrapper = mount(<App />)
  expect(wrapper.find(".App").length).toEqual(1);
});




// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
