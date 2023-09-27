import styles from './page.module.css';
import HeroSection from '@/component/heroSection/HeroSection';
import Navbar from '@/component/navbar/Navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <HeroSection />
    </div>
  );
}
