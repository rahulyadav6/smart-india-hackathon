import Image from 'next/image';
import styles from './herosection.module.css';
import img from '../../../public/educator.svg';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Online Education</h1>
        <p>
          Education is the most powerful weapon, which you can use to change the
          world
        </p>

        <Link href={'/dashboard'} className={styles.btn}>
          Start now <BsArrowRight />
        </Link>
      </div>
      <div className={styles.image}>
        <Image src={img} />
      </div>
    </div>
  );
};
export default HeroSection;
