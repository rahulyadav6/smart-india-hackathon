import Image from 'next/image';
import styles from './subject.module.css';
import { useContext } from 'react';
import { AppContext } from '@/feature/context';

const Subject = ({ name, img, bgcolor, info }) => {
  const { openModal } = useContext(AppContext);
  return (
    <div
      onClick={() => openModal(name)}
      style={{ backgroundColor: `${bgcolor}` }}
      className={styles.container}
    >
      <div className={styles.img}>
        <Image src={img} />
      </div>
      <div className={styles.content}>
        <h2>{name}</h2>
        <p>{info}</p>
      </div>
    </div>
  );
};
export default Subject;
