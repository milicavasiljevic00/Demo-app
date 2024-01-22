import React, { Suspense, useEffect, useState } from 'react'
import { ProtectedProps } from './ProtectedProps'
import { useUserContext } from '../context/UserContextProvider';
import { Navigate } from "react-router-dom";
import { UserContent } from '../context/UserContent';
import { UserRoles } from './UserRoles';


export const Protected = ({ role, content }: ProtectedProps) => {

    const { user } = useUserContext();

    useEffect(() => {
    }, [user])

    if (!user) {
        return <Suspense><div>Loading...</div></Suspense>
    }

    return role.includes(user?.role as UserRoles) ? <>{content}</> : <Navigate to="/login" replace={true} />

}
