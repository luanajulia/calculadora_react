import { ButtonContainer } from './styles';

const Buttons = ({label, onClick}) => {
  return (
    <ButtonContainer onClick={onClick}>
      {label}
    </ButtonContainer>
  );
}

export default Buttons;
