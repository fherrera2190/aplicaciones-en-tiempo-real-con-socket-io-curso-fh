import { SaveOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  Form,
  FormProps,
  Input,
  InputNumber,
  Typography,
} from "antd";
import { useNavigate } from "react-router";
import { useHideMenu } from "../hooks/useHideMenu";
import { useState } from "react";
import { getUserStorage } from "../helpers/getUserStorage";

const { Title, Text } = Typography;

type FieldType = {
  agent: string;
  desktop: string;
};

export const SignIn = () => {
  const [user] = useState(getUserStorage());
  console.log(user)
  const navigate = useNavigate();
  useHideMenu(false);
  const onFinish: FormProps<FieldType>["onFinish"] = ({
    agent,
    desktop,
  }: {
    agent: string;
    desktop: string;
  }) => {
    localStorage.setItem("agent", agent);
    localStorage.setItem("desktop", desktop);

    navigate("/desktop");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  if(user.agent && user.desktop){
    navigate("/desktop");
  }

  return (
    <>
      <Title level={3}>Sign In</Title>
      <Text type="secondary">Enter your name and number desktop</Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Name Agent"
          name="agent"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Desktop"
          name="desktop"
          rules={[{ required: true, message: "Please your number desktop!" }]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item label={null}>
          <Button
            type="primary"
            htmlType="submit"
            shape="round"
            icon={<SaveOutlined />}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
