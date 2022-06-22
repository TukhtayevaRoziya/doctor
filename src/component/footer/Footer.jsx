import React from 'react'
import style from "./Footer.module.css"
import logo from "../../accses/MainHeader/logo.png"
import tel from "../../accses/MainHeader/tel.png"
import email from "../../accses/MainHeader/email.png"
import f from "../../accses/MainHeader/f.png"
import i from "../../accses/MainHeader/i.png"
import l from "../../accses/MainHeader/l.png"
import chiziq from "../../accses/MainHeader/chiziq.png"
import { useTranslation } from 'react-i18next';
export const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className={style.Footer}>
      <div className={style.block1}>
        <img src={logo} alt="" />
        <p>10 New Town Street, V2 5NW, Newstate, USA.</p>
        <a href="tel:+88(019)24-184 461"><img src={tel} alt="rasm bor edi!" /> +88(019)24-184 461</a>
        <a href="mailto: shovasatkhira@gmail.com"><img src={email} alt="rasm bor edi!" /> shovasatkhira@gmail.com</a>
      </div>
      <div className={style.block1}>
        <h1>{t("menuContact2")}</h1>
        <a href="https://termify.io/privacy-policy-generator?gclid=Cj0KCQjw2MWVBhCQARIsAIjbwoMMqx_5BYY9IGdA06ILIMkAB326rMtj-iquLkmdVjbsjKQV2jsnpNUaAttSEALw_wcB">{t("menuContact3")}</a>
        <a href="https://www.iubenda.com/en/privacy-and-cookie-policy-generator?utm_source=adwords&utm_medium=ppc&utm_campaign=aw_general_row&utm_term=cookie%20policy&utm_content=602564330290&gclid=Cj0KCQjw2MWVBhCQARIsAIjbwoMppYDhFOCwhD1g469E-UJpKB7OLGhEt7KJca420atj1RgKsuoNWTIaAtR3EALw_wcB">Cookie Policy</a>
        <a href="#dostavka">{t("menu2Contact1")}</a>
      </div>
      <div className={style.block1}>
        <h1>{t("navbar1")}</h1>
        <a href="#aksiya">{t("navbar1")}</a>
        <a href="#service">{t("navbar2")}</a>
        <a href="#diseases">{t("navbar3")}</a>
        <a href="#types">{t("navbar4")}</a>
        <a href="#corona">{t("navbar5")}</a>
      </div>


      <div className={style.block2}>
      <h1>{t("menu2Contact2")}</h1>
<a href="/" className={style.a}>{t("menu2Contact3")}</a>
<a href="/" className={style.a}>FAQ</a>

<a className={style.network} href="https://www.facebook.com/campaign/landing.php?campaign_id=1635645080&extra_1=s%7Cc%7C313665994039%7Ce%7Cfacebook%20sign%20in%7C&placement=&creative=313665994039&keyword=facebook%20sign%20in&partner_id=googlesem&extra_2=campaignid%3D1635645080%26adgroupid%3D61402567854%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-4265269489%26loc_physical_ms%3D9075972%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwtcCVBhA0EiwAT1fY7zwwxLeO9390VnGUarqwnk5WG0PF1ROEdvR-rjnw1TQBFFSjmLsL6hoCeCkQAvD_BwE">
<img src={f} alt="" />
</a>
<a className={style.network}  href="https://www.instagram.com/accounts/login/">
<img src={i} alt="" />
</a>
<a className={style.network}  href="https://www.linkedin.com/in/robiya-to-xtayeva-5a1676242/">
<img src={l} alt="" />
</a>
      </div>
      <img src={chiziq} alt="" className={style.lien} />
      <p  className={style.title}> Copyright 2022 The Robiya All Rights Reserved.</p>
    </div>
  )
}
