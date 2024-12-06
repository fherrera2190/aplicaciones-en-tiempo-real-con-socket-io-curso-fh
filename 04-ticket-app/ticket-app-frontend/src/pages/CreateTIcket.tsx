import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import { useContext, useState } from "react";
import SocketContext from "../context/SocketContex";
import { Ticket } from "../interfaces";

const { Title, Text } = Typography;

export const CreateTIcket = () => {
  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState<Ticket>();
  const newTicket = () => {
    console.log("newTicket");
    socket.emit("new-ticket", null, (data: Ticket) => {
      console.log(data);
      setTicket(data);
    });
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

      {ticket && (
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
              {ticket?.number}
            </Text>
          </Col>
        </Row>
      )}
    </>
  );
};
