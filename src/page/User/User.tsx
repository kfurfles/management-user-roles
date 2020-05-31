import React from 'react';
import './styles.scss'
import { Styled } from './styles'
import { 
  FormLabel, 
  FormControl, 
  FormCheck,
  InputGroup,
  Button, 
  Form, 
  FormGroup } from 'react-bootstrap'
import { ReactComponent as LeftArrow} from './../../assets/svg/arrow-left.svg'
import { ReactComponent as CheckIcon } from './../../assets/svg/check-circle.svg'

const User: React.FC = () => {
  return <React.Fragment>
    <Styled.User__Overlay></Styled.User__Overlay>
    <Styled.User>
      <div className="user__header">
        <LeftArrow className="user__back-button" />
        <div className="user__identification">
          <div className="label">CPF: </div>
          <div className="cpf">378.741.258-19</div>
        </div>
      </div>

      <div className="user__last-modified">
        <div className="label">Ultima modificação:</div>
        <div className="name">Igor Abreu</div>
      </div>

      <div className="user__form-container">
        <div className="form-user">
          <FormGroup className="form-user__control-devices">
            <FormLabel>Dispositivos</FormLabel>

            <div className="form-user__devices">
              <FormCheck type="switch" id="qr" label="QR Code" />
              <FormCheck type="switch" id="token-id" label="Token ID" />
              <FormCheck type="switch" id="sms" label="SMS" />
              <FormCheck type="switch" id="multi-token" label="Mult Token" />
              <FormCheck type="switch" id="elevacao" label="Elevação" />
  
            </div>
          </FormGroup>

          <FormGroup className="form-user__control-devices">
            <FormLabel>CPF</FormLabel>
            <FormControl type="text" placeholder="ex: xxx.xxx.xxx-xx" />
          </FormGroup>

          <FormGroup className="form-user__control-devices">
            <FormLabel>Penumber</FormLabel>
            <FormControl type="text" placeholder="ex: 12389000" />
          </FormGroup>

          <FormGroup className="form-user__control-devices">
            <FormLabel>Senha</FormLabel>
            <FormControl type="text" placeholder="ex: 258369" />
          </FormGroup>

          <FormGroup className="form-user__control-devices">
            <FormLabel>Obersevações</FormLabel>
            <FormControl as="textarea" rows={3} />
          </FormGroup>

          <FormGroup className="form-user__control-devices">
            <FormLabel>Autenticadores QR Code</FormLabel>
            
            <InputGroup className="mb-3">
              <FormControl
                readOnly
                value="Bruna"
              />
              <InputGroup.Append>
                <Button variant="danger">X</Button>
              </InputGroup.Append>
            </InputGroup>
            
            <InputGroup className="mb-3">
              <FormControl
                readOnly
                value="Thiago"
              />
              <InputGroup.Append>
                <Button variant="danger">X</Button>
              </InputGroup.Append>
            </InputGroup>
            
            <InputGroup className="mb-3">
              <FormControl
                readOnly
                value="Gui"
              />
              <InputGroup.Append>
                <Button variant="danger">X</Button>
              </InputGroup.Append>
            </InputGroup>

            <FormGroup className="form-user__control-devices">
              <FormLabel>Novo Autenticador</FormLabel>
              <InputGroup className="mb-3">
              <FormControl
                readOnly
                value="Moizinho"
              />
              <InputGroup.Append>
                <Button variant="success">Adicionar</Button>
              </InputGroup.Append>
            </InputGroup>
            </FormGroup>

          </FormGroup>
        </div>
      </div>
      <div className="form-user__submit-container">
        <Button variant="light">Salvar Usuário <CheckIcon/> </Button>
      </div>
    </Styled.User>
  </React.Fragment>
}

export default User;