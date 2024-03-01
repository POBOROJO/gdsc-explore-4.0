import { About, Hero, Registration, GDSCTeam, FAQ } from "../../Components";

import style from "./Home.module.scss";

const Home = ({ aboutRef, rulesRef, teamRef, registerRef, onLoad }) => {
  return (
    <main className={style.home}>
      <Hero rulesRef={rulesRef} registerRef={registerRef} onLoad={onLoad} />
      <About aboutRef={aboutRef} />
      {/* <Sponsor title="In Association With" data={Associations} /> */}
      {/* <Speaker /> */}
      <Registration registerRef={registerRef} />
      {/* <Rules rulesRef={rulesRef} /> */}

      <FAQ />

      <GDSCTeam teamRef={teamRef} />
    </main>
  );
};

export default Home;
