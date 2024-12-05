import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import { useState } from "react";
import { getUserStorage } from "../helpers/getUserStorage";
import { useNavigate } from "react-router";

const { Title, Text } = Typography;

export const Desktop = () => {
  const [user] = useState(getUserStorage());
  const navigate = useNavigate();

  useHideMenu(false);

  const quit = () => {
    console.log("salir");
    localStorage.clear();
    navigate("/");
  };
  const nextTicket = () => {
    console.log("nextTicket");
  };


  if(!user.agent || !user.desktop){
    navigate("/");
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user.agent}</Title>
          <Text>You are in desktop: </Text>
          <Text type={"success"}>{user.desktop}</Text>
        </Col>
        <Col
          span={4}
          // align="right"
        >
          <Button
            shape="round"
            onClick={quit}
            icon={<CloseCircleOutlined />}
            style={{ backgroundColor: "rgb(255, 0, 0, 0.85)", color: "white" }}
          >
            Quit
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>They are attending ticket number: </Text>
          <Text
            style={{
              fontSize: "30px",
              color: "rgb(255, 0, 0, 0.85)",
            }}
          >
            55
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6}>
          <Button
            onClick={nextTicket}
            type="primary"
            shape="round"
            icon={<RightOutlined />}
          >
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
};
