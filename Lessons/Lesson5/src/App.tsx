import React, { useState, useEffect } from "react";
import { PostsList, UserList, SinglePost } from "./components";
import "./App.css";
import apiClient from "@/common/api";
import { IPost, IUser, IPostExtended } from "./common/models";

function App() {
    const [isShow, setIsShow] = useState(true);
    const [singlePostData, setSinglePostData] = useState<IPostExtended>();
    const [users, setUsers] = useState<Record<number, IUser>>([]);

    const handleToggle = () => {
        setIsShow(!isShow);
    };

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
            const usersRes = await apiClient.get<IUser[]>("/users");

            const fUsersRes = usersRes.data.reduce((acc, user) => {
                acc[user.id] = user;
                return acc;
            }, {} as Record<number, IUser>);

            setUsers(fUsersRes);
        })();
    }, []);

    return (
        <div className="app-container">
            <div className="column">
                <button onClick={handleToggle}>Toggle Posts List</button>
                {isShow && <PostsList onShowSinglePost={showSinglePost} />}
            </div>
            <div className="column">
                {singlePostData && <SinglePost data={singlePostData} onCloseSinglePost={closeSinglePost} />}
            </div>
        </div>
    );
}

export default App;
