import React, { useState, useEffect } from "react";
import { SinglePost } from "@/components";
import apiClient from "@/common/api";
import { IPost, IUser, IPostExtended } from "@/common/models";
import { useParams } from "react-router-dom";

function SinglePostPage() {
    const { postId } = useParams<{ postId?: string }>();
    const [singlePostData, setSinglePostData] = useState<IPostExtended>();

    const showSinglePost = async () => {
        const postRes = await apiClient.get(`/posts/?id=${postId}`);
        const userRes = await apiClient.get(`/users/?id=${postRes.data[0].userId}`);
        const commentsRes = await apiClient.get(`/comments/?postId=${postId}`);

        setSinglePostData({ post: postRes.data[0], user: userRes.data[0], comments: commentsRes.data });
    };

    const closeSinglePost = () => {
        setSinglePostData(undefined);
    };

    useEffect(() => {
        showSinglePost();
    }, []);

    return (
        <div className="single-post-page-block">
            {singlePostData && <SinglePost data={singlePostData} isFull={true} onCloseSinglePost={closeSinglePost} />}
        </div>
    );
}

export default SinglePostPage;
