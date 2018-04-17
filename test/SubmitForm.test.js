import React from 'react';
import { shallow } from 'enzyme';
import SubmitForm from "../lib/SubmitForm";
import Trie from '../lib/Trie'

describe('App tests', () => {
  let renderedApp;

  window.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn()
  };

  beforeEach(() => {
    renderedApp = shallow(<SubmitForm />);
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it.skip('Should initially have set states userInput, prefixTrie, and suggestions', () => {
    expect(renderedApp.state()).toEqual(
      {
        userInput: '',
        prefixTrie: new Trie(),
        suggestions: []
      });
  });

  it('should render Suggestions component', () => {
    expect(renderedApp.find('Suggestions').length).toEqual(1);
  });

  describe('State Change', () => {
    it('should change state correctly when updateUserInput is called', () => {
      const expectation = 'ABC';

      renderedApp.instance().updateUserInput('ABC');

      expect(renderedApp.state()).toEqual(expectation);
    });
  });
});