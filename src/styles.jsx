import styled, {injectGlobal} from 'styled-components';
import { shadeBlend } from './style/helpers';

// global styling
injectGlobal`
    @font-face {
      font-family: 'Operator Mono';
      src: url('../fonts/Operator-Mono.ttf');
    }

    body {
        margin: 0;
        padding: 0;
        font-size: 16px;
    }
`;

//elements
export const Wrapper = styled.main`
`;

export const Heading = styled.h1`
    margin: 0;
    padding: 1em;
    color:  ${props => props.theme.color.secondary };
    background-color:  ${props => props.theme.color.primary };
    transition: all 1s;
`;

export const Welcome = styled.p`
    padding: 0 2em;
`;

export const Code = styled.code`
    background-color: #eff0f1;
    padding: 0 .5em;
    color: ${props => props.theme.color.special };
`;

export const Button = styled.button`
    float: right;
    padding: .5em;
    border-style: solid;
    border-width: 2px;
    border-color: ${props => shadeBlend(0.2, props.theme.color.primary)};
    background-color: ${props => shadeBlend(0.9, props.theme.color.primary)};
    color: black;
    font-size: 16px;
    cursor: pointer;
    &:hover{
        background-color: ${props => shadeBlend(0.8, props.theme.color.primary)};
    } 
`;