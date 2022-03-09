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
  useLogin,
  useNavigation,
} from "@pankod/refine";



const { Text, Title } = Typography;

export const Login = () => {
  const [form] = Form.useForm();

  const { mutate: login } = useLogin();
  const { push } = useNavigation();

  const CardTitle = (
    <Title level={3} className="title">
      Sign in your account
    </Title>
  );

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
            {/* <div className="imageContainer">
              <img src="./refine.svg" alt="Refine Logo" />
            </div> */}
            <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
              <Form
                layout="vertical"
                form={form}
                onFinish={(values) => {
                  login(values);
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
                <Button type="primary" size="large" htmlType="submit" block>
                  Sign in
                </Button>
              </Form>
              <div style={{ marginTop: 8 }}>
                <Button
                onClick={()=> push("signup")}>
                  Sign up
                  </Button>
                
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </AntdLayout>
  );
};
