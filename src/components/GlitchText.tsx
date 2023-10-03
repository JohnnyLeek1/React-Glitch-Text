import React from 'react';
import styled, { keyframes } from 'styled-components';

interface GlitchTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    $text: string;

    $colorA?: string;
    $colorB?: string;
}

const blink = keyframes`
    87%, 95% {
        color: transparent;
    }
`;

const wobble = keyframes`
    0%, 84%, 94% {
        transform: skew(0deg);
    }
    85% {
        transform: skew(5deg);
    }
    90% {
        transform: skew(-5deg);
    }
    98% {
        transform: skew(3deg);
    }
`;

const leftShift = keyframes`
    0%, 87%, 100% {
        transform: translate(0, 0) skew(0deg);
    }
    84%, 90% {
        transform: translate(-8px, 0) skew(20deg);
    }
`;

const rightShift = keyframes`
    0%, 87%, 100% {
        transform: translate(0, 0) skew(0deg);
    }
    84%, 90% {
        transform: translate(8px, 0) skew(20deg);
    }
`

const GlitchTextWrapper = styled.span<GlitchTextProps>`
    z-index: 2;
    position: relative;
    animation: ${blink} 1.3s infinite steps(1);

    &:before,
    &:after {
        content: '${(props) => props.$text}';
        position: absolute;
        left: 0;
        mix-blend-mode: soft-light;
        animation: ${wobble} 2s infinite steps(2);
    }

    &:before {
        clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
        color: ${props => props.$colorA || '#f0f'};
        animation: ${rightShift} 200ms steps(2) infinite;
    }

    &:after {
        clip-path: polygon(0 100%, 100% 100%, 100% 50%, 0 50%);
        color: ${props => props.$colorB || '#0ff'};
        animation: ${leftShift} 200ms steps(2) infinite;
    }

`;

const GlitchText: React.FC<GlitchTextProps> = (props) => {
    return <GlitchTextWrapper {...props}>{props.$text}</GlitchTextWrapper>;
};

export default GlitchText;
