import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Layout, Menu, Input} from "antd";

import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import LoginPage from "./LoginPage";
import Page404 from "./Page404";
import sidenavLogo from "../strawhat.jpg"
const {Header, Content, Footer} = Layout;

const Search = Input.Search;

const Main = () => (
    <BrowserRouter>
        <Layout className="layout">
            <Header>
                <div className="logo" style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <img
                        src={sidenavLogo}
                        alt="visp logo"
                        style={{width: 180, height: 35, margin: "auto"}}
                    />
                </div>

                <div className="headerSearch">
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        enterButton
                    />
                    
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{lineHeight: '64px'}}
                >

                    <Menu.Item key="home"><Link to='/'>Home</Link></Menu.Item>
                    <Menu.Item key="profile"><Link to='/profile'>Profile</Link></Menu.Item>
                    <Menu.Item key="login"><Link to='/login'>Login</Link></Menu.Item>
                </Menu>

            </Header>
            <Content style={{padding: '0 50px', marginTop: 64, height: '85vh'}}>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/profile" component={ProfilePage}/>
                    <Route path="/scoreboard" component={LoginPage}/>
                    <Route component={Page404}/>
                </Switch>
            </Content>

            <Footer style={{textAlign: 'center'}}>
                My Company ©2018
            </Footer>
        </Layout>
    </BrowserRouter>
)

export default Main;