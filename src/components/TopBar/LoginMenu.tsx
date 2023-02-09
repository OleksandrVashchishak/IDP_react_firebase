import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

type IProps = {
    isLogin: boolean,
    setIsLogin: (value: boolean) => void;
}


const LoginMenu = ({ isLogin, setIsLogin }: IProps) => {
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("localId");
        setIsLogin(false)
    }
    return (
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            {isLogin && <>
                <IconButton sx={{ p: 0 }}>
                    <Link to="/account">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </Link>
                </IconButton>

                <Button sx={{ my: 2, color: 'white' }} onClick={() => logout()}>
                    Logout
                </Button>  </>}

            {!isLogin && <>
                <Button sx={{ my: 2, color: 'white' }} >
                    <Link to="/">Login</Link>
                </Button>
                <Button sx={{ my: 2, color: 'white' }} >
                    <Link to="/register">Registration</Link>
                </Button>
            </>}
        </Box>
    );
}

export default LoginMenu 