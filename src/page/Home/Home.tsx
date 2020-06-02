import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Styled } from './styles'
import { FormControl, Button } from 'react-bootstrap'
import { ReactComponent as AddIcon } from './../../assets/svg/add-circle.svg'
import Card from '../../components/Card'
import './styles.scss'
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
      <div className="filter">
        <div className="filter__input-container">
          <FormControl placeholder="procure por cpf, senha, penumper ..." className="filter__input-field"/>
          {/* <input type="text"/> */}
        </div>

        <div className="filter__devices-button">
          <Button variant="outline-secondary">QR Code</Button>
          <Button variant="outline-danger">Mult Token ID</Button>
          <Button variant="outline-primary">Elevação</Button>
          <Button variant="outline-success">Token ID</Button>
          <Button variant="outline-info">SMS</Button>
        </div>
      </div>
      <div className="users">
          <div className="users__header">
            <div className="users__title">Usuário</div>
            <Button variant="dark" className="users__new-user-button">
              Novo
              <AddIcon />
            </Button>
          </div>

          <ul className="users__list-users">
            {users.map(user => (
              <li key={user.id} className="users__list-user-item mb-3">
                <Card {...user} />
              </li>
            ))}
          </ul>
        </div>
    </Styled.Container>
  )
}

export default Home;