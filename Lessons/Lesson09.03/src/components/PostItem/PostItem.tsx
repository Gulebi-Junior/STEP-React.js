import { IPost } from "@/types";
import React from "react";

interface IPostItemProps {
    data: IPost;
}

function PostItem({ data }: IPostItemProps) {
    const handleClick = () => {
        console.log(data.title);
    };

    return (
        <div className="post-item-container" onClick={handleClick}>
            <p>
                <strong>{data.id}. </strong>
                {data.title}
            </p>
        </div>
    );
}

export default PostItem;
