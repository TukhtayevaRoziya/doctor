import React from "react";

import styles from "./WeeklyDoctors.module.css";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import img2 from "../../assets/corona1.webp";
import img3 from "../../assets/carousel4.png";
import img4 from "../../assets/carousel3.jpg";
import img5 from "../../assets/carousel2.jpg";
import img6 from "../../assets/carousel5.png";
import img7 from "../../assets/carousel6.png";
import carona2 from "../../assets/corona2.jpg";
import carona3 from "../../assets/corona3.jpg";
import carona4 from "../../assets/corona4.jpg";
import carona5 from "../../assets/corona5.jpg";
import carona6 from "../../assets/corona6.jpg";

import maymun1 from "../../assets/maymun1.jpg";
import maymun2 from "../../assets/maymun2.jpg";
import maymun3 from "../../assets/maymun3.jpg";
import maymun4 from "../../assets/maymun4.jpg";
import maymun5 from "../../assets/maymun5.jpg";
import maymun6 from "../../assets/maymun6.jpg";

import sariq1 from "../../assets/yellow1.jpg";
import sariq2 from "../../assets/yellow2.jpg";
import sariq3 from "../../assets/yellow3.jpg";
import sariq4 from "../../assets/yellow4.jpg";
import sariq5 from "../../assets/yellow5.jpg";
import sariq6 from "../../assets/yellow6.jpeg";

import tuberkulyoz1 from "../../assets/tuberkulyoz1.jpg";
import tuberkulyoz2 from "../../assets/tuberkulyoz2.jpg";
import tuberkulyoz3 from "../../assets/tuberkulyoz3.jpg";
import tuberkulyoz4 from "../../assets/tuberkulyoz4.jpg";
import tuberkulyoz5 from "../../assets/tuberkulyoz5.jpg";
import tuberkulyoz6 from "../../assets/tuberkulyoz6.jpg";
import { useTranslation } from 'react-i18next';

function TabsImg({ come, fix, dead, img, name }) {
  const {t}=useTranslation()

  return (
    <div
      className={styles.tabs__img}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div>
        <p> {come}{t("year")}</p>
        <h1>{name}</h1>
        <h2>
          <strong>{t("recovered")}</strong>
          {fix}
        </h2>
        <h2>
          <strong>{t("death")}</strong> {dead}
        </h2>
      </div>
    </div>
  );
}

function TabsImgBody1() {
  const {t}=useTranslation()

  return (
    <div className={styles.tabs__img__body}>
      <TabsImg
        come={2019}
        name={t("miniMenu2")}
        fix={" 96,19%"}
        dead={107}
        img={img2}
      />
      <TabsImg
        come={"---- "}
        name={t("miniMenu3")}
        fix={" 96,19%"}
        dead={107}
        img={img5}
      />
      <TabsImg
        come={"---- "}
        name={t("miniMenu4")}
        fix={" 96,19%"}
        dead={107}
        img={img3}
      />
      <TabsImg
        come={"---- "}
        name={t("miniMenu5")}
        fix={" 96,19%"}
        dead={107}
        img={img4}
      />
      <TabsImg
        come={"----"}
        name={t("miniMenu6")}
        fix={"96,19%"}
        dead={107}
        img={img6}
      />
      <TabsImg
        come={"---- "}
        name={"Tulyaremiya "}
        fix={"96,19%"}
        dead={107}
        img={img7}
      />
    </div>
  );
}
function TabsImgBody2() {
  return (
    <div className={styles.tabs__img__body}>
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={img2} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={carona2} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={carona3} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={carona4} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={carona5} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={carona6} />
    </div>
  );
}
function TabsImgBody3() {
  return (
    <div className={styles.tabs__img__body}>
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={maymun1} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={maymun2} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={maymun3} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={maymun4} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={maymun5} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={maymun6} />
    </div>
  );
}

function TabsImgBody4() {
  return (
    <div className={styles.tabs__img__body}>
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={sariq1} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={sariq2} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={sariq3} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={sariq4} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={sariq5} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={sariq6} />
    </div>
  );
}
function TabsImgBody5() {
  return (
    <div className={styles.tabs__img__body}>
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={tuberkulyoz1} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={tuberkulyoz2} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={tuberkulyoz3} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={tuberkulyoz4} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={tuberkulyoz5} />
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={tuberkulyoz6} />
    </div>
  );
}

const WeeklyDoctors = () => {
  const {t}=useTranslation()

  return (
    <div className={styles.body} id='diseases'>
      <h1 className={styles.title}>{t("about")}</h1>
      <p className={styles.text}>
        {t('aboutText')}
      </p>
      <div className={styles.tabs}>
        <div className={styles.tabs__navbar + ' tabs'}>
          <NavLink to={"/"}>{t("miniMenu")}</NavLink>
          <NavLink to={"/corona"}>{t("miniMenu2")}</NavLink>
          <NavLink to={"/maymun"}>{t("miniMenu3")}</NavLink>
          <NavLink to={"/parenxima"}>{t("miniMenu4")}</NavLink>
          <NavLink to={"/tuberkulyoz"}>{t("miniMenu5")}</NavLink>
        </div>
        <Routes>
          <Route index exact element={<TabsImgBody1 />} />
          <Route path="corona" element={<TabsImgBody2 />} />
          <Route path="maymun" element={<TabsImgBody3 />} />
          <Route path="parenxima" element={<TabsImgBody4 />} />
          <Route path="tuberkulyoz" element={<TabsImgBody5 />} />
        </Routes>
      </div>
    </div>
  );
};

export default WeeklyDoctors;
