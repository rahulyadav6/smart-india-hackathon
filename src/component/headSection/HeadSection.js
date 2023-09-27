import Link from 'next/link';
import styles from './headSection.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

const HeadSection = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link href={'/'}>SmartEdu</Link>
      </div>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="Search subjects" />
        <AiOutlineSearch className={styles.icon} />
      </div>
      <div className="menu">
        <h4>Menu</h4>
      </div>
    </nav>
  );
};
export default HeadSection;
