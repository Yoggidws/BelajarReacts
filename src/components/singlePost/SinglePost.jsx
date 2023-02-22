import "./singlePost.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { useState, useContext } from "react"
import { Context } from "../../context/Context"
import Sidebar from "../sidebar/Sidebar"

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const { user } = useContext(Context);
    const PF = "https://api2.iggoy.com/images/";
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc)
        };
        getPost();
    }, [path]);

    // useEffect(() => {
    //     const getPostByUser = async () => {
    //         const res = await axios.get("/posts/" + path)
    //     }
    //     getPostByUser();
    // })

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${path}`, {
                data: { username: user.username },
            });
            window.location.replace("/");
        } catch (err) { }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${path}`, {
                username: user.username,
                title,
                desc,
            });
            setUpdateMode(false);
        } catch (err) { }
    };


    return (
        <>
            <div className="singlepost">
                <div className="singlePostHeader">
                    {post.photo && (
                        <img
                            src={PF + post.photo}
                            alt=""
                            className="singlepost-img"
                            crossOrigin="true"
                        />
                    )}
                    <div className="overlay-title-wrapper">
                        <div className="overlay-title">
                            <h1 className="title" >{post.categories && Object.values(post.categories)[0]}</h1>
                            {
                                <h2>{post.title}</h2>
                            }
                        </div>
                    </div>
                </div>
                <Sidebar />
                <div className="singlepost-wrapper">
                    {
                        updateMode ? <input type="text" value={title} className=" singlepost-title-input" onChange={(x) => setTitle(x.target.value)} /> : (
                            <h1 className="singlepost-title">
                                {/* {title} */}
                                {post.username === user?.username &&
                                    (<div className="singlepost-edit">
                                        <FontAwesomeIcon icon={faEdit} className="singlepost-icon " onClick={() => setUpdateMode(true)} />
                                        <FontAwesomeIcon icon={faTrash} className="singlepost-icon " onClick={handleDelete} />
                                    </div>
                                    )}
                            </h1>
                        )
                    }
                    {/* {post.photo && (
                    <img
                        src={PF + post.photo}
                        alt=""
                        className="singlepost-img"
                        crossOrigin="true"
                    />
                )} */}

                    {/* original */}
                    {/* {
                    updateMode ? <input type="text" value={title} className=" singlepost-title-input" onChange={(x) => setTitle(x.target.value)} /> : (
                        <h1 className="singlepost-title">
                            {title}
                            {post.username === user?.username &&
                                (<div className="singlepost-edit">
                                    <FontAwesomeIcon icon={faEdit} className="singlepost-icon " onClick={() => setUpdateMode(true)} />
                                    <FontAwesomeIcon icon={faTrash} className="singlepost-icon " onClick={handleDelete} />
                                </div>
                                )}
                                </h1>
                    )
                } */}
                    <div className="singlepost-info">
                        <span className="singlepost-author">
                            Written By  <br /> <Link className="Link" to={`/?user=${post.username}`}><b>{post.username}</b></Link>
                        </span>
                        <span className="singlepost-date"> Published On <br /> {new Date(post.createdAt).toDateString()}</span>
                    </div>
                    {updateMode ? (<textarea className="singlepost-desc-input" value={desc} onChange={(e) => setDesc(e.target.value)} />) : (
                        <p className="singlepost-desc">
                            {desc}
                        </p>
                    )}
                    {updateMode &&
                        <button className="singlepost-button" onClick={handleUpdate} type="submit"> Update!</button>
                    }
                </div >
                {/* <div className="footer">
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati aspernatur delectus enim deleniti, quidem repudiandae nemo. Delectus sequi odio velit suscipit voluptatibus magni, accusamus labore reiciendis aperiam repudiandae id. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, praesentium sapiente. Accusamus impedit perspiciatis amet deleniti explicabo qui, dolores quas ad? Ipsa repellendus quis molestiae, debitis numquam cumque. Doloremque, voluptas.lorem</div>
                </div> */}
            </div >
        </>
    )
}
