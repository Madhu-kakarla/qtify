import React, { useState } from 'react';
import styles from './Button.module.css';
import Modal from 'react-modal';

const Button = ({text}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  Modal.setAppElement('#root');
  return (
    <>
      {/* {Modal.setAppElement('modal')} */}
      <button className={styles.button} onClick={handleOpenModal}>{text}</button>
      <div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Example Modal"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              zIndex: '1'
            },
            content: {
              width: '30%',
              height: '60%',
              margin: 'auto',
            },
          }}
        >
          <div className={styles.modalContent}>
            <h2>Feedback</h2>
            <h4 onClick={handleCloseModal}>X</h4>
            <form className={styles.feedbackForm}>
              <input type='text' name='fullName' placeholder='Full Name' required />
              <input type='email' name='email' placeholder='Email ID' required />
              <input type='text' name='subject' placeholder='Subject' required />
              <textarea name='description' rows="5" required />
              <button type='submit' name='submit'>Submit Feedback</button>
            </form>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Button