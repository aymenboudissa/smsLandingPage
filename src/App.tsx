import {
  MessageSquare,
  Package,
  Store,
  Zap,
  CheckCircle,
  TrendingUp,
  Upload,
  Settings,
  Globe,
  X,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import { APP_URL } from "./utils/contants";
import TextType from "./components/TextType";
import CountUp from "./components/CountUp";
import Particles from "./components/Particles";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";

function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [language, setLanguage] = useState("fr");
  const { t } = useTranslation();

  const languages = [
    { code: "fr", label: "FR", flag: "🇫🇷" },
    { code: "ar", label: "AR", flag: "🇩🇿" },
    { code: "en", label: "EN", flag: "🇬🇧" },
  ];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    i18n.changeLanguage(langCode);
  };

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-white"
    >
      <div className=" relative" style={{ width: "100%" }}>
        <nav className=" w-full z-100 mb-10 bg-transparent  border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-8 h-8 text-[#9810fa]" />
                <span className="text-2xl font-bold bg-gradient-to-r from-[#9810fa] to-[#155dfc] bg-clip-text text-transparent">
                  SMS Pro
                </span>
              </div>
              <div className="hidden z-100 md:flex space-x-8">
                <a
                  href="#features"
                  className="text-gray-700 hover:text-[#9810fa] transition-colors"
                >
                  {t("nav.features")}
                </a>
                <a
                  href="#how-it-works"
                  className="text-gray-700 hover:text-[#9810fa] transition-colors"
                >
                  {t("nav.howItWorks")}
                </a>
                <a
                  href="#pricing"
                  className="text-gray-700 hover:text-[#9810fa] transition-colors"
                >
                  {t("nav.pricing")}
                </a>
                <a
                  href="#faq"
                  className="text-gray-700 hover:text-[#9810fa] transition-colors"
                >
                  {t("nav.faq")}
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <button className="flex items-center ml-2 space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-[#9810fa] transition-all">
                    <Globe className="hidden sm:block w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {languages.find((lang) => lang.code === language)?.flag}{" "}
                      {languages.find((lang) => lang.code === language)?.label}
                    </span>
                  </button>
                  <div className="absolute z-50 top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`flex items-center space-x-2 px-4 py-2 w-full hover:bg-gray-50 transition-colors ${
                          language === lang.code
                            ? "bg-purple-50 text-[#9810fa]"
                            : "text-gray-700"
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span className="text-sm font-medium">
                          {lang.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => window.open(APP_URL, "_blank")}
                  className="text-sm sm:text-base bg-gradient-to-r from-[#9810fa] to-[#155dfc] text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  {t("nav.tryNow")}
                </button>
              </div>
            </div>
          </div>
        </nav>
        <Particles
          particleColors={["#9810fa", "#9810fa"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <section className="pt-27 pb-20 px-4 sm:px-6 lg:px-8 bg-none">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-gradient-to-r from-[#9810fa]/10 to-[#155dfc]/10 rounded-full px-4 py-2 mb-6">
                  <span className="text-[#9810fa] font-semibold text-sm">
                    <TextType text={t("hero.tagline")} />
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {t("hero.title")}
                  <span className="bg-gradient-to-r from-[#9810fa] to-[#155dfc] bg-clip-text text-transparent">
                    {" "}
                    {t("hero.highlightedTitle")}
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {t("hero.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => window.open(APP_URL, "_blank")}
                    className="bg-gradient-to-r from-[#9810fa] to-[#155dfc] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {t("hero.startFree")}
                  </button>
                  {/* <button className="border-2 border-[#9810fa] text-[#9810fa] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#9810fa]/5 transition-all duration-300">
                  {t("hero.seeDemo")}
                </button> */}
                </div>
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">
                      {t("hero.noCommitment")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">
                      {t("hero.fiveMinSetup")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#9810fa] to-[#155dfc] rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                      <Package className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="text-sm text-gray-600">Colis #12345</p>
                        <p className="font-semibold text-gray-900">
                          Livré avec succès
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-[#155dfc]" />
                      <div>
                        <p className="text-sm text-gray-600">SMS envoyé</p>
                        <p className="font-semibold text-gray-900">
                          +213 XXX XXX XXX
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-[#9810fa]" />
                      <div>
                        <p className="text-sm text-gray-600">
                          Taux de conversion
                        </p>
                        <p className="font-semibold text-gray-900">
                          +47% ce mois
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("features.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("features.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Marketing Campaigns */}
            <motion.div
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.div
                className="bg-gradient-to-r from-[#9810fa] to-[#155dfc] w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                <MessageSquare className="w-7 h-7 text-white" />
              </motion.div>
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {t("features.marketingCampaigns.title")}
              </motion.h3>
              <motion.p
                className="text-gray-600 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {t("features.marketingCampaigns.description")}
              </motion.p>
              <motion.ul
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {t("features.marketingCampaigns.items", {
                  returnObjects: true,
                }).map((item: string, index: number) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#9810fa] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Feature 2 - Bulk Sending */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="bg-gradient-to-r from-[#155dfc] to-[#9810fa] w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                <Upload className="w-7 h-7 text-white" />
              </motion.div>
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {t("features.bulkSending.title")}
              </motion.h3>
              <motion.p
                className="text-gray-600 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {t("features.bulkSending.description")}
              </motion.p>
              <motion.ul
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {t("features.bulkSending.items", { returnObjects: true }).map(
                  (item: string, index: number) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  )
                )}
              </motion.ul>
            </motion.div>

            {/* Feature 3 - Package Tracking */}
            <motion.div
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className="bg-gradient-to-r from-[#9810fa] to-[#155dfc] w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                <Package className="w-7 h-7 text-white" />
              </motion.div>
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {t("features.packageTracking.title")}
              </motion.h3>
              <motion.p
                className="text-gray-600 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {t("features.packageTracking.description")}
              </motion.p>
              <motion.ul
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {t("features.packageTracking.items", {
                  returnObjects: true,
                }).map((item: string, index: number) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#9810fa] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Feature 4 - Multi Store */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="bg-gradient-to-r from-[#155dfc] to-[#9810fa] w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                <Store className="w-7 h-7 text-white" />
              </motion.div>
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {t("features.multiStore.title")}
              </motion.h3>
              <motion.p
                className="text-gray-600 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {t("features.multiStore.description")}
              </motion.p>
              <motion.ul
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {t("features.multiStore.items", { returnObjects: true }).map(
                  (item: string, index: number) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  )
                )}
              </motion.ul>
            </motion.div>

            {/* Feature 5 - Carrier Integration */}
            <motion.div
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div
                className="bg-gradient-to-r from-[#9810fa] to-[#155dfc] w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                <Zap className="w-7 h-7 text-white" />
              </motion.div>
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {t("features.carrierIntegration.title")}
              </motion.h3>
              <motion.p
                className="text-gray-600 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {t("features.carrierIntegration.description")}
              </motion.p>
              <motion.ul
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                {t("features.carrierIntegration.items", {
                  returnObjects: true,
                }).map((item: string, index: number) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#9810fa] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Feature 6 - Customization */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div
                className="bg-gradient-to-r from-[#155dfc] to-[#9810fa] w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                <Settings className="w-7 h-7 text-white" />
              </motion.div>
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {t("features.customization.title")}
              </motion.h3>
              <motion.p
                className="text-gray-600 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                {t("features.customization.description")}
              </motion.p>
              <motion.ul
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                {t("features.customization.items", { returnObjects: true }).map(
                  (item: string, index: number) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  )
                )}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#9810fa]/5 via-[#155dfc]/5 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("benefits.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("benefits.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#9810fa] to-[#155dfc] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {/* {t("benefits.conversionRate")}
                 */}
                +<CountUp from={0} to={47} direction="up" />%
              </h3>
              <p className="text-gray-600 text-lg">
                {t("benefits.conversionText")}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-[#155dfc] to-[#9810fa] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {/* {t("benefits.openRate")} */}
                <CountUp from={0} to={95} direction="up" />%
              </h3>
              <p className="text-gray-600 text-lg">
                {t("benefits.openRateText")}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-[#9810fa] to-[#155dfc] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {/* {t("benefits.inquiryReduction")} */}
                <CountUp from={50} to={-60} direction="up" />%
              </h3>
              <p className="text-gray-600 text-lg">
                {t("benefits.inquiryReductionText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("howItWorks.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("howItWorks.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Ligne de connexion animée */}
            <motion.div
              className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-1 bg-gradient-to-r from-[#9810fa] to-[#155dfc]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />

            {/* Étape 1 */}
            <motion.div
              className="relative bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#9810fa] transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#9810fa] to-[#155dfc] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                1
              </motion.div>
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("howItWorks.step1.title")}
                </h3>
                <p className="text-gray-600">
                  {t("howItWorks.step1.description")}
                </p>
              </motion.div>
            </motion.div>

            {/* Étape 2 */}
            <motion.div
              className="relative bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#155dfc] transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#155dfc] to-[#9810fa] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.7,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                2
              </motion.div>
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("howItWorks.step2.title")}
                </h3>
                <p className="text-gray-600">
                  {t("howItWorks.step2.description")}
                </p>
              </motion.div>
            </motion.div>

            {/* Étape 3 */}
            <motion.div
              className="relative bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#9810fa] transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#9810fa] to-[#155dfc] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 1.0,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                3
              </motion.div>
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("howItWorks.step3.title")}
                </h3>
                <p className="text-gray-600">
                  {t("howItWorks.step3.description")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("pricing.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("pricing.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan Gratuit */}
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t("pricing.free.name")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("pricing.free.description")}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {t("pricing.free.price")}
                </span>
                <span className="text-gray-600">
                  {/* {t("pricing.free.period")} */}
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {t("pricing.free.features", { returnObjects: true }).map(
                  (feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      {[
                        "SenderID personnalisé",
                        "Custom SenderID",
                        "هوية مرسل مخصصة",
                      ].includes(feature) ? (
                        <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      )}
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  )
                )}
              </ul>
              {/* <button className="w-full border-2 border-[#9810fa] text-[#9810fa] py-3 rounded-lg font-semibold hover:bg-[#9810fa]/5 transition-all duration-300">
                {t("pricing.free.button")}
              </button> */}
            </div>

            {/* Plan Croissance */}
            <div className=" bg-gradient-to-br from-[#9810fa] to-[#155dfc] p-8 rounded-2xl shadow-2xl transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                {t("pricing.growth.popular")}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {t("pricing.growth.name")}
              </h3>
              <p className="text-purple-100 mb-6">
                {t("pricing.growth.description")}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  {t("pricing.growth.price")}
                </span>
                <span className="text-purple-100"></span>
              </div>
              <ul className="space-y-4 mb-8">
                {t("pricing.growth.features", { returnObjects: true }).map(
                  (feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      {[
                        "SenderID personnalisé",
                        "Custom SenderID",
                        "هوية مرسل مخصصة",
                      ].includes(feature) ? (
                        <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      )}
                      <span className="text-white">{feature}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Plan Enterprise */}
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t("pricing.enterprise.name")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("pricing.enterprise.description")}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {t("pricing.enterprise.price")}
                </span>
                <span className="text-gray-600"></span>
              </div>
              <ul className="space-y-4 mb-8">
                {t("pricing.enterprise.features", { returnObjects: true }).map(
                  (feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  )
                )}
              </ul>
              {/* <button className="w-full border-2 border-[#9810fa] text-[#9810fa] py-3 rounded-lg font-semibold hover:bg-[#9810fa]/5 transition-all duration-300">
                {t("pricing.enterprise.button")}
              </button> */}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("faq.title")}
            </h2>
            <p className="text-xl text-gray-600">{t("faq.subtitle")}</p>
          </div>
          <div className="space-y-6">
            {t("faq.questions", { returnObjects: true }).map(
              (item: any, index: number) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-r ${
                    index % 2 === 0
                      ? "from-purple-50 to-blue-50"
                      : "from-blue-50 to-purple-50"
                  } p-6 rounded-xl cursor-pointer overflow-hidden`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="flex justify-between items-start gap-4">
                    <motion.h3
                      className="text-xl font-bold text-gray-900"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      {item.question}
                    </motion.h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-gray-600" />
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <motion.p
                          className="text-gray-600 mt-2 pt-2"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                        >
                          {item.answer}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#9810fa] to-[#155dfc]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-purple-100 mb-8">{t("cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open(APP_URL, "_blank")}
              className="bg-white text-[#9810fa] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              {t("cta.freeTrial")}
            </button>
            {/* <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              {t("cta.scheduleDemo")}
            </button> */}
          </div>
          <p className="text-purple-100 mt-6">{t("cta.footer")}</p>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquare className="w-6 h-6 text-[#9810fa]" />
                <span className="text-xl font-bold text-white">SMS Pro</span>
              </div>
              <p className="text-gray-400">{t("footer.description")}</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">
                {t("footer.product")}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="hover:text-[#9810fa] transition-colors"
                  >
                    {t("nav.features")}
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-[#9810fa] transition-colors"
                  >
                    {t("nav.pricing")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#9810fa] transition-colors"
                  >
                    {t("footer.documentation")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">
                {t("footer.support")}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#faq"
                    className="hover:text-[#9810fa] transition-colors"
                  >
                    {t("nav.faq")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#9810fa] transition-colors"
                  >
                    {t("footer.contact")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#9810fa] transition-colors"
                  >
                    {t("footer.tutorials")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">
                {t("footer.legal")}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#9810fa] transition-colors"
                  >
                    {t("footer.terms")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#9810fa] transition-colors"
                  >
                    {t("footer.privacy")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
