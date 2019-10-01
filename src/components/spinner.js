import React from 'react'
import styled from '@emotion/styled'

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary.colors.darkestBlue};

  svg {
    width: 80%;
    max-width: 600px;
    height: 80vw;
    max-height: 600px;

    @keyframes rotate {
      0%   {transform: rotate(0deg);}
      25%  {transform: rotate(90deg);}
      50%  {transform: rotate(180deg);}
      100% {transform: rotate(360deg);}
    }

    circle {
      fill: transparent;
      stroke: ${props => props.theme.primary.colors.accentBlue};
      cx: 50%;
      cy: 50%;
      transform-origin: 50% 50%;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      opacity: .25;
    }

    #circle-1 {
      fill: ${props => props.theme.primary.colors.primaryBlue};
      r: 8px;
      stroke-width: 15px;
      stroke-dasharray: 1,1;
      opacity: .75;
    }

    #circle-2 {
      r: 20px;
      stroke-dasharray: 30px 11px;
      stroke-dashoffset: 4px;
      stroke-width: 5px;
      animation-name: rotate;
      animation-duration: 10s;
    }

    #circle-3 {
      r: 25px;
      stroke-width: 30px;
      stroke-dasharray: 1,25;
    }

    #circle-4 {
      stroke: ${props => props.theme.primary.colors.primaryBlue};
      r: 45px;
      stroke-width: 2px;
    }

    #circle-5 {
      stroke: ${props => props.theme.primary.colors.primaryBlue};
      r: 60px;
      stroke-dasharray: 30,7.5;
      stroke-dashoffset: 16px;
      stroke-width: 12px;
      opacity: .65;
      animation-name: rotate;
      animation-duration: 20s;
      animation-direction: alternate-reverse;
    }

    #circle-6 {
      r: 90px;
      stroke-width: 2px;
    }

    #circle-7 {
      r: 90px;
      stroke-dasharray: 30,160;
      stroke-dashoffset: 163px;
      stroke-width: 5px;
      animation-name: rotate;
      animation-duration: 5s;
      animation-direction: alternate;
    }

    #circle-8 {
      r: 49%;
      stroke-dasharray: 15.3%;
      stroke-width: 5px;
    }
  }
`

const Spinner = () => (
  <SpinnerWrapper>
    <svg>
      <circle id="circle-1" />
      <circle id="circle-2" />
      <circle id="circle-3" />
      <circle id="circle-4" />
      <circle id="circle-5" />
      <circle id="circle-6" />
      <circle id="circle-7" />
      {/* <circle id="circle-8" /> */}
    </svg>
  </SpinnerWrapper>
)

export default Spinner
