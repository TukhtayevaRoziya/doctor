/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./Doctors.css"
import { useTranslation } from 'react-i18next';
import img1 from "../../accses/MainHeader/doktor1.png"
import img2 from "../../accses/MainHeader/doktor2.png"
import img3 from "../../accses/MainHeader/doktor3.png"
import img4 from "../../accses/MainHeader/doktor4.png"
import { FacebookFilled, InstagramFilled } from '@ant-design/icons';
export const Doctors = () => {
    const { t } = useTranslation()
    return (
        <div className={'Doctors'}>
            <h1>{t("contact_r")}</h1>
            <h4>{t("menuContact1")}</h4>
            <div className="card__collection clear-fix">
                <div className="cards cards--three">
                    <img src={img2} className="img-responsive" alt="" />
                    <h2>Dr. Charlie Herwitz</h2>
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p>Anaesthetic </p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><a href="https://www.facebook.com/campaign/landing.php?campaign_id=1635645080&extra_1=s%7Cc%7C313665994039%7Ce%7Cfacebook%20sign%20in%7C&placement=&creative=313665994039&keyword=facebook%20sign%20in&partner_id=googlesem&extra_2=campaignid%3D1635645080%26adgroupid%3D61402567854%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-4265269489%26loc_physical_ms%3D9075972%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwtcCVBhA0EiwAT1fY7zwwxLeO9390VnGUarqwnk5WG0PF1ROEdvR-rjnw1TQBFFSjmLsL6hoCeCkQAvD_BwE"><FacebookFilled /></a></li>
                        <li> <a href="https://www.instagram.com/accounts/login/"><InstagramFilled /></a></li>
                    </ul>
                </div>
                <div className="cards cards--three">
                    <img src={img1} className="img-responsive" alt="" />
                    <h2>Dr. Aspen Calzoni</h2>
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p>Cardiology </p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><a href="https://www.facebook.com/campaign/landing.php?campaign_id=1635645080&extra_1=s%7Cc%7C313665994039%7Ce%7Cfacebook%20sign%20in%7C&placement=&creative=313665994039&keyword=facebook%20sign%20in&partner_id=googlesem&extra_2=campaignid%3D1635645080%26adgroupid%3D61402567854%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-4265269489%26loc_physical_ms%3D9075972%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwtcCVBhA0EiwAT1fY7zwwxLeO9390VnGUarqwnk5WG0PF1ROEdvR-rjnw1TQBFFSjmLsL6hoCeCkQAvD_BwE"><FacebookFilled /></a></li>
                        <li> <a href="https://www.instagram.com/accounts/login/"><InstagramFilled /></a></li>
                    </ul>
                </div>
                <div className="cards cards--three">
                    <img src={img3} className="img-responsive" alt="" />
                    <h2>Dr. Alfonso Rosser</h2>
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p>Orthopedic </p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li> <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1635645080&extra_1=s%7Cc%7C313665994039%7Ce%7Cfacebook%20sign%20in%7C&placement=&creative=313665994039&keyword=facebook%20sign%20in&partner_id=googlesem&extra_2=campaignid%3D1635645080%26adgroupid%3D61402567854%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-4265269489%26loc_physical_ms%3D9075972%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwtcCVBhA0EiwAT1fY7zwwxLeO9390VnGUarqwnk5WG0PF1ROEdvR-rjnw1TQBFFSjmLsL6hoCeCkQAvD_BwE"><FacebookFilled /></a></li>
                        <li> <a href="https://www.instagram.com/accounts/login/"><InstagramFilled /></a></li>
                    </ul>
                </div>
                <div className="cards cards--three">
                    <img src={img4} className="img-responsive" alt="" />
                    <h2>Dr. Gustavo Press</h2>
                    <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p>Anaesthetic </p>
                    </span>
                    <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                    </span>
                    <span className="cards--three__circle"></span>
                    <ul className="cards--three__list">
                        <li><a href="https://www.facebook.com/campaign/landing.php?campaign_id=1635645080&extra_1=s%7Cc%7C313665994039%7Ce%7Cfacebook%20sign%20in%7C&placement=&creative=313665994039&keyword=facebook%20sign%20in&partner_id=googlesem&extra_2=campaignid%3D1635645080%26adgroupid%3D61402567854%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-4265269489%26loc_physical_ms%3D9075972%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwtcCVBhA0EiwAT1fY7zwwxLeO9390VnGUarqwnk5WG0PF1ROEdvR-rjnw1TQBFFSjmLsL6hoCeCkQAvD_BwE"></a> <FacebookFilled /></li>
                        <li> <a href="https://www.instagram.com/accounts/login/"><InstagramFilled /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
