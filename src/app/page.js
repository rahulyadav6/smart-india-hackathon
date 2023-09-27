import Image from 'next/image';
import styles from './page.module.css';
import HeroSection from '@/component/heroSection/HeroSection';
import Navbar from '@/component/navbar/Navbar';

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}
