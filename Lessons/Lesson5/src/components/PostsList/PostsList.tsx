import React, { useState, useEffect } from "react";
import apiClient from "@/common/api";
import { IPost } from "@/common/models";
import { useNavigate } from "react-router-dom";
import "./PostsList.css";

interface IPostsListProps {
    isLoading: boolean;
    posts: IPost[];
    onShowSinglePost: (postData: IPost) => void;
}

function PostsList({ onShowSinglePost, posts, isLoading }: IPostsListProps) {
    const navigate = useNavigate();

    return (
        <div className="posts-list-block block">
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                posts.map((post) => (
                    <div key={post.id} className="post-block">
                        <h3>{post.title}</h3>
                        <button onClick={() => onShowSinglePost(post)}>View</button>
                        <button onClick={() => navigate(`/post/${post.id}`)}>View Full</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default PostsList;
