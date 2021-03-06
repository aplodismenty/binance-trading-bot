import React from 'react'
import { Form, Input, Checkbox, Button, message } from 'antd'
import Store from 'electron-store'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}

const Telegram = () => {
  const store = new Store()
  const config = store.get()
  const onFinish = (values) => {
    store.set(values)
    console.log('Success:', values)
    message.success('Saved')

  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={config}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Bot Token"
        name="TELEGRAM_BOT_TOKEN"
        rules={[
          {
            required: true,
            message: 'Please enter your bot token!',
          },
        ]}
      >
        <Input type="password" />
      </Form.Item>

      <Form.Item
        label="Your user id"
        name="TELEGRAM_USER_ID"
        rules={[
          {
            required: true,
            message: 'Please enter your telegram user id!',
          },
        ]}
      >
        <Input type="text" />
      </Form.Item>

      To get user id use <a href="https://t.me/userinfobot" target="_blank" rel="noopener noreferrer">@userinfobot</a>

      <Form.Item
        label="Auto start"
        name="TELEGRAM_AUTO_START"
        valuePropName="checked"
      >
        <Checkbox />
      </Form.Item>

      <Form.Item
        label="Notify on open position"
        name="TELEGRAM_NOTIFY_NEW_POS"
        valuePropName="checked"
      >
        <Checkbox />
      </Form.Item>

      <Form.Item
        label="Notify on increase position"
        name="TELEGRAM_NOTIFY_INCREASE_POS"
        valuePropName="checked"
      >
        <Checkbox />
      </Form.Item>

      <Form.Item
        label="Notify on decrease (take profit) position"
        name="TELEGRAM_NOTIFY_DECREASE_POS"
        valuePropName="checked"
      >
        <Checkbox />
      </Form.Item>

      <Form.Item
        label="Notify on close position"
        name="TELEGRAM_NOTIFY_CLOSE_POS"
        valuePropName="checked"
      >
        <Checkbox />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Telegram
