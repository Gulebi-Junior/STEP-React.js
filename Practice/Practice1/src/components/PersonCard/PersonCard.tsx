import React, { useState, useEffect } from "react";
import { IPerson } from "@/common/models";
import "./PersonCard.css";

interface IPersonCardProps {
    data: IPerson;
}

function PersonCard({ data }: IPersonCardProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [image, setImage] = useState<string>("");

    useEffect(() => {
        (async () => {
            try {
                setImage(`https://starwars-visualguide.com/assets/img/characters/${data.id}.jpg`);
            } catch (e) {
                console.log({ e });
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return (
        <div className="person-card">
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <>
                    <h3>{data.name}</h3>
                    <img src={image} />
                </>
            )}
        </div>
    );
}

export default PersonCard;
