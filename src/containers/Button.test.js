import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from "redux-mock-store";
import Button from "./Button";
import "../../setupTests";

it('should render correctly <Button> component', () => {
    const mockStore = configureStore();
    const store = mockStore({});
    const wrapper = mount(<Provider store={store}><Button /></Provider>);

    expect(wrapper).toMatchSnapshot();
});