'use client';
import Subject from '../subject/Subject';
import maths from '../../../public/Rosetta.webp';
import science from '../../../public/Science.png';
import computer from '../../../public/Computer.png';
import music from '../../../public/music.png';
import styles from './student.module.css';

const Student = () => {
  const content = [
    {
      img: maths,
      bgcolor: '#FD273B',
      name: 'English',
      info: 'Learning english opens doors to communication, literature, and opportunities worldwide.',
    },
    {
      img: science,
      bgcolor: '#4D8C45',
      name: 'Science',
      info: 'Science palys a crucial role in solving problems, improving our lives, and expanding our knowledge of the universe.',
    },
    {
      img: computer,
      bgcolor: '#142054',
      name: 'Maths',
      info: 'Mathematical is a fundamental field of study that deals with numbers, quantities, shapes, patterns, and relationships.',
    },
    {
      img: music,
      bgcolor: '#4AA992',
      name: 'Music',
      info: 'Music is a universal and deeply ingrained form of human expression that trancends cultural boundaries.',
    },
  ];
  return (
    <div className={styles.container}>
      {content.map((item, index) => {
        return (
          <Subject
            name={item.name}
            img={item.img}
            info={item.info}
            key={index}
            bgcolor={item.bgcolor}
          />
        );
      })}
    </div>
  );
};
export default Student;
