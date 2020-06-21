import styled from '@emotion/styled'
import Badge from './../Badge'

const Card = styled.div`
  border: 1px solid #5B66D2;
  border-radius: 7px;
  padding: 15px 16px;
  position: relative;
`

const Card__Cpf_Number = styled.div`
  margin-bottom: 8px;
`

const Card__Devices = styled.div`
  display: flex;
  justify-content: flex-start;
`

const Card__Badge = styled(Badge)`
  margin-right: 12px;
`

const Card_Go_To_User = styled.button`
  border: none;
  padding: 5px;
  background: none;
  position: absolute;
  top: 2px;
  right: 2px;
  display: flex;
`

export const Styled = {
  Card,
  Card__Cpf_Number,
  Card__Devices,
  Card__Badge,
  Card_Go_To_User
}