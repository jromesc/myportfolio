import { useContext } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
import { ButtonContext } from '../ButtonContext';
import { ImageContainer, FlexContainer } from './styled-components/Styled';
import Alert from '../assets/alert2.svg';
import { FiX } from 'react-icons/fi';
import '../custom-alert.css';

const AlertError = () => {
  const { buttonClick } = useContext(ButtonContext);

  if (buttonClick != 0) {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui react-confirm-alert-body shadow'>
            <FlexContainer justify='end'>
              <div><FiX className='close-icon mb-4' onClick={onClose}/></div>
            </FlexContainer>
            <ImageContainer size='100px' margin='0 auto 2rem auto' mbg='#6E7179'>
              <img src={Alert} />
            </ImageContainer>
            <p className='react-confirm-text'>Sorry! This function if currently not available.</p>
          </div>
        );
      }
    });
  }
}

export default AlertError;