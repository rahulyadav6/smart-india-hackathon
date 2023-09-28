'use client';
import HeadSection from '@/component/headSection/HeadSection';
import Modal from '@/component/modal/Modal';
import Student from '@/component/student/Student';
import Teacher from '@/component/teacher/Teacher';
import styles from './page.module.css';
import { useContext } from 'react';
import { AppContext } from '@/feature/context';

const Landing = () => {
  const role = 'Teacher';
  const { modalOpen } = useContext(AppContext);
  if (role == 'Student') {
    return (
      <div className={styles.container}>
        <HeadSection />
        <Student />
        {modalOpen && <Modal />}
      </div>
    );
  } else if (role == 'Teacher') {
    return (
      <>
        <Teacher />
      </>
    );
  }
};
export default Landing;
