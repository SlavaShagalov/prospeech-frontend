import { useNavigate } from 'react-router-dom';

import { RootState } from '../services/state/store';
import { useSelector } from 'react-redux';
import Spinner from './ui/Spinner';

const ProtectedRoute: React.FC<{
    children: any;
}> = ({
    children,
}) => {
        // const user = useAuth();
        const navigate = useNavigate();

        // useEffect(() => {
        //     console.log("1:", user);
        //     if (user === null) {
        //         navigate('/signin');
        //         return;
        //     }
        // }, [user, navigate]);

        // return children;

        const user = useSelector((state: RootState) => state.user.user)
        const userStatus = useSelector((state: RootState) => state.user.status)
        // const error = useSelector((state: RootState) => state.user.error)

        let content
        console.log("ProtectedRoute", "status", userStatus, "user", user);
        if (userStatus === 'loading') {
            content = <div className="flex items-center justify-center h-screen"><Spinner /></div>
        } else if (userStatus === 'succeeded' && user !== null) {
            content = children;
        } else if (userStatus === 'failed' || user === null) {
            navigate('/signin');
            content = <div className="flex items-center justify-center h-full"><Spinner /></div>
        } else {
            content = <div className="flex items-center justify-center h-full"><Spinner /></div>
        }

        return content;
    }

export default ProtectedRoute;
