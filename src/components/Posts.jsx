import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "./Post";
import "../styles/posts.css"


export default function Posts() {
    return (
        <div className="posts-main">
            <div class="posts-wraper">
                <div class="start-post">
                    <div className="img"><FontAwesomeIcon icon={faUserAlt} style={{ height: "25px", color: "#414141"}} /></div>
                    <div class="start">Start a post</div>
                </div>
                <div class="posts">
                <Post />
                <Post />
                </div>
            </div>
        </div>
    );
}
