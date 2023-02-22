import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebar-items">
                <div className="sidebar-title">
                    <span> CATEGORY </span>
                </div>
                <ul className="sidebar-list">
                    {cats.map(c => (
                        <Link key={c._id} to={`/?cat=${c.name}`} className="Link">
                            <li className="sidebar-list-item" key={c._id} > {c.name} </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}
