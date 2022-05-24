import React from 'react';
import { expect } from '@jest/globals';
import { cleanup, render } from '@testing-library/react';
import { Indicator } from './index';

describe('Indicator render', () => {
  afterEach(cleanup);
  it('should render indicator component', () => {
    const { getByTestId } = render(
      <Indicator data-testid="TestIndicator" type="internal" description="" />
    );

    const indicator = getByTestId('TestIndicator');
    expect(indicator).toBeTruthy();
  });

  it('should render indicator with right type', () => {
    const { getByTestId } = render(
      <Indicator data-testid="TestIndicator" type="full" />
    );

    const indicator = getByTestId('TestIndicator');
    expect(indicator.querySelector('img').height).toEqual(68);
    expect(indicator.querySelector('img').width).toEqual(68);
    expect(indicator.querySelector('p').getAttribute('class')).toContain(
      'chakra-text'
    );
  });

  it('should render indicator with description', () => {
    const { getByTestId } = render(
      <Indicator
        data-testid="TestIndicator"
        type="internal"
        description="The page is loading..."
      />
    );

    const indicator = getByTestId('TestIndicator');
    expect(indicator.querySelector('p').innerHTML).toEqual(
      'The page is loading...'
    );
  });

  it('should render indicator without description', () => {
    const { getByTestId } = render(
      <Indicator
        data-testid="TestIndicator"
        type="internal"
        description="    "
      />
    );

    const indicator = getByTestId('TestIndicator');
    expect(indicator.querySelector('p')).toBeNull();
  });
});
