import React from "react";
import styles from "./FormRegistration.module.css";
// import { useState } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function FormRegistration(props) {
  const {t} = useTranslation()
  const navigate = useNavigate();
  const map = [
    {
      id: 1,
      message: t("please"),
      name: "name",
      label: t("name"),
      value: props.last_name,
      setname1: props.setName,
      type: "text",
      placeholder: t("enterName"),
    },
    {
      id: 2,
      message: t("please"),
      name: "firstname",
      label: t("firstname"),
      value: props.first_name ,
      setname1: props.setFirstname,
      type: "text",
      placeholder: t("enterFirstName"),
    },
    {
      id: 3,
      message:t("please"),
      name: "username",
      label: "Diplom Id",
      value:  props.username ,
      setname1: props.setUsername,
      type: "text",
      placeholder: t("enterDiplom"),
    },
    {
      id: 4,
      message: t("please"),
      name: "password",
      label: t("password"),
      value:  props.password ,
      setname1: props.setPassword,
      type: "password",
      placeholder: t("enterPassword"),
    }
  ];
  const map2 = map.map((a) => (
    <Form.Item
      key={a.id}
      rules={[{ required: true, message: a.message }]}
      name={a.name}
      label={a.label}
    >
      <Input
        value={a.value}
        placeholder={a.placeholder}
        type={a.type}
      />
    </Form.Item>
  ));
  const click=()=>{
    navigate("/")
    // props.SignApp()
  }
  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form_content}>
        <h3>{t("transbank_r")}</h3>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          className="login-form"
          layout="vertical"
        >
          {map2}
          <Button type="primary" htmlType="submit" onClick={click}>
            Continue
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default FormRegistration;
