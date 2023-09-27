import Student from '@/component/student/Student';
import Teacher from '@/component/teacher/Teacher';

const Landing = () => {
  const role = 'Student';
  if (role == 'Student') {
    return <Student />;
  } else if (role == 'Teacher') {
    return <Teacher />;
  }
};
export default Landing;
