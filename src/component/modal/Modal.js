'use client';
import { useContext } from 'react';
import styles from './modal.module.css';
import { ImCross } from 'react-icons/im';
import { AppContext } from '@/feature/context';
const Modal = () => {
  const { closeModal, subName } = useContext(AppContext);
  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <div className={styles.grade}>
          <p>Grade 1</p>
          <p>Grade 2</p>
          <p>Grade 3</p>
          <p>Grade 4</p>
        </div>
        <div className={styles.details}>
          <h1>{subName}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            nesciunt itaque modi recusandae magni. Adipisci porro assumenda
            optio ea. Id, obcaecati voluptas! Obcaecati laboriosam consequuntur
            veritatis autem eos quod quos tempore quia voluptatum! Accusamus.
          </p>
        </div>
        <ImCross onClick={() => closeModal()} className={styles.icon} />
      </div>
    </div>
  );
};
export default Modal;
