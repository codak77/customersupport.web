import React from "react";
import SideBar from "../../components/SideBar";
import LeaderBoard from "./components/LeaderBoard";
import RecentRecording from "./components/RecentRecording";
import TotalAnalysis from "./components/TotalAnalysis";
import TotalRecording from "./components/TotalRecording";
import styles from "./DashboardOverview.module.scss";

function DashboardOverview() {
  return (
    <SideBar>
      <section className={styles.dashboard_overview}>
        <div className={styles.container}>
          <TotalRecording />
          <TotalAnalysis />
          <LeaderBoard />
        </div>
        <RecentRecording />
      </section>
    </SideBar>
  );
}

export default DashboardOverview;
