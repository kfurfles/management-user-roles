import styled from '@emotion/styled'
import FormUser from './../../components/FormUser'
import { Props } from './IProps'

import { colors } from './../../scss/theme/variables/colors'


const User = styled.form<Props>`
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
  transform: ${props => props.active ? 'translateY(0%)': 'translateY(100%)'};
  transition: transform 225ms linear
`
const Overlay = styled.div<Props>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.16);
  transition: opacity 225ms linear;
  ${(props) => {
    return {
      opacity: props.active ? 1: 0,
      visibility: props.active ? 'visible' : 'hidden'
    }
  }}
`

const User__Form = styled(FormUser)`
  max-height: 80vh;
  overflow-y: scroll;
  margin-bottom: calc(71px);
`

const User__Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

const User__Identification = styled.div`
  display: flex;
  margin-left: 15px;
  font-size: 26px;
`

const User__Identification_Text = styled.div`
  font-weight: bold;
  margin-left: 10px;
` 

const User__Last_Modified = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

const User__Last_Modified_Label = styled.div`
  font-size: 15px;
  text-decoration: underline;
`
const User__Last_Modified_Text = styled.div`
  font-size: 21px;
  font-weight: bold;
  margin-left: 8px;
`

const User__Submit_Container = styled.div`
  background: #5B66D2;
  display: flex;
  justify-content: center;
  padding: 15px;
  margin: 0 -15px;
  left: 15px;
  bottom: 0;
  z-index: 1000;
  position: absolute;
  width: 100%;

  button{
    color: #5B66D2;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 18px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg{
      margin-left: 16px;
    }

    &:active{
      color: #5B66D2 !important;
    }
  }
`

export const Styled = {
  User,
  User__Overlay: Overlay,
  User__Header,
  User__Identification,
  User__Identification_Text,
  User__Last_Modified,
  User__Last_Modified_Label,
  User__Last_Modified_Text,
  User__Submit_Container,
  User__Form
}