import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
  padding: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.palette.components.modal.outside};

  @media (min-width: 376px) {
    padding: 0.5rem;
  }
`;

export const ModalBody = styled.div`
  background: ${({ theme }) => theme.palette.components.modal.background};
  box-shadow: 0 3px 8px 0 #44444422;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.6);

  min-width: 22rem;

  max-height: 96vh;

  transition: all 0.3s ease-in-out;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseModal = styled.button`
  cursor: pointer;

  background: transparent;
  border: none;
  outline: none;
  width: 1.2rem;
  height: 1.2rem;

  display: flex;
  align-items: center;

  &:before,
  &:after {
    content: '';
    position: absolute;
    height: 1rem;
    background: ${({ theme }) => theme.palette.components.modal.closeButton};
    border: 1.5px solid
      ${({ theme }) => theme.palette.components.modal.closeButton};
    border-radius: 20%;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const ModalHeader = styled.header`
  padding: 1rem 0.5rem 0rem 0.8rem;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & p {
    color: ${({ theme }) => theme.palette.components.modal.header};
    font-weight: 500;
    font-size: 1.05rem;
  }
`;
