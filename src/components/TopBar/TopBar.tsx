import LoginMenu from './LoginMenu';
import NavMenu from './NavMenu';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

type IProps = {
    isLogin: boolean,
    setIsLogin: (value: boolean) => void;
}

const TopBar = ({isLogin, setIsLogin}:IProps) => {

    return (
        <AppBar position="static">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    TopBar
                    <NavMenu />
                    <LoginMenu isLogin={isLogin} setIsLogin={setIsLogin} />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default TopBar