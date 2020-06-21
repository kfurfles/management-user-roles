import React from 'react';
import { ReactComponent as UpArrowIcon } from '../../assets/svg/arrow-up-right.svg'
import { Styled } from './styled'
import { IDevices } from '../../modules/firebase/typings/IDevices';

interface Props  {
  cpf: string,
  devices: IDevices[],
  onClick: Function
}

const Card: React.FC<Props> = ({ cpf, devices,onClick }) => {
  
  const handleClick = () => {
    onClick({
      cpf, 
      devices
    })
  }

  return (
  <Styled.Card onClick={handleClick}>
    <Styled.Card__Cpf_Number><b>CPF</b>: {cpf}</Styled.Card__Cpf_Number>
    <Styled.Card__Devices>
      {devices.map(device => <Styled.Card__Badge
        key={device} 
        type={device} />)}
    </Styled.Card__Devices>

    <Styled.Card_Go_To_User>
      <UpArrowIcon />
    </Styled.Card_Go_To_User>
  </Styled.Card>);
}

Card.defaultProps = {
  cpf: '',
  devices: [],
  onClick(){},
}

export default Card;