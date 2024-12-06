import { Card, Col, Divider, List, Row, Tag, Typography } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import SocketContext from "../context/SocketContex";
import { useContext, useEffect, useState } from "react";
import { Ticket } from "../interfaces";
import { getLasts } from "../helpers/getLasts";

const { Title, Text } = Typography;

export const Line = () => {
  useHideMenu(true);
  const { socket } = useContext(SocketContext);

  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    socket.on("ticket-assigned", (payload) => {
      setTickets(payload);
    });

    return () => {
      socket.off("ticket-assigned");
    };
  }, [socket]);

  useEffect(() => {
    getLasts().then((tickets) => {
      console.log(tickets);
      setTickets(tickets.last);
    });
  }, []);

  return (
    <>
      <Title level={1}>Attending the queue</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(ticket) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 10 }}
                  actions={[
                    <Tag color="volcano"> {ticket.agent}</Tag>,
                    <Tag color="magenta">Desktop: {ticket.desktop}</Tag>,
                  ]}
                >
                  <Title>No. {ticket.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>Historial </Divider>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket #${item.number}`}
                  description={
                    <>
                      <Text type="secondary">Desktop: </Text>
                      <Tag color="magenta">{item.desktop}</Tag>
                      <Text type="secondary">Agent: </Text>
                      <Tag color="volcano"> {item.agent}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
