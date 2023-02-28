import React, { useState, useEffect } from "react";
import apiClient from "@/common/api";
import { IPost } from "@/common/models";
import "./PostsList.css";

function PostsList() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPosts = async () => {
        try {
            const res = await apiClient.get("/posts/?_limit=10");
            setPosts(res.data);
        } catch (e) {
            console.log({ e });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="posts-list-block block">
            {isLoading ? <h2>Loading...</h2> : posts.map((post) => <p key={post.id}>{post.title}</p>)}
        </div>
    );
}

export default PostsList;
