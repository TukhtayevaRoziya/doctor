import React from 'react'
import style from "./homeHeader.module.css"
import doctor from "../../accses/MainHeader/doctor.png"
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
export const HomeHeader = () => {
  const { t } = useTranslation();

  return (
    <div className={style.HomeHeader}>
       <div className={style.Block}>
      {" "}
      <div className={style.Block__Title}>
      <h1>{t("homapage_r")}</h1>
      <p>{t("ourproject")}</p>
        <button
          type="button"
          className={style.SignUp}
        >
          <NavLink to="signUp">
        {t("transbank_r")}
          </NavLink>
        </button>
      </div>
      <img
        src={doctor}
        alt="rasm bor edi"
      />
    </div>
    </div> 
  )
}