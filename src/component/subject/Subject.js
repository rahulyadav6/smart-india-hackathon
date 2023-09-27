import Image from 'next/image';
import styles from './subject.module.css';

const Subject = ({ name, img, bgcolor }) => {
  //   console.log(bgcolor);
  return (
    <div style={{ backgroundColor: `${bgcolor}` }} className={styles.container}>
      <div className={styles.img}>
        <Image src={img} />
      </div>
      <div className={styles.content}>
        <h2>{name}</h2>
      </div>
    </div>
  );
};
export default Subject;
