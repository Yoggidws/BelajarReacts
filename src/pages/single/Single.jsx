// import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"
import "./single.css"
// import img from "../../components/img/bglaptop.jpg"
// import { useEffect, useState } from "react"
// import axios from "axios"
// import { useLocation } from "react-router-dom"



export default function Single() {
    // const location = useLocation();
    // const path = location.pathname.split("/")[2];
    // const [post, setPost] = useState({})
    // const PF = "http://localhost:5001/images/";

    // const handleUpdate = async () => {
    //     try {
    //         await axios.put(`/posts/${path}`, {
    //             username: user.username,
    //             title,
    //             desc,
    //         });
    //         setUpdateMode(false);
    //     } catch (err) { }
    // };

    // useEffect(() => {
    //     const getPost = async () => {
    //         const res = await axios.get("/posts/" + path);
    //         setPost(res.data);
    //     };
    //     getPost();
    // }, [path]);

    return (
        <div className="single">
            <SinglePost />
            {/* <Sidebar /> */}
        </div>
    )
}
