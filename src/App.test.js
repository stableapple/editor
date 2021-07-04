import React from 'react';
import { shallow, mount } from 'enzyme'
import App from './components/App';
import  HtmlEditor from './components/HTML';
import CssEditor from './components/CSS';
import JavascriptEditor from './components/Javascript';

it('shows a html editor',()=>{
    const wrapped=shallow(<App />);
    expect(wrapped.find(HtmlEditor).length).toEqual(1);
    
})
it('shows a css editor',()=>{
    const wrapped=shallow(<App />);
    expect(wrapped.find(CssEditor).length).toEqual(1);
    
})
it('shows a javascript editor',()=>{
    const wrapped=shallow(<App />);
    expect(wrapped.find(JavascriptEditor).length).toEqual(1);
    
})
it('shows button and textarea', () => {
    const wrapped=mount(<App />);
    expect(wrapped.find("button").length).toEqual(3);
})