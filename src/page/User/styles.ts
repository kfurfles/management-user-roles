import styled from '@emotion/styled'
import { colors } from './../../scss/theme/variables/colors'

const User = styled.form`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px 15px 0px 15px;
  border: 1px solid ${colors.purple};
  border-bottom: none;
  border-radius: 25px 25px 0px 0px;
  height: calc(80vh);
  z-index: 1010;
  background: #fff;
  display: flex;
  flex-flow: column nowrap;
`
const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.16)
`

export const Styled = {
  User,
  User__Overlay: Overlay
}