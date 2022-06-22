import React from 'react'
import style from "./Services.module.css"
import kitob from "../../accses/MainHeader/kitob.png"
import odam from "../../accses/MainHeader/odam.png"
import naushnik from "../../accses/MainHeader/naushnik.png"
import yurak from "../../accses/MainHeader/yurak.png"
import soat from "../../accses/MainHeader/soat.png"
import yetti from "../../accses/MainHeader/yetti.png"
import { useTranslation } from 'react-i18next';
export const Service = () => {
  const {t}=  useTranslation()
    const map = [
        { id: 1, img: kitob, title: t("transbanktitle_r"), p: "Semper integer est quis leo, nunc. Quis lectus amet aenean massa turpis senectus " },
        { id: 2, img: odam, title: t("poliknika_r"), p: "Semper integer est quis leo, nunc. Quis lectus amet aenean massa turpis senectus " },
        { id: 3, img: naushnik, title: t("poliknikaraqami_r"), p: "Semper integer est quis leo, nunc. Quis lectus amet aenean massa turpis senectus " },
        { id: 5, img: yurak, title: t("transbankfiliali_r"), p: "Semper integer est quis leo, nunc. Quis lectus amet aenean massa turpis senectus " },
        { id: 6, img: soat, title: t("filialhaqida_r"), p: "Semper integer est quis leo, nunc. Quis lectus amet aenean massa turpis senectus " },
        { id: 7, img: yetti, title: t("yangilipage_r"), p: "Semper integer est quis leo, nunc. Quis lectus amet aenean massa turpis senectus " },
    ]
    const map2 = map.map(a => <div className={style.card1} key={a.id} >
        <img src={a.img} alt="" />
        <div className={style.card_block}>
            <h2>{a.title}</h2>
            <p>{a.p}</p>
        </div>
        <div className={style.go_corner}>
            <div className={style.go_arrow}>

            </div>
        </div>
    </div>)
    return (
        <div className={style.Service} id="service">
            <h1>{t("menu2ContactButton")}</h1>
            <h6>Semper integer est quis leo, nunc. Quis lectus amet aenean massa turpis senectus pulvinar. Pharetra gravida volutpat faucibus faucibus.</h6>
            <div className={style.container}>
 {map2}
            </div>
           
        </div >
    )
}
