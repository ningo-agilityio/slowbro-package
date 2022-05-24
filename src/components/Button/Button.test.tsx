import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { expect } from '@jest/globals';
import { Button } from './index';

describe('Button render', () => {
  afterEach(cleanup);

  it('should render button component', () => {
    const { getByTestId } = render(
      <Button data-testid="TestButton" label="Button" onClick={() => {}} />
    );

    const button = getByTestId('TestButton');
    expect(button).toBeTruthy();
  });

  it('should simulate click and expect mock to call', () => {
    const mock = jest.fn();
    const { getByTestId } = render(
      <Button data-testid="TestButton" label="Button" onClick={mock} />
    );

    const button = getByTestId('TestButton');

    fireEvent.click(button);
    expect(mock).toHaveBeenCalled();
  });

  it('should render with class chakra-button', () => {
    const { container } = render(
      <Button size="default" label="Button" data-testid="TestButton" />
    );

    const button = container.querySelector('.chakra-button');
    expect(button).toBeTruthy();
  });
});
