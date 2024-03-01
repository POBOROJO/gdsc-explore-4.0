import GDSCTeamCard from "../GDSCTeamCard/GDSCTeamCard";
import Fade from "../Fade/Fade";
import data from "../../Assets/GDSCTeam.json";

import styles from "./GDSCTeam.module.scss";

const Team = ({ teamRef }) => {
  return (
    <section className={styles.team} ref={teamRef}>
      <Fade type="bottom">
        <h1 className={styles["team-heading"]}>MEET THE TEAM</h1>
      </Fade>
      <Fade type="bottom">
        <div className={styles["team-list"]}>
          {data.map((d) => (
            <GDSCTeamCard
              key={d.name}
              img={d.img}
              name={d.name}
              links={d.links}
              field={d.field}
            />
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Team;
