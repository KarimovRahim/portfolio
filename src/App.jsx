import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaTelegramPlane, FaInstagram, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import Switch from './components/swintcher';
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import logo from "./assets/logo.png"
import person from "./assets/person.jpg"
import person2 from "./assets/person2.png"
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

  // MOBILE MENU
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full flex flex-col m-auto dark:bg-black dark:text-white transition-all duration-500 overflow-x-hidden">
      <div className="fixed z-50 w-full h-[70px] bg-gray-100 dark:bg-black border border-solid border-gray-600 flex flex-row justify-center items-center m-auto">
        <div className="w-[1200px] h-[60px] flex flex-row justify-between items-center pl-4 2xs:pl-6 lg:pl-10 pr-4 2xs:pr-6 lg:pr-10" data-aos="fade-down" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
          <div className="w-[140px] h-10 flex flex-row justify-between items-center">
            <img src={logo} alt="" className="w-8 h-8 2xs:w-10 2xs:h-10 dark:invert dark:brightness-200 transition-all duration-500" />
            <label htmlFor="" className="font-bold text-[16px] 2xs:text-[18px] lg:text-[20px] text-black dark:text-white transition-colors duration-500">Personal</label>
          </div>

          <div className="hidden lg:flex w-[440px] flex-row justify-between">
            <a href='#about' htmlFor="" className="font-semibold text-[20px] text-black dark:text-white transition-colors duration-500 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">{t("header1")}</a>
            <a href='#skill' htmlFor="" className="font-semibold text-[20px] text-black dark:text-white transition-colors duration-500 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">{t("header2")}</a>
            <a href='#project' htmlFor="" className="font-semibold text-[20px] text-black dark:text-white transition-colors duration-500 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">{t("header3")}</a>
            <a href='#contacts' htmlFor="" className="font-semibold text-[20px] text-black dark:text-white transition-colors duration-500 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">{t("header4")}</a>
          </div>

          <button
            className="lg:hidden text-2xl text-black dark:text-white"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className="flex flex-row justify-between gap-[15px] 2xs:gap-[20px] lg:gap-[30px]">
            <Switch darkChecked={isDark} darkOnchange={handleToggle} />
            <select value={lang} onChange={handleLang} className="text-sm 2xs:text-base">
              <option className="dark:bg-black" value="en">English</option>
              <option className="dark:bg-black" value="ru">Русский</option>
              <option className="dark:bg-black" value="tj">Точики</option>
            </select>
          </div>
        </div>

        <div className={`lg:hidden absolute top-full left-0 w-full bg-gray-100 dark:bg-black border-b border-gray-600 shadow-lg transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
          <div className="flex flex-col p-4 space-y-4">
            <a href='#about' className="font-semibold text-[18px] text-black dark:text-white py-2 border-b border-gray-300 dark:border-gray-600 transition-colors duration-500 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">{t("header1")}</a>
            <a href='#skill' className="font-semibold text-[18px] text-black dark:text-white py-2 border-b border-gray-300 dark:border-gray-600 transition-colors duration-500 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">{t("header2")}</a>
            <a href='#project' className="font-semibold text-[18px] text-black dark:text-white py-2 border-b border-gray-300 dark:border-gray-600 transition-colors duration-500 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">{t("header3")}</a>
            <a href='#contacts' className="font-semibold text-[18px] text-black dark:text-white py-2 transition-colors duration-500 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">{t("header4")}</a>
          </div>
        </div>
      </div>

      <div className="w-full p-4 2xs:p-6 lg:p-[41px] dark:bg-black flex flex-col lg:flex-row bg-[#F8F8F8] justify-between gap-[50px] 2xs:gap-[80px] lg:gap-[100px] pt-24 2xs:pt-28 lg:pt-20 m-auto mb-8 2xs:mb-12 lg:mb-15" data-aos="fade-up" data-aos-duration="1600" data-aos-easing="ease-out-quart">
        <div className="w-full lg:w-[600px] flex flex-col" data-aos="fade-right" data-aos-duration="1800" data-aos-delay="200">
          <label htmlFor="" className="font-extrabold text-[32px] 2xs:text-[40px] lg:text-[48px] leading-tight">
            <span className="font-normal" data-aos="fade-up" data-aos-delay="300">{t("text1")} </span>
            <span className="text-[#000000] dark:text-[white] bg-clip-text" data-aos="zoom-in" data-aos-delay="500">{t("text2")}</span>
            <br />
            <span className="text-[#000000] dark:text-[white] bg-clip-text" data-aos="flip-left" data-aos-delay="700">{t("text3")} </span>
            <span className="font-normal" data-aos="fade-up" data-aos-delay="900">{t("text4")}</span>
            <br />
            <span className="font-normal" data-aos="fade-up" data-aos-delay="1100">{t("text5")} </span>
            <span className="text-[#000000] dark:text-[white] bg-clip-text" data-aos="flip-right" data-aos-delay="1300">{t("text6")}</span>
          </label>
          <label htmlFor="" className="w-full lg:w-[600px] font-normal text-[16px] 2xs:text-[18px] text-[#71717A] dark:text-gray-400 mt-6 2xs:mt-8 transition-colors duration-500" data-aos="fade-up" data-aos-delay="1500">
            {t("text51")}
          </label>
          <label htmlFor="" className="w-full lg:w-[600px] font-normal text-[16px] 2xs:text-[18px] text-[#71717A] dark:text-gray-400 mt-4 2xs:mt-6 transition-colors duration-500" data-aos="fade-up" data-aos-delay="1700">
            {t("text52")}
          </label>
          <label htmlFor="" className="w-full lg:w-[600px] font-normal text-[16px] 2xs:text-[18px] text-[#71717A] dark:text-gray-400 mt-4 2xs:mt-6 transition-colors duration-500" data-aos="fade-up" data-aos-delay="1700">
            {t("text53")}
          </label>
          <div className="w-full max-w-[320px] flex flex-row justify-between mt-12 2xs:mt-16 lg:mt-20" data-aos="zoom-in-up" data-aos-delay="1900" data-aos-duration="1400">
            {/* WhatsApp - номер телефона */}
            <a href="https://wa.me/+992754454004?text=Здравствуйте!%20Пишу%20с%20вашего%20сайта-портфолио" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-12 h-12 dark:bg-[#111827] 2xs:w-14 2xs:h-14 bg-white rounded-2xl text-[#25D366] flex items-center justify-center transition-all duration-500 hover:bg-[#25D366] hover:text-white hover:scale-110 hover:rotate-3 cursor-pointer hover:shadow-xl dark:hover:shadow-2xl shadow-lg">
                <FaWhatsapp className="text-xl 2xs:text-2xl" />
              </div>
            </a>

            {/* Telegram - ссылка на профиль */}
            <a href="https://t.me/KarimovAleks" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-12 h-12 dark:bg-[#111827] 2xs:w-14 2xs:h-14 bg-white rounded-2xl flex items-center text-[#0077b5] hover:text-white justify-center transition-all duration-500 hover:bg-[#0077b5] hover:scale-110 hover:-rotate-3 cursor-pointer shadow-lg">
                <FaTelegramPlane className="text-xl 2xs:text-2xl" />
              </div>
            </a>

            {/* Instagram - ссылка на профиль */}
            <a href="https://instagram.com/rahim_844004" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-12 h-12 dark:bg-[#111827] 2xs:w-14 2xs:h-14 bg-white rounded-2xl flex items-center justify-center transition-all duration-500 hover:text-white hover:bg-linear-to-br hover:from-[#6a2c91] hover:via-[#c13584] hover:to-[#e1306c] text-[#E4405F] hover:scale-110 hover:rotate-6 cursor-pointer shadow-lg">
                <FaInstagram className="text-xl 2xs:text-2xl" />
              </div>
            </a>

            {/* GitHub - ссылка на профиль */}
            <a href="https://github.com/KarimovRahim" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-12 h-12 dark:bg-[#111827] 2xs:w-14 2xs:h-14 bg-white rounded-2xl flex items-center justify-center transition-all duration-500 hover:bg-black dark:hover:bg-black hover:dark:border hover:dark:border-white hover:scale-110 text-black hover:text-white hover:rotate-12 cursor-pointer shadow-lg">
                <FaGithub className="text-xl 2xs:text-2xl" />
              </div>
            </a>
          </div>
          <img src={person} data-aos="zoom-in-right" data-aos-duration="2000" data-aos-delay="400"
            className="w-full max-w-[400px] lg:w-[500px] h-auto lg:h-[600px] mt-[-9px] dark:hue-rotate-180 transition-all duration-500 mx-auto lg:mx-0" />
        </div>

        <div id='skill' className="w-full py-8 2xs:py-12 lg:py-[81px] border-t border-[#E5E7EB] dark:border-[#374151] bg-white dark:bg-black transition-all duration-500">
          <div className="w-full lg:w-[1100px] mx-auto px-4 2xs:px-6 lg:px-0">
            <label className="font-light text-[28px] 2xs:text-[32px] lg:text-[36px] text-[#1F2937] tracking-widest uppercase opacity-95 block mb-12 2xs:mb-16 lg:mb-20 hover:text-[#4a5566] dark:hover:text-[#D1D5DB] transition-all duration-700 cursor-default text-center lg:text-left"
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="100">
              {t("text8")} <span className="font-black bg-linear-to-r from-black to-gray-800 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">{t("text9")}</span>
            </label>

            <div className="grid grid-cols-1 2xs:grid-cols-2 lg:grid-cols-4 gap-6 2xs:gap-8 lg:gap-12">
              <div className="group"
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-easing="ease-out-back"
                data-aos-delay="200">
                <div className="bg-white dark:bg-[#111827] rounded-2xl p-6 2xs:p-8 border border-[#E5E7EB] dark:border-[#374151] hover:border-[#E34F26] dark:hover:border-[#E34F26] hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 cursor-default shadow-sm flex flex-col items-center">
                  <div className="text-[#E34F26] text-3xl 2xs:text-4xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400">
                    <FaHtml5 size={48} className="2xs:w-16 2xs:h-16" />
                  </div>
                  <label className="font-normal text-[24px] 2xs:text-[28px] text-[#374151] dark:text-[#E5E7EB] group-hover:text-[#E34F26] transition-all duration-400 cursor-default block">
                    HTML
                  </label>
                  <label className="font-light text-[16px] 2xs:text-[18px] text-[#6B7280] dark:text-[#9CA3AF] mt-4 group-hover:text-[#374151] dark:group-hover:text-[#E5E7EB] group-hover:opacity-100 transition-all duration-500 cursor-default block text-center">
                    Структура и семантика веб-страниц
                  </label>
                </div>
              </div>

              <div className="group"
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-easing="ease-out-back"
                data-aos-delay="400">
                <div className="bg-white dark:bg-[#111827] rounded-2xl p-6 2xs:p-8 border border-[#E5E7EB] dark:border-[#374151] hover:border-[#1572B6] dark:hover:border-[#1572B6] hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 cursor-default shadow-sm flex flex-col items-center">
                  <div className="text-[#1572B6] text-3xl 2xs:text-4xl mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-400">
                    <FaCss3Alt size={48} className="2xs:w-16 2xs:h-16" />
                  </div>
                  <label className="font-normal text-[24px] 2xs:text-[28px] text-[#374151] dark:text-[#E5E7EB] group-hover:text-[#1572B6] transition-all duration-400 cursor-default block">
                    CSS
                  </label>
                  <label className="font-light text-[16px] 2xs:text-[18px] text-[#6B7280] dark:text-[#9CA3AF] mt-4 group-hover:text-[#374151] dark:group-hover:text-[#E5E7EB] group-hover:opacity-100 transition-all duration-500 cursor-default block text-center">
                    Стилизация и визуальное оформление
                  </label>
                </div>
              </div>

              <div className="group"
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-easing="ease-out-back"
                data-aos-delay="600">
                <div className="bg-white dark:bg-[#111827] rounded-2xl p-6 2xs:p-8 border border-[#E5E7EB] dark:border-[#374151] hover:border-[#F7DF1E] dark:hover:border-[#F7DF1E] hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 cursor-default shadow-sm flex flex-col items-center">
                  <div className="text-[#F7DF1E] text-3xl 2xs:text-4xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-400">
                    <FaJs size={48} className="2xs:w-16 2xs:h-16" />
                  </div>
                  <label className="font-normal text-[24px] 2xs:text-[28px] text-[#374151] dark:text-[#E5E7EB] group-hover:text-[#F7DF1E] transition-all duration-400 cursor-default block">
                    JavaScript
                  </label>
                  <label className="font-light text-[16px] 2xs:text-[18px] text-[#6B7280] dark:text-[#9CA3AF] mt-4 group-hover:text-[#374151] dark:group-hover:text-[#E5E7EB] group-hover:opacity-100 transition-all duration-500 cursor-default block text-center">
                    Интерактивность и логика веб-приложений
                  </label>
                </div>
              </div>

              <div className="group"
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-easing="ease-out-back"
                data-aos-delay="800">
                <div className="bg-white dark:bg-[#111827] rounded-2xl p-6 2xs:p-8 border border-[#E5E7EB] dark:border-[#374151] hover:border-[#61DAFB] dark:hover:border-[#61DAFB] hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 cursor-default shadow-sm flex flex-col items-center">
                  <div className="text-[#61DAFB] text-3xl 2xs:text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-400">
                    <FaReact size={48} className="2xs:w-16 2xs:h-16" />
                  </div>
                  <label className="font-normal text-[24px] 2xs:text-[28px] text-[#374151] dark:text-[#E5E7EB] group-hover:text-[#61DAFB] transition-all duration-400 cursor-default block">
                    React
                  </label>
                  <label className="font-light text-[16px] 2xs:text-[18px] text-[#6B7280] dark:text-[#9CA3AF] mt-4 group-hover:text-[#374151] dark:group-hover:text-[#E5E7EB] group-hover:opacity-100 transition-all duration-500 cursor-default block text-center">
                    Современные пользовательские интерфейсы
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='about' className="w-full flex flex-col lg:flex-row justify-center gap-[30px] 2xs:gap-[40px] lg:gap-[50px] mt-8 2xs:mt-12 lg:mt-15px mb-8 2xs:mb-12 lg:mb-15 m-auto dark:bg-linear-to-t dark:from-black dark:to-gray-900 transition-all duration-500 px-4 2xs:px-6 lg:px-0">
          <img
            src={person2}
            alt=""
            className="w-full max-w-[400px] lg:w-[526px] mt-8 2xs:mt-12 lg:mt-15 dark:invert dark:brightness-120 mx-auto lg:mx-0"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          />
          <div className="w-full lg:w-[610px] flex flex-col mt-8 2xs:mt-12 lg:mt-15">
            <label
              htmlFor=""
              className="font-normal text-[32px] 2xs:text-[40px] lg:text-[48px] text-[#000000] mt-5 mb-6 2xs:mb-8 lg:mb-10 dark:text-white transition-colors duration-500 text-center lg:text-left"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              {t("text21")} <span className="font-extrabold"> {t("text22")}</span>
            </label>
            <label
              htmlFor=""
              className="font-normal text-[14px] 2xs:text-[16px] text-[#71717A] mb-4 2xs:mb-5 dark:text-gray-400 mt-4 2xs:mt-6 transition-colors duration-500 text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t("text23")}
            </label>
            <label
              htmlFor=""
              className="font-normal text-[14px] 2xs:text-[16px] text-[#71717A] mb-4 2xs:mb-5 dark:text-gray-400 mt-4 2xs:mt-6 transition-colors duration-500 text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {t("text24")}
            </label>
            <label
              htmlFor=""
              className="font-normal text-[14px] 2xs:text-[16px] text-[#71717A] dark:text-gray-400 mt-4 2xs:mt-6 transition-colors duration-500 text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {t("text25")}
            </label>
          </div>
        </div>

        <div id='project' className="w-full flex flex-col items-center bg-[#000000] transition-all duration-500 px-4 2xs:px-6 lg:px-0">
          <label
            htmlFor=""
            className="flex flex-col lg:flex-row font-normal text-[32px] 2xs:text-[40px] lg:text-[48px] text-[white] mt-12 2xs:mt-16 lg:mt-20 mb-8 2xs:mb-10 lg:mb-10 transition-colors duration-500 text-center"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            {t("text26")} <span className="font-extrabold lg:ml-4"> {t("text27")}</span>
          </label>
          <div className="w-full lg:w-[1250px] m-auto flex flex-col gap-12 2xs:gap-16 lg:gap-[100px] mb-12 2xs:mb-16 lg:mb-[120px] mt-8 2xs:mt-12 lg:mt-[70px]">
            <div
              className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 2xs:gap-12 lg:gap-[150px]"
              data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-delay="200"
            >
              <img src={proj_1} alt="" className="w-full max-w-[400px] lg:w-[530px] h-auto lg:h-[400px] rounded-[14px] shadow-2xl hover:scale-105 transition-transform duration-500 object-cover" />
              <div className="w-full lg:w-[580px] flex flex-col gap-4 2xs:gap-5 lg:gap-7">
                <label htmlFor="" className="font-extrabold text-[28px] 2xs:text-[36px] lg:text-[48px] text-[white] hover:text-gray-300 transition-colors duration-300 text-center lg:text-left">{t("text28")}</label>
                <label htmlFor="" className="font-bold text-[20px] 2xs:text-[24px] lg:text-[32px] text-[white] hover:text-gray-300 transition-colors duration-300 text-center lg:text-left">{t("text29")}</label>
                <label htmlFor="" className="w-full lg:w-[580px] flex flex-col font-normal text-[14px] 2xs:text-[16px] text-[#71717A] hover:text-gray-400 transition-colors duration-300 text-center lg:text-left">{t("text30")} <span className="mt-2 2xs:mt-[9px]">{t("text30.1")}</span> <span className="mt-2 2xs:mt-[9px]">{t("text30.2")}</span></label>
              </div>
            </div>
            <div
              className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 2xs:gap-12 lg:gap-[150px]"
              data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-delay="400"
            >
              <div className="w-full lg:w-[580px] flex flex-col gap-4 2xs:gap-5 lg:gap-7 order-2 lg:order-1">
                <label htmlFor="" className="font-extrabold text-[28px] 2xs:text-[36px] lg:text-[48px] text-[white] hover:text-gray-300 transition-colors duration-300 text-center lg:text-left">{t("text31")}</label>
                <label htmlFor="" className="font-bold text-[20px] 2xs:text-[24px] lg:text-[32px] text-[white] hover:text-gray-300 transition-colors duration-300 text-center lg:text-left">{t("text33")}</label>
                <label htmlFor="" className="w-full lg:w-[580px] flex flex-col font-normal text-[14px] 2xs:text-[16px] text-[#71717A] hover:text-gray-400 transition-colors duration-300 text-center lg:text-left">{t("text32")} <span className="mt-2 2xs:mt-[9px]">{t("text32.1")}</span> <span className="mt-2 2xs:mt-[9px]">{t("text32.2")}</span></label>
              </div>
              <img src={proj_2} alt="" className="w-full max-w-[400px] lg:w-[530px] h-auto lg:h-[400px] rounded-[14px] shadow-2xl hover:scale-105 transition-transform duration-500 object-cover order-1 lg:order-2" />
            </div>
            <div
              className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 2xs:gap-12 lg:gap-[150px]"
              data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-delay="600"
            >
              <img src={proj_3} alt="" className="w-full max-w-[400px] lg:w-[530px] h-auto lg:h-[400px] rounded-[14px] shadow-2xl hover:scale-105 transition-transform duration-500 object-cover" />
              <div className="w-full lg:w-[580px] flex flex-col gap-4 2xs:gap-5 lg:gap-7">
                <label htmlFor="" className="font-extrabold text-[28px] 2xs:text-[36px] lg:text-[48px] text-[white] hover:text-gray-300 transition-colors duration-300 text-center lg:text-left">{t("text34")} <span className="font-light text-[14px] 2xs:text-[16px] lg:text-[18px]">{t("text34.1")}</span> </label>
                <label htmlFor="" className="font-bold text-[20px] 2xs:text-[24px] lg:text-[32px] text-[white] hover:text-gray-300 transition-colors duration-300 text-center lg:text-left">{t("text35")}</label>
                <label htmlFor="" className="w-full lg:w-[580px] flex flex-col font-normal text-[14px] 2xs:text-[16px] text-[#71717A] hover:text-gray-400 transition-colors duration-300 text-center lg:text-left">{t("text36")} <br /> <span className="mt-2 2xs:mt-[9px]">{t("text36.1")}</span></label>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center transition-all duration-500 px-4 2xs:px-6 lg:px-0">
          <div className="w-full lg:w-[1250px] mt-12 2xs:mt-16 lg:mt-20 mb-12 2xs:mb-16 lg:mb-20 flex flex-col items-center">
            <div className="w-full flex flex-col lg:flex-row justify-center gap-[30px] 2xs:gap-[40px] lg:gap-[50px] mb-8 2xs:mb-12 lg:mb-15 m-auto dark:bg-linear-to-t dark:from-black dark:to-gray-900 transition-all duration-500">
              <div className="w-full lg:w-[610px] flex flex-col mt-8 2xs:mt-12 lg:mt-15 order-2 lg:order-1">
                <label
                  htmlFor=""
                  className="font-normal text-[32px] 2xs:text-[40px] lg:text-[48px] text-[#000000] mt-5 mb-6 2xs:mb-8 lg:mb-10 dark:text-white transition-colors duration-500 text-center lg:text-left"
                  data-aos="fade-down"
                  data-aos-duration="1200"
                >
                  {t("text10")} <span className="font-extrabold"> {t("text37")}</span>
                </label>
                <label
                  htmlFor=""
                  className="font-normal text-[14px] 2xs:text-[16px] text-[#71717A] mb-4 2xs:mb-5 dark:text-gray-400 mt-4 2xs:mt-6 transition-colors duration-500 text-center lg:text-left"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {t("text38")}
                </label>
                <label
                  htmlFor=""
                  className="font-normal text-[14px] 2xs:text-[16px] text-[#71717A] mb-4 2xs:mb-5 dark:text-gray-400 mt-4 2xs:mt-6 transition-colors duration-500 text-center lg:text-left"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  {t("text39")}
                </label>
                <label
                  htmlFor=""
                  className="font-normal text-[14px] 2xs:text-[16px] text-[#71717A] dark:text-gray-400 mt-4 2xs:mt-6 transition-colors duration-500 text-center lg:text-left"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  {t("text40")}
                </label>
              </div>
              <img
                src={person2}
                alt=""
                className="w-full max-w-[400px] lg:w-[526px] mt-8 2xs:mt-12 lg:mt-15 dark:invert dark:brightness-120 mx-auto lg:mx-0 order-1 lg:order-2"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              />
            </div>
          </div>
        </div>

        <div className="w-full py-8 2xs:py-12 lg:py-[81px] border-t border-[#E5E7EB] dark:border-[#374151] bg-white dark:bg-black transition-all duration-500">
          <div className="w-full lg:w-[1100px] mx-auto px-4 2xs:px-6 lg:px-0">
            <label className="font-light text-[28px] 2xs:text-[32px] lg:text-[36px] text-[#1F2937] dark:text-[#E5E7EB] tracking-widest uppercase opacity-95 block mb-12 2xs:mb-16 lg:mb-20 hover:text-[#374151] dark:hover:text-[#D1D5DB] transition-all duration-700 cursor-default text-center lg:text-left"
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="100">
              {t("text41")}
            </label>

            <div className="grid grid-cols-1 2xs:grid-cols-2 lg:grid-cols-4 gap-6 2xs:gap-8 lg:gap-12">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/+992754454004"
                target="_blank"
                rel="noopener noreferrer"
                className="group shadow-lg rounded-2xl block"
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-easing="ease-out-back"
                data-aos-delay="200"
              >
                <div className="bg-[#FbFbFb] dark:bg-[#111827] rounded-2xl p-6 2xs:p-8 border border-[#E5E7EB] dark:border-[#374151] hover:border-[#25D366] dark:hover:border-[#25D366] hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 cursor-pointer shadow-sm">
                  <div className="text-[#25D366] text-3xl 2xs:text-4xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400">
                    <FaWhatsapp size={32} className="2xs:w-10 2xs:h-10" />
                  </div>
                  <label className="font-normal text-[24px] 2xs:text-[28px] text-[#374151] dark:text-[#E5E7EB] group-hover:text-[#25D366] transition-all duration-400 cursor-pointer block">
                    {t("text42")}
                  </label>
                  <label className="font-light text-[16px] 2xs:text-[18px] text-[#6B7280] dark:text-[#9CA3AF] mt-4 group-hover:text-[#374151] dark:group-hover:text-[#E5E7EB] group-hover:opacity-100 transition-all duration-500 cursor-pointer block">
                    {t("text43")}
                  </label>
                </div>
              </a>

              {/* Telegram Card */}
              <a
                href="https://t.me/KarimovAleks"
                target="_blank"
                rel="noopener noreferrer"
                id='contacts'
                className="group shadow-lg rounded-2xl block"
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-easing="ease-out-back"
                data-aos-delay="400"
              >
                <div className="bg-[#FbFbFb] dark:bg-[#111827] rounded-2xl p-6 2xs:p-8 border border-[#E5E7EB] dark:border-[#374151] hover:border-[#0088CC] dark:hover:border-[#0088CC] hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 cursor-pointer shadow-sm">
                  <div className="text-[#0088CC] text-3xl 2xs:text-4xl mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-400">
                    <FaTelegramPlane size={32} className="2xs:w-10 2xs:h-10" />
                  </div>
                  <label className="font-normal text-[24px] 2xs:text-[28px] text-[#374151] dark:text-[#E5E7EB] group-hover:text-[#0088CC] transition-all duration-400 cursor-pointer block">
                    {t("text44")}
                  </label>
                  <label className="font-light text-[16px] 2xs:text-[18px] text-[#6B7280] dark:text-[#9CA3AF] mt-4 group-hover:text-[#374151] dark:group-hover:text-[#E5E7EB] group-hover:opacity-100 transition-all duration-500 cursor-pointer block">
                    {t("text45")}
                  </label>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href="https://instagram.com/rahim_844004"
                target="_blank"
                rel="noopener noreferrer"
                className="group shadow-lg rounded-2xl block"
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-easing="ease-out-back"
                data-aos-delay="600"
              >
                <div className="bg-[#FbFbFb] dark:bg-[#111827] rounded-2xl p-6 2xs:p-8 border border-[#E5E7EB] dark:border-[#374151] hover:border-[#E4405F] dark:hover:border-[#E4405F] hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 cursor-pointer shadow-sm">
                  <div className="text-[#E4405F] text-3xl 2xs:text-4xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-400">
                    <FaInstagram size={32} className="2xs:w-10 2xs:h-10" />
                  </div>
                  <label className="font-normal text-[24px] 2xs:text-[28px] text-[#374151] dark:text-[#E5E7EB] group-hover:text-[#E4405F] transition-all duration-400 cursor-pointer block">
                    {t("text46")}
                  </label>
                  <label className="w-auto font-light text-[14px] 2xs:text-[16px] text-[#6B7280] dark:text-[#9CA3AF] mt-4 group-hover:text-[#374151] dark:group-hover:text-[#E5E7EB] group-hover:opacity-100 transition-all duration-500 cursor-pointer block">
                    {t("text47")}
                  </label>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/KarimovRahim"
                target="_blank"
                rel="noopener noreferrer"
                className="group shadow-lg rounded-2xl block"
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-easing="ease-out-back"
                data-aos-delay="800"
              >
                <div className="bg-[#FbFbFb] dark:bg-[#111827] rounded-2xl p-6 2xs:p-8 border border-[#E5E7EB] dark:border-[#374151] hover:border-[#333333] dark:hover:border-[#f0f6fc] hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 cursor-pointer shadow-sm">
                  <div className="text-[#333333] dark:text-[#f0f6fc] text-3xl 2xs:text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-400">
                    <FaGithub size={32} className="2xs:w-10 2xs:h-10" />
                  </div>
                  <label className="font-normal text-[24px] 2xs:text-[28px] text-[#374151] dark:text-[#E5E7EB] group-hover:text-[#333333] dark:group-hover:text-[#f0f6fc] transition-all duration-400 cursor-pointer block">
                    {t("text48")}
                  </label>
                  <label className="font-light text-[16px] 2xs:text-[18px] text-[#6B7280] dark:text-[#9CA3AF] mt-4 group-hover:text-[#374151] dark:group-hover:text-[#E5E7EB] group-hover:opacity-100 transition-all duration-500 cursor-pointer block">
                    {t("text49")}
                  </label>
                </div>
              </a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="1000">
              <label className="font-thin text-[18px] 2xs:text-[20px] lg:text-[22px] text-[#6B7280] dark:text-[#9CA3AF] italic mt-8 2xs:mt-12 lg:mt-16 tracking-wide block hover:text-[#374151] dark:hover:text-[#E5E7EB] hover:opacity-100 transition-all duration-600 cursor-default text-center lg:text-left">
                {t("text50")}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App