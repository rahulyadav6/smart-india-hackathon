'use client';
import { useEffect, useState } from 'react';
import styles from './loginform.module.css';
import { useSearchParams } from 'next/navigation';

const LoginForm = () => {
  const [pageType, setPageType] = useState('login')
  const searchParams = useSearchParams();
  const search = searchParams.get('q');
  let header;
  if (search == 'admin') {
    header = 'Admin Login';
  } else if (search == 'teacher') {
    header = 'Teacher Login';
  } else {
    header = 'Student Login';
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>{header}</h1>
          <p>
            Doesn't have an account?{' '}
            <span className={styles.link} onClick={() => setPageType('register')}> Sign up</span>
          </p>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputItem}>
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div className={styles.inputItem}>
            <label htmlFor="email">Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <button className={styles.btn}>LOGIN</button>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
