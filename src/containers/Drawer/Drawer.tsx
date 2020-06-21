import React from 'react';
import User from './../../page/User'
import { Styled } from './styles'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers';
import { SetModalState } from '../../actions'

interface Props {
  className?: string
}

const Drawer: React.FC<Props> = ({ className }) => {
  const activeModal = useSelector<RootState,boolean>(state => state.MODAL.showModal)

  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(SetModalState('deactive'))
  }

  return <Styled.Drawer className={className}>
    <User onClose={() => handleClose()} active={activeModal} />
  </Styled.Drawer>
}

Drawer.defaultProps = {
  className: ''
}

export default Drawer;