import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { Styled } from './styles'
import { FormControl, Button, Badge } from 'react-bootstrap'
import { ReactComponent as AddIcon } from './../../assets/svg/add-circle.svg'
import { ReactComponent as UpArrowIcon } from './../../assets/svg/arrow-up-right.svg'
import './styles.scss'
import { getUserList } from '../../modules/firebase/services';



const Home = () => {

  useEffect(() => {
    // getUserList().on('value', spanshot => {
    //   console.log(spanshot.val())
    // })
    
    getUserList().subscribe(r => {
      console.log({ r })
    })
    // setTimeout(() =>{
    //   getUserList().push({}).set({
    //     "cpf":"37874125819",
    //     "devices":[
    //       "QR_CODE",
    //       "TOKEN_ID",
    //       "SMS"
    //     ],
    //     "lastModification":"Moizinho",
    //     "observations":"another text",
    //     "password":"0-1289374",
    //     "penumber":"012v9n837",
    //     "qrAuthenticators":["João"]
    //   })
    // },3000)
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
            <li className="users__list-user-item">
              <div className="user-card">
                <div className="user-card__cpf-number">CPF: 378.741.258-19</div>
                <div className="user-card__devices">
                  <Badge className="user-card__device-item" variant="secondary">QR</Badge>
                  <Badge className="user-card__device-item" variant="danger">M-TOKEN</Badge>
                  <Badge className="user-card__device-item" variant="primary">ELEV</Badge>
                  <Badge className="user-card__device-item" variant="success">TOKEN</Badge>
                  <Badge className="user-card__device-item" variant="secondary">SMS</Badge>
                </div>

                <button className="user-card__go-to-user">
                  <UpArrowIcon />
                </button>
              </div>
            </li>
          </ul>
        </div>
    </Styled.Container>
  )
}

export default Home;