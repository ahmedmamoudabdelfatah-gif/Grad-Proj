import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faEllipsisH, faThumbsUp, faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import "../styles/post.css"

export default function Post() {
    return (
        <div class="post">
            <header>
                <div className="img"><FontAwesomeIcon icon={faUserAlt} style={{ height: "25px", color: "#414141"}} /></div>
                <div className="img"><FontAwesomeIcon icon={faEllipsisH} style={{ height: "20px", color: "#65676B"}} /></div>
            </header>
            <div class="post-body">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, dolores?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aperiam molestias!
                Quaerat modi odio nesciunt! Iste molestiae nobis delectus, neque rem, ipsam mollitia, ipsa obcaecati optio illo laudantium laboriosam in?
                <span>...see more</span>
            </div>
            <footer>
                {/* <div class="details">
                    <div class="feeds">wdawd and 500 others</div>
                    <div class="comments-shares">
                        <span>52 comments</span>
                        <span>10 shares</span>
                    </div>
                </div> */}
                <div class="actions">
                    <div class="feed"> <FontAwesomeIcon icon={faThumbsUp} style={{height:"16px", marginRight: "5px"}} /> like</div>
                    <div class="comment"> <FontAwesomeIcon icon={faComment} style={{height:"16px", marginRight: "5px"}}/> comment</div>
                    <div class="share"><FontAwesomeIcon icon={faShare} style={{height:"16px", marginRight: "5px"}}/> share</div>
                </div>
            </footer>
        </div>
    );
}
