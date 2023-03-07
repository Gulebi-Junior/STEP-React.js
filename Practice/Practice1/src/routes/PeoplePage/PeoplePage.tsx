import React, { useState, useEffect } from "react";
import dataAPIClient from "@/common/dataAPI";
import { IPerson } from "@/common/models";
import { PersonCard } from "@/components";
import "./PeoplePage.css";

function PeoplePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [people, setPeople] = useState<IPerson[]>([]);

    useEffect(() => {
        (async () => {
            try {
                // load posts
                const peopleRes = await dataAPIClient.get("/people/?format=json");

                const fPeopleRes = peopleRes.data.results.map((person: IPerson) => {
                    return { ...person, id: person.url.split("/")[5] };
                });

                setPeople(fPeopleRes);
            } catch (e) {
                console.log({ e });
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return (
        <div className="people-page-container">
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <div className="people-page-cards-container">
                    {people.map((person) => (
                        <PersonCard key={person.id} data={person} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default PeoplePage;
