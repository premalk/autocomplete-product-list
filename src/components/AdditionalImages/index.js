import { array, func, bool } from 'prop-types';
import Modal from 'react-bootstrap/Modal';

// eslint-disable-next-line react/prop-types
const AdditionalImages = ({ isOpen, setIsOpen, imagelist }) => {
  return (
    <Modal size="sm" show={isOpen} onHide={() => setIsOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Additional images</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {imagelist.length &&
          imagelist.map((val, index) => (
            <div key={index}>
              <img className="modal-images" src={val} />
            </div>
          ))}
      </Modal.Body>
    </Modal>
  );
};

AdditionalImages.propTypes = {
  isOpen: bool,
  setIsOpen: func,
  imagelist: array
};

export default AdditionalImages;
