import React from "react";
import SideBar from "../../components/SideBar";
import TableData from "./TableData";
import UploadedNavbar from "./UploadedNavbar";
import styles from "./uploadedRecordings.module.scss";
// import UploadedSidebar from "./UploadedSidebar";

function UploadedRecordings() {
  const [toggleSidebar, setToggleSidebar] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState("");
  const setterFn = (e) => {
    setIsSearching(e.target.value);
  };
  return (
    <div className={`${styles.uploadedRecordingsParent} `}>
      {/* <UploadedSidebar
        getValue={(e) => setterFn(e)}
        toggleSidebar={toggleSidebar}
        closeSidebar={() => setToggleSidebar(!toggleSidebar)}
      /> */}
      <SideBar
        needSearchMobile="needSearchMobile"
        getValue={(e) => setterFn(e)}
      >
        <div className={styles.uploadedRecordingsCol}>
          <div className={styles.uploadedRecordingsSideBar}>
            <UploadedNavbar
              openSidebar={() => setToggleSidebar(!toggleSidebar)}
              search={(e) => setterFn(e)}
            />
          </div>
          <TableData searchKeyword={isSearching} />
        </div>
      </SideBar>
    </div>
  );
}

export default UploadedRecordings;
