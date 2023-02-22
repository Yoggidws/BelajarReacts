import './post.css'
import { Link } from 'react-router-dom'


export default function Post({ post }) {
    const PF = "https://api2.iggoy.com/images/";
    return (
        <>
            {post && (
                <div className='post'>
                    {post.photo && (
                        <img
                            crossOrigin='anonymous'
                            src={PF + post.photo}
                            alt="img"
                            className='post-img'
                        />
                    )}
                    <div className="post-info">
                        <div className="post-cats">
                            {post.categories && post.categories.map((c, i) => (
                                <Link className='link' to={`/cats/?cat=${post.categories[i]}`} key={i}>
                                    <span className="post-cat"  > {c}</span>
                                </Link>
                            ))}
                        </div>
                        <Link to={`/post/${post._id}`} className="link">
                            <span className="post-title">{post.title}</span>
                        </Link>
                        <hr />
                        <span className="post-date">{new Date(post.createdAt).toDateString()}</span>
                        <p className="post-desc"> {post.desc}
                        </p>
                    </div>
                </div >
            )}
        </>
    )
}
