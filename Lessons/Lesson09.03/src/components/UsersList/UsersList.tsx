import { fetchUsers } from "@/actions/usersActions";
import { AppDispatch, RootState } from "@/store";
import { IUser, IUsersReduser } from "@/types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "@/components";
import { setLoading, unsetLoading } from "@/reducers/loaderSlice";

function UsersList() {
    const dispatch: AppDispatch = useDispatch();
    const status = useSelector<RootState, IUsersReduser["status"]>((state) => state.users.status);
    const users = useSelector<RootState, IUser[]>((state) => state.users.users);
    const error = useSelector<RootState, IUsersReduser["error"]>((state) => state.users.error);

    useEffect(() => {
        (async () => {
            dispatch(setLoading());
            await dispatch(fetchUsers());
            dispatch(unsetLoading());
        })();
    }, []);

    return (
        <div className="user-list-container">
            {/* {status === "pending" && <Spinner />} */}
            {status === "fulfilled" &&
                users.map((user) => (
                    <p key={user.id}>
                        <span>{user.id}. </span>
                        {user.name}
                    </p>
                ))}
            {status === "rejected" && (
                <>
                    <h2>Error!</h2>
                    <p>{error.message}</p>
                </>
            )}
        </div>
    );
}

export default UsersList;
