// LikeButton.jsx
import{ useState } from 'react';

const LikeButton = () => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <button onClick={toggleLike} style={{ color: liked ? 'red' : 'white' }}>
            {liked ? 'Unlike' : 'Like'}
        </button>
    );
};

export default LikeButton;
