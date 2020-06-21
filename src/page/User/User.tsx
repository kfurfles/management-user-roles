import React from 'react';
import { Styled } from './styles'
import { Button } from 'react-bootstrap'
import { Props } from './IProps'
import PropTypes from 'prop-types'

import { ReactComponent as LeftArrow} from './../../assets/svg/arrow-left.svg'
import { ReactComponent as CheckIcon } from './../../assets/svg/check-circle.svg'

const User: React.FC<Props> = (props) => {
  const {
    onClose
  } = props

  return <React.Fragment>
    <Styled.User__Overlay onClick={() => onClose()} {...props}></Styled.User__Overlay>
    <Styled.User {...props}>
      <Styled.User__Header>
        <LeftArrow/>
        <Styled.User__Identification>
          <div>CPF: </div>
          <Styled.User__Identification_Text>378.741.258-19</Styled.User__Identification_Text>
        </Styled.User__Identification>
      </Styled.User__Header>

      <Styled.User__Last_Modified>
        <Styled.User__Last_Modified_Label>Ultima modificação:</Styled.User__Last_Modified_Label>
        <Styled.User__Last_Modified_Text>Igor Abreu</Styled.User__Last_Modified_Text>
      </Styled.User__Last_Modified>

      <Styled.User__Form />
      
      <Styled.User__Submit_Container>
        <Button type="submit" variant="light">Salvar Usuário <CheckIcon/> </Button>
      </Styled.User__Submit_Container>
    </Styled.User>
  </React.Fragment>
}

User.propTypes = {
  onClose: PropTypes.func.isRequired
}

User.defaultProps = {
  active: false,
}

export default User;