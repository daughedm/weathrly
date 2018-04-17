import React from 'react';
import { shallow } from 'enzyme';
import SubmitForm from '../lib/SubmitForm';

describe('SubmitForm tests', () => {
  describe('Default state', () => {
    it('SubmitForm should have a default state of empty strings', () => {
      const renderedForm = shallow(<SubmitForm />);

      expect(renderedForm.state()).toEqual(expectation)
    })
  })
  describe('State Change', () => {
    it('should change state correctly when updateInput is called', () => {
      const renderedForm = shallow(<SubmitForm />);
      const expectation = { UserInput: 'some title', body: 'some body' };

      renderedForm.instance().updateInput({ target: { value: 'some title', name: 'title' } })
      renderedForm.instance().updateInput({ target: { value: 'some body', name: 'body' } })

      expect(renderedForm.state()).toEqual(expectation);
    })

    it('should allow me to submit a location, () => {
      const mockFunc = jest.fn();
      const mockPropFunc = jest.fn();
      const renderedForm = shallow(<SubmitForm submitIdea={mockPropFunc} />);
      const expectedPropArguments = { title: 'some title', body: 'some body' }

      renderedForm.setState({ title: 'some title', body: 'some body' })
      renderedForm.instance().sendIdeaToApp({ preventDefault: mockFunc })

      expect(mockFunc).toHaveBeenCalled();
      expect(mockPropFunc).toHaveBeenCalledWith(expectedPropArguments);
    })
  })
})