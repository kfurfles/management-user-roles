import React from 'react';
import { Styled } from './styles'
import { 
  FormLabel, 
  FormControl, 
  FormCheck,
  InputGroup,
  Button, 
  FormGroup } from 'react-bootstrap'

interface Props {
  className?: string
}

const User: React.FC<Props> = ({ className }) => {
  return <React.Fragment>
    <Styled.FormUser className={className}>
      <Styled.FormUser__Container>
        <div>
          <FormGroup className="form-user__control-devices">
            <FormLabel>Dispositivos</FormLabel>

            <Styled.FormUser__Form_Devices_Container>
              <FormCheck type="switch" id="qr" label="QR Code" />
              <FormCheck type="switch" id="token-id" label="Token ID" />
              <FormCheck type="switch" id="sms" label="SMS" />
              <FormCheck type="switch" id="multi-token" label="Mult Token" />
              <FormCheck type="switch" id="elevacao" label="Elevação" />
  
            </Styled.FormUser__Form_Devices_Container>
          </FormGroup>

          <FormGroup className="form-user__control-devices">
            <FormLabel>CPF</FormLabel>
            <FormControl required type="text" placeholder="ex: xxx.xxx.xxx-xx" />
          </FormGroup>

          <FormGroup className="form-user__control-devices">
            <FormLabel>Penumber</FormLabel>
            <FormControl type="text" placeholder="ex: 12389000" />
          </FormGroup>

          <FormGroup className="form-user__control-devices">
            <FormLabel>Senha</FormLabel>
            <FormControl required type="text" placeholder="ex: 258369" />
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
      </Styled.FormUser__Container>
    </Styled.FormUser>
  </React.Fragment>
}

User.defaultProps = {
  className: ''
}

export default User;