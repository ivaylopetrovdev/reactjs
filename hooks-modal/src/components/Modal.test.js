import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Modal from './Modal';

afterEach(cleanup);

window.confirm = jest.fn(() => true);

const props = {
  company: {
    name: 'Test 1',
    budget: 2,
    budget_spent: 1
  },
  onClose: jest.fn(),
  onSubmit: jest.fn()
};

describe('Modal', () => {
  describe('should render component', () => {
    test('renders modal', () => {
      const { container } = render(<Modal {...props} />);
      expect(container).toBeInTheDocument();

      const modal = document.querySelector(".modal");

      expect(modal).toBeInTheDocument();
      expect(modal).toHaveAttribute('id', 'modal');
    });

    test('renders modal\'s header', () => {
      const { container } = render(<Modal {...props} />);
      expect(container).toBeInTheDocument();
      const modalHeader = document.querySelector("h2");

      expect(modalHeader).toBeInTheDocument();
      expect(modalHeader).toContainHTML('Company\'s Budget');
    });

    test('renders modal\'s body', () => {
      const { container } = render(<Modal {...props} />);
      expect(container).toBeInTheDocument();
      const modalBody = document.querySelector(".content");
      const modalBoxes = document.querySelector(".details-box");

      expect(modalBody).toBeInTheDocument();
      expect(modalBody).toContainHTML('<div class="details-wrapper">');

      expect(modalBoxes.children.length).toBe(2);
      expect(modalBoxes).toContainHTML(`<div class="info">${props.company.name}</div>`);
    });

    describe('should handle component\'s interactions', () => {
      test('handle input change', () => {
        const { container } = render(<Modal {...props} />);
        expect(container).toBeInTheDocument();

        let newValue = 12;
        const inputElement = document.querySelector("input");
        expect(inputElement.value).toBe(`${props.company.budget}.00`);

        fireEvent.change(inputElement, { target: { value: newValue }});
        expect(inputElement.value).toBe(`${newValue}.00`);
      });

      test('handle submit button click', () => {
        const { container, getByText } = render(<Modal {...props} />);
        expect(container).toBeInTheDocument();
        const submitButton = document.querySelector(".submit");
        expect(submitButton).toBeInTheDocument();

        fireEvent.click(getByText('submit'));
        expect(window.confirm).toBeCalled();
        expect(props.onSubmit).toHaveBeenCalled();
        expect(props.onClose).toHaveBeenCalled();
      });

      test('handle close button click', () => {
        const { container, getByText } = render(<Modal {...props} />);
        expect(container).toBeInTheDocument();

        const closeButton = document.querySelector(".toggle-button");
        expect(closeButton).toBeInTheDocument();

        fireEvent.click(getByText('close'));
        expect(props.onClose).toHaveBeenCalled();
      });
    });
  });
});
