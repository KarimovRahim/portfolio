import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaTelegramPlane, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import Switch from './components/swintcher';
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import logo from "./assets/logo.png"
import person from "./assets/person.jpg"
import person2 from "./assets/person2.png"
import btn from "./assets/btn.png"
import btn2 from "./assets/btn2.png"
import btn3 from "./assets/btn3.png"
import btn4 from "./assets/btn4.png"
import proj_1 from "./assets/proj_1.png"
import proj_2 from "./assets/proj_2.png"
import proj_3 from "./assets/proj_3.png"

const App = () => {

  // TRANSLATE
  const [lang, setLang] = useState("");
  const { i18n, t } = useTranslation();

  const handleLang = (event) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  // AOS
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-out-back',
      once: true,
      mirror: false,
      offset: 50
    });
  }, []);

  // DARK
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const userTheme = localStorage.getItem('theme');
    const isDarkTheme =
      userTheme === 'dark' ||
      (!userTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setIsDark(isDarkTheme);
  }, []);

  const handleToggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className="w-full flex flex-col m-auto dark:bg-black dark:text-white transition-all duration-500">
      <div className="fixed z-50 w-full h-[70px] bg-gray-100 dark:bg-black border border-solid border-gray-600 flex flex-row justify-center items-center m-auto">
        <div className="w-[1200px] h-[60px] flex flex-row justify-between items-center pl-10 pr-10" data-aos="fade-down" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
          <div className="w-[140px] h-10 flex flex-row justify-between items-center">
            <img src={logo} alt="" className="w-10 h-10 dark:invert dark:brightness-200 transition-all duration-500" />
            <label htmlFor="" className="font-bold text-[20px] text-black dark:text-white transition-colors duration-500">Personal</label>
          </div>
          <div className="w-[440px] flex flex-row justify-between">
            <a href='#about' htmlFor="" className="font-semibold text-[20px] text-black dark:text-white transition-colors duration-500 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">{t("header1")}</a>
            <a href='#skill' htmlFor="" className="font-semibold text-[20px] text-black dark:text-white transition-colors duration-500 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">{t("header2")}</a>
            <a href='#project' htmlFor="" className="font-semibold text-[20px] text-black dark:text-white transition-colors duration-500 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">{t("header3")}</a>
            <a href='#' htmlFor="" className="font-semibold text-[20px] text-black dark:text-white transition-colors duration-500 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">{t("header4")}</a>
          </div>
          <Switch darkChecked={isDark} darkOnchange={handleToggle} />
          <div className="flex flex-row justify-between gap-[30px]">
            <select value={lang} onChange={handleLang}>
              <option className="dark:bg-black" value="en">English</option>
              <option className="dark:bg-black" value="ru">Русский</option>
              <option className="dark:bg-black" value="tj">Точики</option>
            </select>
            <button className="w-[150px] h-10 rounded-[9px] bg-black dark:bg-white dark:text-black text-white font-semibold text-[18px] hover:bg-white hover:text-black hover:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white border-2 border-transparent hover:border-solid transition-all duration-300">
              Resume
            </button>
          </div>
        </div>
      </div>

      <div id='about' className="w-full p-[41px] dark:bg-black flex flex-row bg-[#F8F8F8] justify-between gap-[100px] pt-20 m-auto mb-15" data-aos="fade-up" data-aos-duration="1600" data-aos-easing="ease-out-quart">
        <div className="w-[600px] flex flex-col" data-aos="fade-right" data-aos-duration="1800" data-aos-delay="200">
          <label htmlFor="" className="font-extrabold text-[48px]">
            <span className="font-normal" data-aos="fade-up" data-aos-delay="300">{t("text1")} </span>
            <span className="text-[#000000] dark:text-[white] bg-clip-text" data-aos="zoom-in" data-aos-delay="500">{t("text2")}</span>
            <br />
            <span className="text-[#000000] dark:text-[white] bg-clip-text" data-aos="flip-left" data-aos-delay="700">{t("text3")} </span>
            <span className="font-normal" data-aos="fade-up" data-aos-delay="900">{t("text4")}</span>
            <br />
            <span className="font-normal" data-aos="fade-up" data-aos-delay="1100">{t("text5")} </span>
            <span className="text-[#000000] dark:text-[white] bg-clip-text" data-aos="flip-right" data-aos-delay="1300">{t("text6")}</span>
          </label>
          <label htmlFor="" className="w-[600px] font-normal text-[18px] text-[#71717A] dark:text-gray-400 mt-8 transition-colors duration-500" data-aos="fade-up" data-aos-delay="1500">
            {t("text51")}
          </label>
          <label htmlFor="" className="w-[600px] font-normal text-[18px] text-[#71717A] dark:text-gray-400 mt-6 transition-colors duration-500" data-aos="fade-up" data-aos-delay="1700">
            {t("text52")}
          </label>
          <label htmlFor="" className="w-[600px] font-normal text-[18px] text-[#71717A] dark:text-gray-400 mt-6 transition-colors duration-500" data-aos="fade-up" data-aos-delay="1700">
            {t("text53")}
          </label>
          <div className="w-[320px] flex flex-row justify-between mt-20" data-aos="zoom-in-up" data-aos-delay="1900" data-aos-duration="1400">
            <img src={btn} alt="" className="w-14 h-14 bg-[#FFFFFF] dark:invert dark:brightness-150 dark:saturate-80 transition-all duration-500 hover:scale-110" />
            <img src={btn2} alt="" className="w-14 h-14 border-[2.7px] border-solid border-[#FFFFFF] rounded-sm invert brightness-150 saturate-80 dark:filter-none transition-all duration-500 hover:scale-110" />
            <img src={btn3} alt="" className="w-14 h-14 bg-[#FFFFFF] dark:invert dark:brightness-150 dark:saturate-80 transition-all duration-500 hover:scale-110" />
            <img src={btn4} alt="" className="w-14 h-14 bg-[#FFFFFF] dark:invert dark:brightness-150 dark:saturate-80 transition-all duration-500 hover:scale-110" />
          </div>
        </div>
        <img src={person} data-aos="zoom-in-right" data-aos-duration="2000" data-aos-delay="400"
          className="w-[500px] h-[600px] mt-8 dark:hue-rotate-180t ransition-all duration-500" />
      </div>

      <div id='skill' className="w-full py-[81px] border-t border-[#E5E7EB] dark:border-[#374151] bg-white dark:bg-black transition-all duration-500">
        <div className="w-[1100px] mx-auto">
          <label className="font-light text-[36px] text-[#1F2937] hover:scale-110 tracking-widest uppercase opacity-95 block mb-20 hover:text-[#4a5566] dark:hover:text-[#D1D5DB] transition-all duration-700 cursor-default"
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="100">
            {t("text8")} <span className="font-black bg-linear-to-r from-black to-gray-800 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">{t("text9")}</span>
          </label>

          <div className="grid grid-cols-4 gap-12">
            <div className="group"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-easing="ease-out-back"
              data-aos-delay="200">
              <div className="bg-white dark:bg-[#111827] rounded-2xl p-8 border border-[#E5E7EB] dark:border-[#374151] hover:border-[#E34F26] dark:hover:border-[#E34F26] hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 cursor-default shadow-sm flex flex-col items-center">
                <div className="text-[#E34F26] text-4xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400">
                  <FaHtml5 size={64} />
                </div>
                <label className="font-normal text-[28px] text-[#374151] dark:text-[#E5E7EB] group-hover:text-[#E34F26] transition-all duration-400 cursor-default block">
                  HTML
                </label>
                <label className="font-light text-[18px] text-[#6B7280] dark:text-[#9CA3AF] mt-4 group-hover:text-[#374151] dark:group-hover:text-[#E5E7EB] group-hover:opacity-100 transition-all duration-500 cursor-default block text-center">
                  Структура и семантика веб-страниц
                </label>
              </div>
            </div>

            <div className="group"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-easing="ease-out-back"
              data-aos-delay="400">
              <div className="bg-white dark:bg-[#111827] rounded-2xl p-8 border border-[#E5E7EB] dark:border-[#374151] hover:border-[#1572B6] dark:hover:border-[#1572B6] hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 cursor-default shadow-sm flex flex-col items-center">
                <div className="text-[#1572B6] text-4xl mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-400">
                  <FaCss3Alt size={64} />
                </div>
                <label className="font-normal text-[28px] text-[#374151] dark:text-[#E5E7EB] group-hover:text-[#1572B6] transition-all duration-400 cursor-default block">
                  CSS
                </label>
                <label className="font-light text-[18px] text-[#6B7280] dark:text-[#9CA3AF] mt-4 group-hover:text-[#374151] dark:group-hover:text-[#E5E7EB] group-hover:opacity-100 transition-all duration-500 cursor-default block text-center">
                  Стилизация и визуальное оформление
                </label>
              </div>
            </div>

            <div className="group"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-easing="ease-out-back"
              data-aos-delay="600">
              <div className="bg-white dark:bg-[#111827] rounded-2xl p-8 border border-[#E5E7EB] dark:border-[#374151] hover:border-[#F7DF1E] dark:hover:border-[#F7DF1E] hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 cursor-default shadow-sm flex flex-col items-center">
                <div className="text-[#F7DF1E] text-4xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-400">
                  <FaJs size={64} />
                </div>
                <label className="font-normal text-[28px] text-[#374151] dark:text-[#E5E7EB] group-hover:text-[#F7DF1E] transition-all duration-400 cursor-default block">
                  JavaScript
                </label>
                <label className="font-light text-[18px] text-[#6B7280] dark:text-[#9CA3AF] mt-4 group-hover:text-[#374151] dark:group-hover:text-[#E5E7EB] group-hover:opacity-100 transition-all duration-500 cursor-default block text-center">
                  Интерактивность и логика веб-приложений
                </label>
              </div>
            </div>

            <div className="group"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-easing="ease-out-back"
              data-aos-delay="800">
              <div className="bg-white dark:bg-[#111827] rounded-2xl p-8 border border-[#E5E7EB] dark:border-[#374151] hover:border-[#61DAFB] dark:hover:border-[#61DAFB] hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 cursor-default shadow-sm flex flex-col items-center">
                <div className="text-[#61DAFB] text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-400">
                  <FaReact size={64} />
                </div>
                <label className="font-normal text-[28px] text-[#374151] dark:text-[#E5E7EB] group-hover:text-[#61DAFB] transition-all duration-400 cursor-default block">
                  React
                </label>
                <label className="font-light text-[18px] text-[#6B7280] dark:text-[#9CA3AF] mt-4 group-hover:text-[#374151] dark:group-hover:text-[#E5E7EB] group-hover:opacity-100 transition-all duration-500 cursor-default block text-center">
                  Современные пользовательские интерфейсы
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row justify-center gap-[50px] mt-15px mb-15 m-auto dark:bg-linear-to-t dark:from-black dark:to-gray-900 transition-all duration-500">
        <img
          src={person2}
          alt=""
          className="w-[526px] mt-15 dark:invert dark:brightness-120"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        />
        <div className="w-[610px] flex flex-col mt-15">
          <label
            htmlFor=""
            className="font-normal text-[48px] text-[#000000] mt-5 mb-10 dark:text-white transition-colors duration-500"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            {t("text21")} <span className="font-extrabold"> {t("text22")}</span>
          </label>
          <label
            htmlFor=""
            className="font-normal text-[16px] text-[#71717A] mb-5 dark:text-gray-400 mt-6 transition-colors duration-500"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("text23")}
          </label>
          <label
            htmlFor=""
            className="font-normal text-[16px] text-[#71717A] mb-5 dark:text-gray-400 mt-6 transition-colors duration-500"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {t("text24")}
          </label>
          <label
            htmlFor=""
            className="font-normal text-[16px] text-[#71717A] dark:text-gray-400 mt-6 transition-colors duration-500"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {t("text25")}
          </label>
        </div>
      </div>
      <div id='project' className="w-full flex flex-col items-center bg-[#000000] transition-all duration-500">
        <label
          htmlFor=""
          className="flex flex-row font-normal text-[48px] text-[white] mt-20 mb-10 transition-colors duration-500"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          {t("text26")} <span className="font-extrabold ml-4"> {t("text27")}</span>
        </label>
        <div className="w-[1250px] m-auto flex flex-col gap-[100px] mb-[120px] mt-[70px]">
          <div
            className="w-full flex flex-row justify-center items-center gap-[150px]"
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-delay="200"
          >
            <img src={proj_1} alt="" className="w-[530px] h-[400px] rounded-[14px] shadow-2xl hover:scale-105 transition-transform duration-500" />
            <div className="w-[580px] flex flex-col gap-7">
              <label htmlFor="" className="font-extrabold text-[48px] text-[white] hover:text-gray-300 transition-colors duration-300">{t("text28")}</label>
              <label htmlFor="" className="font-bold text-[32px] text-[white] hover:text-gray-300 transition-colors duration-300">{t("text29")}</label>
              <label htmlFor="" className="w-[580px] flex flex-col font-normal text-[16px] text-[#71717A] hover:text-gray-400 transition-colors duration-300">{t("text30")} <span className="mt-[9px]">{t("text30.1")}</span> <span className="mt-[9px]">{t("text30.2")}</span></label>
            </div>
          </div>
          <div
            className="w-full flex flex-row justify-center items-center gap-[150px]"
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-delay="400"
          >
            <div className="w-[580px] flex flex-col gap-7">
              <label htmlFor="" className="font-extrabold text-[48px] text-[white] hover:text-gray-300 transition-colors duration-300">{t("text31")}</label>
              <label htmlFor="" className="font-bold text-[32px] text-[white] hover:text-gray-300 transition-colors duration-300">{t("text33")}</label>
              <label htmlFor="" className="w-[580px] flex flex-col font-normal text-[16px] text-[#71717A] hover:text-gray-400 transition-colors duration-300">{t("text32")} <span className="mt-[9px]">{t("text32.1")}</span> <span className="mt-[9px]">{t("text32.2")}</span></label>
            </div>
            <img src={proj_2} alt="" className="w-[530px] h-[400px] rounded-[14px] shadow-2xl hover:scale-105 transition-transform duration-500" />
          </div>
          <div
            className="w-full flex flex-row justify-center items-center gap-[150px]"
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-delay="600"
          >
            <img src={proj_3} alt="" className="w-[530px] h-[400px] rounded-[14px] shadow-2xl hover:scale-105 transition-transform duration-500" />
            <div className="w-[580px] flex flex-col gap-7">
              <label htmlFor="" className="font-extrabold text-[48px] text-[white] hover:text-gray-300 transition-colors duration-300">{t("text34")} <span className="font-light text-[18px]">{t("text34.1")}</span> </label>
              <label htmlFor="" className="font-bold text-[32px] text-[white] hover:text-gray-300 transition-colors duration-300">{t("text35")}</label>
              <label htmlFor="" className="w-[580px] flex flex-col font-normal text-[16px] text-[#71717A] hover:text-gray-400 transition-colors duration-300">{t("text36")} <br /> <span className="mt-[9px]">{t("text36.1")}</span></label>

            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center transition-all duration-500">
        <div className="w-[1250px] mt-20 mb-20 flex flex-col items-center">
          <div className="w-full flex flex-row justify-center gap-[50px] mb-15 m-auto dark:bg-linear-to-t dark:from-black dark:to-gray-900 transition-all duration-500">
            <div className="w-[610px] flex flex-col mt-15">
              <label
                htmlFor=""
                className="font-normal text-[48px] text-[#000000] mt-5 mb-10 dark:text-white transition-colors duration-500"
                data-aos="fade-down"
                data-aos-duration="1200"
              >
                {t("text10")} <span className="font-extrabold"> {t("text37")}</span>
              </label>
              <label
                htmlFor=""
                className="font-normal text-[16px] text-[#71717A] mb-5 dark:text-gray-400 mt-6 transition-colors duration-500"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {t("text38")}
              </label>
              <label
                htmlFor=""
                className="font-normal text-[16px] text-[#71717A] mb-5 dark:text-gray-400 mt-6 transition-colors duration-500"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {t("text39")}
              </label>
              <label
                htmlFor=""
                className="font-normal text-[16px] text-[#71717A] dark:text-gray-400 mt-6 transition-colors duration-500"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                {t("text40")}
              </label>
            </div>
            <img
              src={person2}
              alt=""
              className="w-[526px] mt-15 dark:invert dark:brightness-120"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            />
          </div>

        </div>
      </div>

      <div className="w-full py-[81px] border-t border-[#E5E7EB] dark:border-[#374151] bg-white dark:bg-black transition-all duration-500">
        <div className="w-[1100px] mx-auto">
          <label className="font-light text-[36px] text-[#1F2937] dark:text-[#E5E7EB] tracking-widest uppercase opacity-95 block mb-20 hover:text-[#374151] dark:hover:text-[#D1D5DB] transition-all duration-700 cursor-default"
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="100">
            {t("text41")}
          </label>

          <div className="grid grid-cols-4 gap-12">
            <div className="group shadow-lg rounded-2xl"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-easing="ease-out-back"
              data-aos-delay="200">
              <div className="bg-[#FbFbFb] dark:bg-[#111827] rounded-2xl p-8 border border-[#E5E7EB] dark:border-[#374151] hover:border-[#25D366] dark:hover:border-[#25D366] hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 cursor-default shadow-sm">
                <div className="text-[#25D366] text-4xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400">
                  <FaWhatsapp size={40} />
                </div>
                <label className="font-normal text-[28px] text-[#374151] dark:text-[#E5E7EB] group-hover:text-[#25D366] transition-all duration-400 cursor-default block">
                  {t("text42")}
                </label>
                <label className="font-light text-[18px] text-[#6B7280] dark:text-[#9CA3AF] mt-4 group-hover:text-[#374151] dark:group-hover:text-[#E5E7EB] group-hover:opacity-100 transition-all duration-500 cursor-default block">
                  {t("text43")}
                </label>
              </div>
            </div>

            <div className="group shadow-lg rounded-2xl"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-easing="ease-out-back"
              data-aos-delay="400">
              <div className="bg-[#FbFbFb] dark:bg-[#111827] rounded-2xl p-8 border border-[#E5E7EB] dark:border-[#374151] hover:border-[#0088CC] dark:hover:border-[#0088CC] hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 cursor-default shadow-sm">
                <div className="text-[#0088CC] text-4xl mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-400">
                  <FaTelegramPlane size={40} />
                </div>
                <label className="font-normal text-[28px] text-[#374151] dark:text-[#E5E7EB] group-hover:text-[#0088CC] transition-all duration-400 cursor-default block">
                  {t("text44")}
                </label>
                <label className="font-light text-[18px] text-[#6B7280] dark:text-[#9CA3AF] mt-4 group-hover:text-[#374151] dark:group-hover:text-[#E5E7EB] group-hover:opacity-100 transition-all duration-500 cursor-default block">
                  {t("text45")}
                </label>
              </div>
            </div>

            <div className="group shadow-lg rounded-2xl"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-easing="ease-out-back"
              data-aos-delay="600">
              <div className="bg-[#FbFbFb] dark:bg-[#111827] rounded-2xl p-8 border border-[#E5E7EB] dark:border-[#374151] hover:border-[#E4405F] dark:hover:border-[#E4405F] hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 cursor-default shadow-sm">
                <div className="text-[#E4405F] text-4xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-400">
                  <FaInstagram size={40} />
                </div>
                <label className="font-normal text-[28px] text-[#374151] dark:text-[#E5E7EB] group-hover:text-[#E4405F] transition-all duration-400 cursor-default block">
                  {t("text46")}
                </label>
                <label className="w-auto font-light text-[16px] text-[#6B7280] dark:text-[#9CA3AF] mt-4 group-hover:text-[#374151] dark:group-hover:text-[#E5E7EB] group-hover:opacity-100 transition-all duration-500 cursor-default block">
                  {t("text47")}
                </label>
              </div>
            </div>

            <div className="group shadow-lg rounded-2xl"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-easing="ease-out-back"
              data-aos-delay="800">
              <div className="bg-[#FbFbFb] dark:bg-[#111827] rounded-2xl p-8 border border-[#E5E7EB] dark:border-[#374151] hover:border-[#333333] dark:hover:border-[#f0f6fc] hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 cursor-default shadow-sm">
                <div className="text-[#333333] dark:text-[#f0f6fc] text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-400">
                  <FaGithub size={40} />
                </div>
                <label className="font-normal text-[28px] text-[#374151] dark:text-[#E5E7EB] group-hover:text-[#333333] dark:group-hover:text-[#f0f6fc] transition-all duration-400 cursor-default block">
                  {t("text48")}
                </label>
                <label className="font-light text-[18px] text-[#6B7280] dark:text-[#9CA3AF] mt-4 group-hover:text-[#374151] dark:group-hover:text-[#E5E7EB] group-hover:opacity-100 transition-all duration-500 cursor-default block">
                  {t("text49")}
                </label>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="1000">

            <label className="font-thin text-[22px] text-[#6B7280] dark:text-[#9CA3AF] italic mt-16 tracking-wide block hover:text-[#374151] dark:hover:text-[#E5E7EB] hover:opacity-100 transition-all duration-600 cursor-default">
              {t("text50")}
            </label>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App