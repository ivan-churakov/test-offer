import * as React from 'react';
import styled, {keyframes} from "styled-components";

const Middle = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`
const loader = keyframes`
  0% {
    transform: scaleY(0.1);
    background: #ffffff00;
  }
  50% {
    transform: scaleY(1);
    background: yellowgreen;
  }
  100% {
    transform: scaleY(0.1);
    background: transparent;
  }
`
const Bar = styled.div<{num: number}>`
  width: 10px;
  height: 70px;
  background: #fff;
  display: inline-block;
  transform-origin: bottom center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  animation: ${loader} 1.2s linear infinite;
  animation-delay: ${props => props.num === 1 ? '0.1s': '0'};
  animation-delay: ${props => props.num === 2 ? '0.2s': '0'};
  animation-delay: ${props => props.num === 3 ? '0.3s': '0'};
  animation-delay: ${props => props.num === 4 ? '0.4s': '0'};
  animation-delay: ${props => props.num === 5 ? '0.5s': '0'};
  animation-delay: ${props => props.num === 6 ? '0.6s': '0'};
  animation-delay: ${props => props.num === 7 ? '0.7s': '0'};
  animation-delay: ${props => props.num === 8 ? '0.8s': '0'};
`

export const Loader = () => {
  return (
    <Middle>
      <Bar num={1}></Bar>
      <Bar num={2}></Bar>
      <Bar num={3}></Bar>
      <Bar num={4}></Bar>
      <Bar num={5}></Bar>
      <Bar num={6}></Bar>
      <Bar num={7}></Bar>
      <Bar num={8}></Bar>
    </Middle>
  );
};