import * as React from 'react';
import { render } from '@testing-library/react';

import 'jest-canvas-mock';

import GlitchText from '../src';

describe('Common render', () => {
    it('renders without crashing', () => {
        render(<GlitchText $text='Glitchy' style={{ color: '#000' }} $colorA='#ffbe0b' $colorB='#8338ec' />);
    });
});
