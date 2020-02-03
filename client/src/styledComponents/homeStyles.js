import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url('https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80');
  backdrop-filter: brightness(60%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const NeonBtn = styled.a`
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  color: #2196f3;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 24px;
  overflow: hidden;
  transition: 0.2s;

  &:hover {
    background: #2196f3;
    box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
    transition-delay: 1s;
    color: #0D0B0B;
  }
`

export const NeonTop = styled.span`
  position: absolute;
  display: block;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #2196f3);

  &:hover {
    left: 100%;
    transition: 1s;
  }
`

export const NeonBottom = styled.span`
  position: absolute;
  display: block;
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #2196f3);

  &:hover {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
  }
`

export const NeonRight = styled.span`
  position: absolute;
  display: block;
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #2196f3);

  &:hover {
    right: 100%;
    transition: 1s;
    transition-delay: 0.25s;
  }
`

export const NeonLeft = styled.span`
  position: absolute;
  display: block;
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #2196f3);

  &:hover {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.25s;
  }
`