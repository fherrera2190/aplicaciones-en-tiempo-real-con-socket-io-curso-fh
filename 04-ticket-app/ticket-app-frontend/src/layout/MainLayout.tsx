import {
  // DesktopOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router";
import UiContext from "../context/UIContext";
const { Sider, Content } = Layout;
export const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  const {hiddenMenu} =useContext(UiContext)
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider hidden={hiddenMenu} collapsedWidth="0" breakpoint="xs">
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "SignIn",
              onClick: () => {
                navigate("/");
              },
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Line",
              onClick: () => {
                navigate("/line");
              },
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Create TIcket",
              onClick: () => {
                navigate("/create");
              },
            },
            // {
            //   key: "4",
            //   icon: <DesktopOutlined />,
            //   label: "Desktop",
            //   onClick: () => {
            //     navigate("/desktop");
            //   },
            // },
          ]}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
