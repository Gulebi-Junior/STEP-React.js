import React, { useState, useEffect } from "react";
import { PostsList, UserList, SinglePost } from "@/components";
import apiClient from "@/common/api";
import { IPost, IUser, IPostExtended } from "@/common/models";
import "./PostsPage.css";
import { useParams } from "react-router-dom";

function PostsPage() {
    const { postId } = useParams<{ postId?: string }>();
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState<IPost[]>([]);
    const [singlePostData, setSinglePostData] = useState<IPostExtended>();
    const [users, setUsers] = useState<Record<number, IUser>>([]);

    const showSinglePost = async (postData: IPost) => {
        const user = users[postData.userId];
        const commentsRes = await apiClient.get(`/comments/?postId=${postData.id}`);

        setSinglePostData({ post: postData, user, comments: commentsRes.data });
    };

    const closeSinglePost = () => {
        setSinglePostData(undefined);
    };

    useEffect(() => {
        (async () => {
            try {
                // load users
                const usersRes = await apiClient.get<IUser[]>("/users");

                const fUsersRes = usersRes.data.reduce((acc, user) => {
                    acc[user.id] = user;
                    return acc;
                }, {} as Record<number, IUser>);

                setUsers(fUsersRes);

                // load posts
                const postsRes = await apiClient.get("/posts/?_limit=10");

                setPosts(postsRes.data);
            } catch (e) {
                console.log({ e });
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    useEffect(() => {
        (() => {
            if (postId && !isLoading) {
                showSinglePost(posts.find((post) => post.id === +postId) as IPost);
            }
        })();
    }, [posts]);

    return (
        <div className="posts-page-block">
            <div className="column">
                <PostsList onShowSinglePost={showSinglePost} posts={posts} isLoading={isLoading} />
            </div>
            <div className="column">
                {singlePostData && (
                    <SinglePost data={singlePostData} isFull={false} onCloseSinglePost={closeSinglePost} />
                )}
            </div>
        </div>
    );
}

export default PostsPage;
