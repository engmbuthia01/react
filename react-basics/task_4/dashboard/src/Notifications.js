import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";


function Notifications() {
    return (
        <div className="Notifications">
            <button
                style={{
                    position: "absolute",
                    right: "20px",
                    top: "10px,",
                    cursor: "pointer",
                    fontweight: "bold",
                    fontsize: "10px",
                }}
                aria-label="close"
                onClick={console.log("Close button has been clicked")}
            >
                <img src={closeIcon} alt="This is a closing icon shaped X"></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}

export default Notifications;