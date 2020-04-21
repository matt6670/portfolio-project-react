import React from 'react';
import Homepage from '../Containers/Homepage';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

test('Does Info load', () => {
  const wrapper = shallow(<Homepage />)
  expect(wrapper.find(".infoDiv").length).toEqual(1);
});

test('Does skills load', () => {
    const wrapper = shallow(<Homepage />)
    expect(wrapper.find(".skillsDiv").length).toEqual(1);
  });

test('Does repo load', () => {
    const wrapper = mount(<Homepage />)
    expect(wrapper.find(".skillsSection").length).toEqual(1);
});




// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
