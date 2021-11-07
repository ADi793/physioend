import { useEffect } from 'react';
import { toast } from 'react-toastify';
import auth from '../services/authService';

const Signout = ({ settingUser, history }) => {
    useEffect(() => {
        auth.signOut();
        settingUser(null);
        toast.success('Signout successfully.');

        history.replace('/');
    }, []);

    return null;
}
 
export default Signout;