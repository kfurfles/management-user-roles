import React from 'react';
import Header from '../../components/Header';
import { Input } from './../../modules/ui';
import { Styled } from './styles'

const Home = () => {
  return (
    <Styled.Container>
      <Header />
      <Input type="text" placeholder="procure por cpf, senha, penumper ..." className="foo" />
    </Styled.Container>
  )
}

export default Home;