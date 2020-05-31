import { IDevices } from './IDevices'

export interface IUser {
  cpf: string;
  devices: IDevices[];
  lastModification: string,
  observations: string,
  password: string,
  penumber: string,
  qrAuthenticators: string[]
}