import React, { useState } from "react";
import UploadData from "./models/UploadData";
import ShowData from "./models/ShowData";
const Homepage = () => {
    const [showUploadDataModal, setShowUploadDataModal] = useState(false)
    const [showDataModal, setShowDataModal] = useState(false);
    const closeUploadModal = ()=>setShowUploadDataModal(false);
    const closeModal = () => setShowDataModal(false);

    return ( 
      <React.Fragment>
        <div className="home-page">
          <div className="top-header">
            <div
              onClick={() => {
                window.localStorage.removeItem("token")
                window.location = "/"
              }}
              className="logout"
            >
              Logout
            </div>
          </div>
          <div className="home-container">
            <button className="upload" onClick={()=>setShowUploadDataModal(true)}>upload data</button>
            <button
              className="seeData"
              onClick={() => {
                setShowDataModal(!showDataModal)
              }}
            >
              See data
            </button>
          </div>
          
        </div>
        {showUploadDataModal && <UploadData closeUploadModal={closeUploadModal} />}
        {showDataModal && <ShowData closeModal={closeModal}/>}
      </React.Fragment>
     );
}
 
export default Homepage;