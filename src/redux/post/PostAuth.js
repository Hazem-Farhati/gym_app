import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId);

    return <span className="auth">by {author ? author.name : 'Unknown '}</span>
}
export default PostAuthor