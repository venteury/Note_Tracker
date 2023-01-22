import ToggleWindow from "../components/ToggleWindow/ToggleWindow";
import styles from "./Home.module.css";
import Window from "../components/WindowContainer/Window/Window";
import React from "react";

function Home() {
  return (
    <div>
      <div className={styles.home}>
        <div className="row">


            <div className="col-4">
              <ToggleWindow />{" "}
            </div>
          

         
            <div className="col-7">
              {" "}
              <Window />{" "}
            </div>
         

        </div>
      </div>
    </div>
  );
}

export default Home;
