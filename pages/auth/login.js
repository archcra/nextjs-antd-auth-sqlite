
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { signIn, useSession } from 'next-auth/client'


export default function LoginForm({}) {

    const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      };


    const onFinish = (values) => {
        console.log('Success:', values);

        // setIsLoginStarted(true);
        const email = values.username;
        const password = values.password;
        console.log('here ...' + email + password);
        signIn('credentials',
          {
            email,
            password,
            callbackUrl: `${window.location.origin}/welcome`
          }
        )

      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
return (

    //align : 垂直对齐 left middle right
//justify: 水平对齐 start center end
<Row type="flex" justify="center" align="middle" style={{minHeight:'100vh'}}>
<Col>


<Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input         placeholder="input tom to login." />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password         placeholder="password is jerry"/>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    </Col>
</Row>

)
    }