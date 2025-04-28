import "./PostUser.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import UserPlaceholder from "../../assets/user_placeholder.png";

const PostUser = () => {
  return (
    <div className="post-user">
      <img src={UserPlaceholder} alt="user" className="avatar"/>

      <div className="post-user-info">
        <h3 className="post-user-name">User Name</h3>

        <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</span>

        <div className="post-user-actions">
          <button className="post-user-action"><IoMdHeartEmpty />1</button>
          <button className="post-user-action"><BiSolidMessageRounded />1</button>
        </div>
      </div>
    </div>
  )
}

export default PostUser;