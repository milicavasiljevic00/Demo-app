import React, { useEffect } from 'react'
import { ProtectedProps } from './ProtectedProps'
import { useUserContext } from '../context/UserContextProvider';
import { Navigate } from "react-router-dom";


export const Protected = ({ role, content }: ProtectedProps) => {

    const { user, loaded } = useUserContext();
    const split1: string[] = role.split(/\s+/);
    useEffect(() => {
        console.log(user.role)
    }, [loaded])


    /*if (loading) {
        return <>{ }</>
    }

    if (split1.includes(user.role)) {
        return <>{content}</>
    }*/

    return (split1.includes(user.role) && loaded) ? <>{content}</> : <Navigate to="/login" replace={true} />
}
