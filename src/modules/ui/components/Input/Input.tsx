import React from 'react';

import { Styled } from './styles'

const Input = (props: React.HTMLProps<HTMLInputElement>) => {
  return <Styled.Input { ...props }/>;
}

export default Input;