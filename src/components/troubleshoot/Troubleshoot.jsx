import "./troubleshoot.css"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from "axios"
import { useLocation } from 'react-router-dom';
import Posts from '../../components/posts/Posts'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Troubleshoot() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    const cat = search.split("=")[1];

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data)
        }
        fetchPosts();
    }, [search]);
    return (
        <>
            <div className='Post'>
                <div className="post-header">
                    <div className="title-wrapper">
                        <h1 className="art-title">{cat}</h1>
                        <h2 className="post-explain">Guidelines, workflows, and solutions for operation teams.</h2>
                    </div>
                    {/* <div className="search-bar">
                        <form action="">
                            <span className='search-icon'><FontAwesomeIcon icon={faSearch} size="xs" /></span>
                            <input type="text" name="" placeholder='konci' />
                            <button>Search</button>
                        </form>
                    </div> */}
                    <div className="search-bar">
                        <form className="search-form" role="search">
                            <input className="form-input" id="search" type="search" placeholder="Search..." autoFocus required />
                            <button className="button-input" type="submit" >GO</button>
                        </form>
                    </div>
                </div>
                <div className="container">
                    <div className="breadcrumb-nav">
                        <h3 className='navigator'>Home &gt; xxx</h3>
                        <h3 className='title'>Articles</h3>
                    </div>
                    <div className="topic-category">
                        <ul className='pill-tabs'>
                            <li> <Link>  Master Data</Link> </li>
                            <li> <Link> CRM </Link> </li>
                            <li> <Link> Reimbursement </Link> </li>
                            <li> <Link> Sample Tracking </Link> </li>
                            <li> <Link> Security </Link> </li>
                            <li> <Link> Drive </Link> </li>
                        </ul>
                    </div>
                    <div className="card-container">
                        <Posts posts={posts} />
                    </div>
                </div>
            </div>
        </>
    )
}
