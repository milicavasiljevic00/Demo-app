import React from 'react'
import { ProtectedProps } from './ProtectedProps'
import { useUserContext } from '../context/UserContextProvider';
import { Navigate } from "react-router-dom";


export const Protected = ({ role, content }: ProtectedProps) => {

    const { user } = useUserContext();


    return user.role === role ? <>{content}</> : <Navigate to="/login" replace={true} />
}
