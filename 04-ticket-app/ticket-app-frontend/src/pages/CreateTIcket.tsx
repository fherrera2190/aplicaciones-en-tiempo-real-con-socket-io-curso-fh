import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";

const { Title, Text } = Typography;

export const CreateTIcket = () => {
  const newTicket = () => {
    console.log("newTicket");
  };
  useHideMenu(true);
  return (
    <>
      <Row>
        <Col span={14} offset={6} style={{ textAlign: "center" }}>
          <Title level={3}>Press button to create ticket</Title>

          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={newTicket}
          >
            New Ticket
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 100 }}>
        <Col
          span={14}
          offset={6}
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text>Your number</Text>
          <Text type="success" style={{ fontSize: "55px" }}>
            55
          </Text>
        </Col>
      </Row>
    </>
  );
};
