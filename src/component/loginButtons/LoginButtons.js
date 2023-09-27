import Image from 'next/image';
import studentImg from '../../../public/s2.svg';
import teacherImg from '../../../public/teacher.svg';
import adminImg from '../../../public/admin.svg';
import styles from './loginbutton.module.css';
import Link from 'next/link';

const LoginButtons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.wrapper}>
          <Link href={'/login?q=student'} className={styles.item}>
            <div className={styles.image}>
              <Image src={studentImg} />
            </div>
            <span>Student Login</span>
          </Link>
          <Link href={'/login?q=teacher'} className={styles.item}>
            <div className={styles.image}>
              <Image src={teacherImg} />
            </div>
            <span>Teacher Login</span>
          </Link>
          <Link href={'/login?q=admin'} className={styles.item}>
            <div className={styles.image}>
              <Image src={adminImg} />
            </div>
            <span>Admin Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LoginButtons;
