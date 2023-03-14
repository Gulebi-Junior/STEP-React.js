import API from "@/common/api";
import { IPost } from "@/types";
import React, { useEffect, useState } from "react";
import PostItem from "../PostItem/PostItem";

function PostsList() {
    const [posts, setPosts] = useState<IPost[]>([]);

    const getPosts = async () => {
        const res = await API.get("/posts/?_limit=25");
        console.log({ res });
        setPosts(res.data);
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="posts-list-container">
            <h2>Posts</h2>
            <div className="posts-list-block">
                {posts.map((post) => (
                    <PostItem key={post.id} data={post} />
                ))}
            </div>
        </div>
    );
}

export default PostsList;
