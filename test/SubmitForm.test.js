import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import React from 'react';
import SubmitForm from "../lib/SubmitForm";
import Trie from '../lib/Trie';

describe('App tests', () => {
  let renderedApp;
  let props;

  beforeEach(() => {
    props = {
      compareUserInput: jest.fn(() => 'compareUserInput'),
      submitCity: jest.fn(() => 'submitCity')
    };
    renderedApp = shallow(<SubmitForm {...props}/>);
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it('should render Suggestions component', () => {
    expect(renderedApp.find('Suggestions').length).toEqual(1);
  });

  it.skip('Should initially have set states userInput, prefixTrie, and suggestions', () => {
    expect(renderedApp.state()).toEqual(
      {
        userInput: '',
        prefixTrie: new Trie(),
        suggestions: []
      });
  });

  it('should call props.submitCity on user click', () => {
    const compareUserInputSpy = jest.fn();
    const submitCitySpy = jest.fn();

    const submitForm = shallow(
      <SubmitForm className="rightForm"
                  compareUserInput = {compareUserInputSpy}
                  submitCity={submitCitySpy}
      />);

    submitForm.find('button').simulate('click');
    expect(submitCitySpy).toHaveBeenCalled();
  });

  it('should return suggestions based on user input', () => {
    const compareUserInputSpy = jest.fn();
    const submitCitySpy = jest.fn();
    const updateUserInputSpy = jest.fn();
    const expectation = ["Wichita, ks", "Wichita falls, tx"];


    const submitForm = shallow(
      <SubmitForm className="rightForm"
                  compareUserInput = {compareUserInputSpy}
                  submitCity={submitCitySpy}
      />);


    let mockEvent = {
      preventDefault : jest.fn(),
      // keyCode : 13,
      target : {
        value : 'Wich'
      }
    };

    submitForm.setState({ userInput: '' });
    renderedApp.instance().updateUserInput(mockEvent);
    expect(renderedApp.state('userInput')).toEqual(expectation);
  });

  // it.skip('should change state correctly when updateUserInput is called', () => {
  //   const mockEvent = {
  //     event.target.value(null)
  //   }
  //
  //   renderedApp.setState({
  //     userInput: ''
  //   });
  //
  //   renderedApp.instance().updateUserInput(mockEvent);
  //
  //   expect(renderedApp.state('userInput')).toEqual('Denver, CO');
  // });
});