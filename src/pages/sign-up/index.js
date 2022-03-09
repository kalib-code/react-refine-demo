import React from "react";
import {
  Row,
  Col,
  AntdLayout,
  Card,
  Typography,
  Form,
  Input,
  Button,
  useNavigation,
} from "@pankod/refine";
import { supabaseClient } from "../../utilities/auth";

const { Text, Title } = Typography;

export const Signup = () => {
  const [form] = Form.useForm();
  const { push } = useNavigation();

  const CardTitle = (
    <Title level={3} className="title">
      Sign Up
    </Title>
  );

  const signup = async (email, password) => {
    const { error } = await supabaseClient.auth.signUp({
      email,
      password,
    });

    if (error) {
      return Promise.reject(error);
    }
  };

  return (
    <AntdLayout className="layout">
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Col xs={22}>
          <div className="container">
            <div className="imageContainer">
              <img src="./refine.svg" alt="Refine Logo" />
            </div>
            <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
              <Form
                layout="vertical"
                form={form}
                onFinish={(values) => {
                  signup(values.email, values.password);
                  push("login");
                }}
              >
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, type: "email" }]}
                >
                  <Input size="large" placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true }]}
                  style={{ marginBottom: "12px" }}
                >
                  <Input type="password" placeholder="●●●●●●●●" size="large" />
                </Form.Item>
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  block
                  style={{ marginTop: 24 }}
                >
                  Create Account
                </Button>
              </Form>
              <div style={{ marginTop: 16 }}>

                <Button
                 onClick={() => push("login")}>
                   Sign in
                  </Button>

              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </AntdLayout>
  );
};
