import React from 'react';
import Repo from '../Components/Repo';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

test('Does homepage load', async() => {
  const wrapper = mount(<Repo />)
  
    await wrapper.instance().getRepoInfo()
    expect(wrapper.instance().state.avatarURL).toBe("asdasd");
});

