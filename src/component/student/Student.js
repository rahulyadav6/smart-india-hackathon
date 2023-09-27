import Subject from '../subject/Subject';
import maths from '../../../public/Rosetta.webp';
import science from '../../../public/Science.png';
import computer from '../../../public/Computer.png';
import styles from './student.module.css';

const Student = () => {
  return (
    <div className={styles.container}>
      <Subject img={maths} bgcolor={'#FD273B'} name={'Maths'} />
      <Subject img={science} bgcolor={'#4D8C45'} name={'Science'} />
      <Subject img={computer} bgcolor={'#142054'} name={'Computer'} />
    </div>
  );
};
export default Student;
