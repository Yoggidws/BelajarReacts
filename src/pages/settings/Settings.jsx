import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import image from "../../components/img/bglaptop.jpg"


export default function Settings() {
    return (
        <div className="settings">
            <div className="setting-wrapper">
                <div className="setting-title">
                    <span className="setting-update-title"> Update Your Account</span>
                    <span className="setting-delete-title"> Delete Your Account</span>
                </div>
                <form action="" className="setting-form">
                    <label> Profile Picture</label>
                    <div className="setting-pp">
                        <img src={image} alt="" />
                        <label htmlFor="fileinput">
                            <FontAwesomeIcon icon={faUserCircle} className="setting-pp-icon" />
                        </label>
                        <input type="file" id="fileinput" style={{ display: "none" }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="goy" />
                    <label>Email</label>
                    <input type="text" placeholder="goy@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="setting-submit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
