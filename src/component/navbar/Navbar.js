import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link href={'/'}>SmartEdu</Link>
      </div>
    </nav>
  );
};
export default Navbar;
