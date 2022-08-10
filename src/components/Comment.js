import "../styles/comment.scss";

function Comment(props) {
  const { accountName, Comment } = props;

  return (
    <div className="commentContainer">
      <div className="accountName">{accountName}</div>
      <div className="comment">{Comment}</div>
    </div>
  );
}

export default Comment;
