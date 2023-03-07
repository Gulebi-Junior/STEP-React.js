import { IPost, IPostExtended } from "@/common/models";
import React from "react";
import "./SinglePost.css";

interface ISinglePostProps {
    data: IPostExtended;
    isFull: boolean;
    isLoading?: boolean;
    onCloseSinglePost: () => void;
}

function SinglePost({ data, isFull, isLoading, onCloseSinglePost }: ISinglePostProps) {
    return (
        <div className="single-post-container">
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <div className="single-post-block">
                    <h5>By {data.user.username}</h5>
                    <h3>{data.post.title}</h3>
                    <p>{data.post.body}</p>
                    {isFull && (
                        <div className="comments-block">
                            <h3 id="comments-title">Comments:</h3>
                            {data.comments.map((comment) => (
                                <div className="comment" key={comment.id}>
                                    <h4>{comment.name}</h4>
                                    <p>{comment.body}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    <button onClick={onCloseSinglePost}>Close</button>
                </div>
            )}
        </div>
    );
}

export default SinglePost;
