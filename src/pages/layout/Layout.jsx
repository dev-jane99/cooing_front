import S from "./style";
import Header from "./Header";
import React from "react";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
    <S.Layout>
        <Header />
            <Outlet />
    </S.Layout>
    );
};
export default Layout;