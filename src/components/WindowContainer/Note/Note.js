import styles from "./Note.module.css";

function Note(props) {
  let notes = props.notes;

  return (
    <div>
      <div className={styles.noteContainer}>
        {notes.map((data, index) => {
          if (!data.note == "") {
            return (
              <div key={index}>
                <div className="row m-2">
                  <div className={styles.note}>
                    <a target="_blank">{data.note}</a>
                    <br />
                    <p className={styles.date}>{data.time}</p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Note;
