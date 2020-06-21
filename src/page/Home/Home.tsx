import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Styled } from './styles'
import { FormControl } from 'react-bootstrap'
import { ReactComponent as AddIcon } from './../../assets/svg/add-circle.svg'
import Card from '../../components/Card'
import { getUserList } from '../../modules/firebase/services';
import { IUser } from 'src/modules/firebase/typings/IUser';

const Home = () => {

  const [users, setUser] = useState<IUser[]>([])

  useEffect(() => {    
    getUserList().subscribe(userList => {
      setUser(userList)
    })
  },[])

  return (
    <Styled.Container>
      <Header />
      <Styled.Home__Filter>
        <Styled.Home__Filter_Input_Container>
          <FormControl placeholder="procure por cpf, senha, penumper ..." className="filter__input-field"/>
        </Styled.Home__Filter_Input_Container>

        <Styled.Home__Filter_Devices_Button>
          <Styled.Home__Filter_Button variant="outline-secondary">QR Code</Styled.Home__Filter_Button>
          <Styled.Home__Filter_Button variant="outline-danger">Mult Token ID</Styled.Home__Filter_Button>
          <Styled.Home__Filter_Button variant="outline-primary">Elevação</Styled.Home__Filter_Button>
          <Styled.Home__Filter_Button variant="outline-success">Token ID</Styled.Home__Filter_Button>
          <Styled.Home__Filter_Button variant="outline-info">SMS</Styled.Home__Filter_Button>
        </Styled.Home__Filter_Devices_Button>
      </Styled.Home__Filter>
      
      <Styled.UserContainer>
        <Styled.User__Header>
          <Styled.User__Title>Usuário</Styled.User__Title>
          <Styled.User__New_User_Button variant="dark">
            Novo
            <AddIcon />
          </Styled.User__New_User_Button>
        </Styled.User__Header>

        <Styled.User__List_Users>
          {users.map(user => (
            <Styled.User__List_item key={user.id} className="mb-3">
              <Card {...user} />
            </Styled.User__List_item>
          ))}
        </Styled.User__List_Users>
      </Styled.UserContainer>
    </Styled.Container>
  )
}

export default Home;