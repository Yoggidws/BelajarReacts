import "./write.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../context/Context";



export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);
    const [cats, setCats] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
            categories,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id)
        } catch (err) { }
    };
    const [checkedState, setCheckedState] = useState(
        new Array(cats.length).fill(false)
    );
    const handleOnChange = (position) => {
        const tmpCat = position.target.value
        setCategories(categories => [...categories, tmpCat])
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }

    return (
        <div className="write">
            {file && (
                <img src={URL.createObjectURL(file)}
                    alt=""
                    className="write-img"
                    crossOrigin="anonymous"
                />
            )}
            <form action="" className="writeform" onSubmit={handleSubmit}>
                <div className="writeform-group">
                    <label htmlFor="fileInput">
                        <FontAwesomeIcon icon={faPlus} className="write-icon" />
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="write-input"
                        autoFocus={true}
                        onChange={
                            e => setTitle(e.target.value)
                        }
                    />
                </div>
                <div className="writeform-group">
                    <textarea
                        placeholder="Write the knowledge here"
                        type="text"
                        className="write-input write-text"
                        onChange={
                            e => setDesc(e.target.value)
                        }
                    >
                    </textarea>
                </div>
                <div className="checkboxes">
                    <h3>Select Categories</h3>
                    <ul className="toppings-list">
                        {cats.map(({ name }, index) => {
                            return (
                                <li key={index}>
                                    <div className="">
                                        <div className="left-section">
                                            <input
                                                type="checkbox"
                                                id={`custom-checkbox-${index}`}
                                                name={name}
                                                value={name}
                                                checked={checkedState[index]}
                                                onChange={
                                                    (e) => handleOnChange(e)
                                                }
                                            />
                                            <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <button className="write-submit" type="submit"> Publish! </button>
            </form>
        </div>
    );
}
