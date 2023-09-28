import styles from "./teacher.module.css"

const Teacher = () => {
  return (
<>
<header className={styles.header}>
  <h1>Teacher</h1>
</header>
<section>
  <div className={styles.item}>
    <h2>Upload video</h2>
    <input type="file" />
    <button>Upload</button>
  </div>
  <div className={styles.item}>
    <h2>Uploaded video</h2>
  </div>
  <div className={styles.item}>
    <h2>Linked Video</h2>
    <div>
      <p>Video 1</p>
      <p>Video 2</p>
    </div>
  </div>
</section>
    </>
  );
};
export default Teacher;
