import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from "redux-mock-store";
import NewsItem from "./NewsItem";
import "../../setupTests";

it('should render correctly <NewsItem>', () => {
    const mockStore = configureStore();
    const store = mockStore({
        news: {
            title: "Mock Title",
            urlToImage: "www.google.com",
            description: "Mock Description",
            url: "bbc.com"
        },
        loading: false
    });
    const wrapper = mount(<Provider store={store}><NewsItem /></Provider>);

    expect(wrapper).toMatchSnapshot();
});