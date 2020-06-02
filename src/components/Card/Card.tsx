import React, { PropsWithChildren } from 'react';
import Badge from './../Badge'
import { ReactComponent as UpArrowIcon } from '../../assets/svg/arrow-up-right.svg'
import './style.scss'
import { IDevices } from '../../modules/firebase/typings/IDevices';

interface Props  {
  cpf: string,
  devices: IDevices[]
}

const Card: React.FC<Props> = ({ cpf, devices }) => {
  
  console.log(devices)

  return (
  <div className="user-card">
    <div className="user-card__cpf-number"><b>CPF</b>: {cpf}</div>
    <div className="user-card__devices">
      {devices.map(device => <Badge 
        className="user-card__device-item"
        key={device} 
        type={device} />)}
      {/* <Badge className="user-card__device-item" variant="secondary">QR</Badge>
      <Badge className="user-card__device-item" variant="danger">M-TOKEN</Badge>
      <Badge className="user-card__device-item" variant="primary">ELEV</Badge>
      <Badge className="user-card__device-item" variant="success">TOKEN</Badge>
      <Badge className="user-card__device-item" variant="secondary">SMS</Badge> */}
    </div>

    <button className="user-card__go-to-user">
      <UpArrowIcon />
    </button>
  </div>);
}

export default Card;