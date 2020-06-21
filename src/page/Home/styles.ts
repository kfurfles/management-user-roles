import styled from '@emotion/styled'
import { Button } from 'react-bootstrap'

const Container = styled.div`
  padding: 0 15px
`

const Home__Filter = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
`

const Home__Filter_Devices_Button = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
`

const Home__Filter_Input_Container = styled.div`
  margin-bottom: 32px
`

const Home__Filter_Button = styled(Button)`
  border-width: 2px;
  border-radius: 5px;
  margin-bottom: 8px;
`


/* INIT USERS */
const UserContainer = styled.div`
`

const User__Header = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const User__List_Users = styled.div`
  padding-left: 0;
  list-style: none;
`

const User__List_item = styled.li``

const User__Title = styled.div`
  font-size: 26px;
`

const User__New_User_Button = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg{
    margin-left: 12px;
  }
`

export const Styled = {
  Container,
  Home__Filter,
  Home__Filter_Input_Container,
  Home__Filter_Devices_Button,
  Home__Filter_Button,
  UserContainer,
  User__Header,
  User__Title,
  User__List_Users,
  User__List_item,
  User__New_User_Button
}