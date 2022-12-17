import { useEffect } from 'react';
import {Outlet, useNavigate} from 'react-router-dom'

const PrivateRoute = () => {
    const user = { token: true };
    let navigate = useNavigate();
    useEffect(() => {
        if (!user.token) navigate("/signin", { replace: true });
    }, [user]);
    return (
        user.token ? <Outlet /> : null
    )
}

export default PrivateRoute
