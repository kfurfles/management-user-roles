import styled from '@emotion/styled'
import { 
  FormLabel, 
  FormControl, 
  FormCheck,
  InputGroup,
  Button, 
  FormGroup } from 'react-bootstrap'
// import styled, { StyledFunction } from "styled-components"

const FormUser = styled.div`
  padding: 0px;
  border-bottom: none;
  height: calc(80vh);
  background: #fff;
  display: flex;
  flex-flow: column nowrap;
`

const FormUserContainer = styled.div`
  position: relative;
  flex: 1 1;
`

const FormUserFormFieldDevices = styled.div`
  display: flex;
  flex-flow: row wrap;

  .custom-control{
    margin-right: 16px
  }
`

export const Styled = {
  FormUser,
  FormUser__Container: FormUserContainer,
  FormUser__Form_Devices_Container: FormUserFormFieldDevices
}