import styles from "./Bookmarks.module.css";

function Bookmarks(props) {
  let bookmark = props.bookMarks;

  return (
    <div>
      <div className={styles.noteContainer}>
        {bookmark.map((data, index) => {
          if (!data.bookmark == "") {
            return (
              <div key={index}>
                <div className="row m-2">
                  <div className={styles.note}>
                    <a href={data.bookmark} target="_blank">
                      {data.bookmark}
                    </a>
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

export default Bookmarks;
