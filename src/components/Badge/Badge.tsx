import React from 'react';
import { Badge as BBadge } from 'react-bootstrap'
import { IDevices } from 'src/modules/firebase/typings/IDevices';


interface Prop{
  type: IDevices,
  className?: string
}

{/* <Badge className="user-card__device-item" variant="secondary">QR</Badge>
<Badge className="user-card__device-item" variant="danger">M-TOKEN</Badge>
<Badge className="user-card__device-item" variant="primary">ELEV</Badge>
<Badge className="user-card__device-item" variant="success">TOKEN</Badge>
<Badge className="user-card__device-item" variant="secondary">SMS</Badge> */}

const Badge: React.FC<Prop> = ({ type, className }) => {

  const { text, variant } = ({
    "QR_CODE": { text: 'QR', variant: 'secondary' },
    "TOKEN_ID": { text: 'TOKEN', variant: 'success' },
    "SMS": { text: 'SMS', variant: 'info' },
    "MULTI_TOKEN": { text: 'M-TOKEN', variant: 'danger' },
    "ELEVACAO": { text: 'ELEV', variant: 'primary' }
  }[type])
  
  return <BBadge className={className} variant={variant as any}>{text}</BBadge>;
}

export default Badge;