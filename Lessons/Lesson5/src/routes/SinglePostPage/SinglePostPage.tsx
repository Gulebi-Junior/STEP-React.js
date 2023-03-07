import React, { useState, useEffect } from "react";
import { SinglePost } from "@/components";
import apiClient from "@/common/api";
import { IPost, IUser, IPostExtended } from "@/common/models";
import { useParams, useNavigate } from "react-router-dom";

function SinglePostPage() {
    const { postId } = useParams<{ postId?: string }>();
    const [isLoading, setIsLoading] = useState(true);
    const [singlePostData, setSinglePostData] = useState<IPostExtended>();
    const navigate = useNavigate();

    const closeSinglePost = () => {
        navigate("/posts");
    };

    useEffect(() => {
        (async () => {
            try {
                const postRes = await apiClient.get(`/posts/?id=${postId}`);
                const userRes = await apiClient.get(`/users/?id=${postRes.data[0].userId}`);
                const commentsRes = await apiClient.get(`/comments/?postId=${postId}`);

                setSinglePostData({ post: postRes.data[0], user: userRes.data[0], comments: commentsRes.data });
            } catch (e) {
                console.log({ e });
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return (
        <div className="single-post-page-block">
            <SinglePost
                data={singlePostData!}
                isFull={true}
                isLoading={isLoading}
                onCloseSinglePost={closeSinglePost}
            />
        </div>
    );
}

export default SinglePostPage;
