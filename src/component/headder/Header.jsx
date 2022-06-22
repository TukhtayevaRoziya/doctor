import React, { useState } from "react";
import style from "./header.module.css";
import logo from "../../accses/MainHeader/logo.png";
import { Drawer } from "antd";
import i18n from './../../i18';
import { useTranslation } from "react-i18next";
import { AlignLeftOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const [visible, setVisible] = useState(false);
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);
  const showDrawer = () => {
    setVisible(true);
  };
  const { t } = useTranslation();
  let navigate = useNavigate();

  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
    console.log(event.target.value);
  };
  const onClose = () => {
    setVisible(false);
  };
  const click = () => {
    navigate("login")
  }
  return (
    <>
      <Drawer placement="right" onClose={onClose} visible={visible}>
        <div className={style.Drow_Menu}>
          <a onClick={onClose} href="#aksiya">{t("navbar1")}</a>
          <a onClick={onClose} href="#service">{t("navbar2")}</a>
          <a onClick={onClose} href="#diseases">{t("navbar3")}</a>
          <a onClick={onClose} href="#types">{t("navbar4")}</a>
          <a onClick={onClose} href="#corona">{t("navbar5")}</a>
          <button>
            <NavLink to="login">Sign up</NavLink>
          </button>
        </div>
      </Drawer>
      <div className={style.Header}>
        <img src={logo} alt="" />

        <div className={style.block}>
          {/* <img
          onClick={showDrawer}
          src={drow2}
          alt=""
          className={style.drowimgr}
        /> */}

          <a href="#aksiya">{t("navbar1")}</a>
          <a href="#service">{t("navbar2")}</a>
          <a href="#diseases">{t("navbar3")}</a>
          <a href="#types">{t("navbar4")}</a>
          <a href="#corona">{t("navbar5")}</a>
        </div>
        <div className={style.Login}>
          <select name="lang" value={lang} onChange={handleChange}>
            <option value="uz">UZ</option>
            <option value="eng">ENG</option>
          </select>
          <button onClick={click} className={style.Block__2}>Sign up</button>
        </div>
        <p className={style.dropclose} onClick={showDrawer}><AlignLeftOutlined /></p>
      </div>
    </>
  );
};
