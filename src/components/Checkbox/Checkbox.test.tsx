import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { expect } from '@jest/globals';
import { Checkbox } from './index';

describe('Checkbox render', () => {
  afterEach(cleanup);

  it('should render checkbox component', () => {
    const { getByTestId } = render(
      <Checkbox
        data-testid="TestCheckbox"
        label="Checkbox"
        onChange={() => {}}
      />
    );

    const checkbox = getByTestId('TestCheckbox');
    expect(checkbox).toBeTruthy();
  });

  it('should simulate click and expect mock to call', () => {
    const mock = jest.fn();

    const { getByTestId } = render(
      <Checkbox data-testid="TestCheckbox" onChange={mock} />
    );

    const checkbox = getByTestId('TestCheckbox');

    fireEvent.click(checkbox);
    expect(mock).toHaveBeenCalled();
  });
});
