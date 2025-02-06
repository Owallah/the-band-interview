import { Navigate } from "react-router";
import { useAuthStore } from "../../context/useAuthStore"

const PrivateRoute = ({ children }: { children: JSX.Element}) => {
    const { isAuthenticated } = useAuthStore();
    return isAuthenticated ? children : <Navigate to="/auth/login" />;

}

export default PrivateRoute;