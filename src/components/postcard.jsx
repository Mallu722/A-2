
import PropTypes from 'prop-types';
import LikeButton from './likebutton';

const PostCard = ({ post }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <img src={post.profileImage} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            <h3>{post.username}</h3>
            <p>{post.content}</p>
            <LikeButton />
        </div>
    );
};

// Define prop types for the PostCard component
PostCard.propTypes = {
    post: PropTypes.shape({
        profilePicture: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
};

export default PostCard;
