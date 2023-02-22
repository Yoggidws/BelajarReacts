import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
    return (
        <div className="posts">
            {posts.map((post, _id) => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    );
}