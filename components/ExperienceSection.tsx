"use client";

import { motion } from "motion/react";

export function ExperienceSection() {
  const experiences = [
    {
      company: "DEXTRADING",
      role: "Senior Frontend Developer",
      period: "2024 — Present",
      description:
        "I optimized website SEO and accessibility, raising Lighthouse scores from 30 to 100 for performance and from 40 to 96 for accessibility. By improving website performance and load times, I ensured smooth cross-browser compatibility and a seamless user experience. I collaborated closely with blockchain and back-end teams to integrate APIs effectively, while also staying up to date with emerging cryptocurrency market trends and technologies to enhance platform performance. These efforts improved search engine visibility, strengthened user engagement, and contributed to business growth. In addition, I implemented two admin dashboards and another internal application, providing scalable solutions to support operational efficiency.",
      logo: (
        <svg
          width="40"
          height="41"
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10"
        >
          <path
            d="M8.79004 11.3945C8.79715 11.3935 8.82206 11.3919 8.88867 11.4287C13.7862 14.1343 16.874 18.1986 18.1191 23.6572C18.372 24.7657 18.4922 25.8935 18.499 27.0332L18.5049 27.6689C18.4886 29.3452 18.245 30.9662 17.7783 32.5527C17.744 32.6695 17.6679 32.7926 17.5781 32.8828C15.3103 35.1595 13.042 37.4244 10.7734 39.7012C10.7108 39.764 10.6542 39.8034 10.5967 39.8281C10.5396 39.8526 10.4733 39.8663 10.3857 39.8662C7.06397 39.8598 3.7414 39.8613 0.419922 39.8613H0.201172C0.204227 39.8517 0.206722 39.8418 0.209961 39.832C0.688757 38.3944 1.17229 36.9569 1.64355 35.5156C1.66876 35.4385 1.68898 35.4168 1.69922 35.4092C1.70872 35.4023 1.73375 35.3901 1.81152 35.3906C3.11682 35.3991 4.42248 35.3945 5.72656 35.3945H6.33398L6.1543 35.1553C5.93028 34.8558 5.72966 34.5848 5.52637 34.3174C5.48617 34.2645 5.44741 34.2049 5.40625 34.1406C5.36614 34.078 5.32315 34.009 5.27832 33.9443C5.19018 33.8173 5.07839 33.6813 4.92383 33.6064C4.76711 33.5306 4.5893 33.5214 4.43066 33.5264C4.35047 33.5289 4.26836 33.5358 4.19238 33.541C4.11455 33.5464 4.04151 33.5501 3.97266 33.5498C3.43502 33.5472 2.8945 33.5499 2.3584 33.5488C2.33781 33.5488 2.3179 33.5459 2.29688 33.5449C2.90115 31.7381 3.49899 29.955 4.10645 28.1387L4.17188 27.9414H0.837891C0.842732 27.9239 0.845878 27.9067 0.851562 27.8896C2.26434 23.65 3.67721 19.4098 5.09473 15.1719C5.12477 15.0822 5.18422 14.9882 5.25488 14.917C6.40087 13.7636 7.5601 12.6113 8.70605 11.4561C8.75844 11.4032 8.78201 11.3958 8.79004 11.3945ZM10.8555 24.2432C10.2789 24.7775 9.72612 25.2907 9.16309 25.8125L9.05078 25.916L9.15723 26.0264C10.0443 26.9439 10.9112 27.8404 11.8018 28.7607V28.7617C12.7591 29.7452 13.717 30.7284 14.6592 31.6963L14.7646 31.8047L14.8721 31.6982C15.2476 31.3276 15.6056 30.9745 15.9775 30.6074L16.0742 30.5127L15.9893 30.4072C14.3595 28.3686 12.7203 26.3177 11.0752 24.2598L10.9746 24.1328L10.8555 24.2432ZM5.17773 25.0898L5.2334 25.1895C5.54253 25.7363 5.86445 26.3051 6.20508 26.9033C7.09144 28.4654 7.97793 30.0281 8.87793 31.6143L8.96875 31.7754L9.10742 31.6514C9.74743 31.0803 10.364 30.5311 10.9941 29.9688L11.0967 29.877L11.0137 29.7666C9.52784 27.8077 8.05084 25.861 6.58301 23.9258L6.47949 23.7881L5.17773 25.0898ZM12.3955 15.4551C12.291 15.5057 12.2094 15.5437 12.1309 15.583C10.4241 16.4382 8.71339 17.2894 7.00977 18.1533C6.54651 18.3882 6.19031 18.701 5.95312 19.0928C5.71596 19.4845 5.60267 19.9458 5.61133 20.4688C5.63239 21.7339 6.69853 22.8107 7.96484 22.8584C9.28569 22.9079 10.4285 21.9239 10.5439 20.6328C10.5911 20.1046 10.4905 19.6116 10.2305 19.1455C11.6048 18.7465 12.9568 18.3545 14.3359 17.9541L14.5459 17.8926L14.4141 17.7188L13.6396 16.7041L13.6338 16.6963L12.5732 15.4912L12.498 15.4053L12.3955 15.4551Z"
            fill="white"
            stroke="white"
            strokeWidth="0.3"
          />
        </svg>
      ),
    },
    {
      company: "QUBY",
      role: "Frontend Engineer",
      period: "2021 — 2024",
      description:
        "I engineered a web application that successfully attracted over 50,000 users and coached an intern on emerging and advanced technologies, fostering their professional growth. I directed three IoT-related projects, including solutions for vending machines and remote elevators, and collaborated closely with three designers and two back-end developers to deliver cohesive and user-friendly interfaces. To maintain high code quality, I conducted daily one-on-one code reviews, offering timely feedback and best-practice guidance. Additionally, I integrated Google Analytics into web applications to monitor user behavior and engagement, enabling data-driven improvements to product performance.",
      logo: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10"
        >
          <path
            d="M113.439 106.569L107.15 100.28C109.021 97.1778 110.006 93.6226 110 90V50C110 44.6957 107.893 39.6086 104.142 35.8578C100.391 32.1071 95.3043 30 90 30H50C44.6962 30.0019 39.6102 32.1096 35.8599 35.8599C32.1096 39.6102 30.0019 44.6962 30 50V90C30 95.3043 32.1071 100.391 35.8579 104.142C39.6086 107.893 44.6957 110 50 110H90C93.5209 110.009 96.9801 109.076 100.02 107.3L106.359 113.639C107.297 114.578 108.569 115.106 109.895 115.107C111.222 115.108 112.495 114.582 113.434 113.644C114.373 112.706 114.901 111.434 114.902 110.108C114.903 108.781 114.377 107.508 113.439 106.569ZM50 100C47.3478 100 44.8043 98.9464 42.9289 97.0711C41.0536 95.1957 40 92.6522 40 90V50C40 47.3478 41.0536 44.8043 42.9289 42.9289C44.8043 41.0536 47.3478 40 50 40H90C92.6522 40 95.1957 41.0536 97.0711 42.9289C98.9464 44.8043 100 47.3478 100 50V90C100.001 91.3136 99.7433 92.6145 99.2412 93.8282C98.7391 95.042 98.0025 96.1449 97.0737 97.0737C96.1449 98.0025 95.042 98.7391 93.8282 99.2412C92.6144 99.7433 91.3136 100.001 90 100H50Z"
            fill="white"
            stroke="white"
            strokeMiterlimit="10"
          />
        </svg>
      ),
    },
    {
      company: "DATIS",
      role: "Frontend Developer",
      period: "2019 — 2021",
      description:
        "I collaborated with two back-end developers to build three admin dashboard templates, designing user-friendly interfaces that supported warehouse and distribution functions. Through strategic optimizations, I achieved a 40% improvement in website performance by significantly reducing page-load times. I authored clean, maintainable code in large-scale codebases across more than four projects, ensuring scalability and long-term reliability. Additionally, I designed and delivered three fully functional dashboard admin panels tailored to operational needs, enhancing efficiency and usability.",
      logo: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10"
        >
          <path
            d="M29.5639 24.3301H7.82422V29.5491H29.5639V24.3301Z"
            fill="white"
          />
          <path
            d="M29.5639 17.3848H7.82422V22.6038H29.5639V17.3848Z"
            fill="white"
          />
          <path
            d="M29.5639 15.6448H7.82422V10.4258H24.3449C27.2274 10.4258 29.5639 12.7623 29.5639 15.6448Z"
            fill="white"
          />
          <path
            d="M40 15.6445V39.9873H13.9175C10.5524 39.9873 7.83492 37.2572 7.83492 33.9048H33.9175V15.6445C33.9175 10.3619 29.6381 6.08256 24.3556 6.08256H6.08254C2.71746 6.08256 0 3.3524 0 1.72261e-05H24.3429C32.9905 -0.0126812 40 6.99684 40 15.6445Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      company: "YOMOBIT UG",
      role: "Frontend Developer",
      period: "2019 — 2019",
      description:
        "I mentored two intern front-end developers, guiding them in learning new technologies and successfully delivering projects. I led comprehensive compatibility testing across multiple devices and browsers to ensure consistent performance and user experience. My work included building a financial application with Angular and Electron for both Windows and macOS, as well as engineering three internal projects utilizing Angular and React. Additionally, I developed an e-commerce platform with an integrated admin panel using Angular and Ionic, delivering scalable and efficient solutions tailored to business needs.",
      logo: (
        <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 md:w-10 md:h-10">
          <path d="M12 1c-1.5 0-2.7 1.2-2.7 2.7 0 1.8 1.8 3.8 2.7 5.3.9-1.5 2.7-3.5 2.7-5.3 0-1.5-1.2-2.7-2.7-2.7zm0 21c-1.5 0-2.7-1.2-2.7-2.7 0-1.8 1.8-3.8 2.7-5.3.9 1.5 2.7 3.5 2.7 5.3 0 1.5-1.2 2.7-2.7 2.7zm-9-10c0-1.5 1.2-2.7 2.7-2.7 1.8 0 3.8 1.8 5.3 2.7-1.5.9-3.5 2.7-5.3 2.7-1.5 0-2.7-1.2-2.7-2.7zm18 0c0 1.5-1.2 2.7-2.7 2.7-1.8 0-3.8-1.8-5.3-2.7 1.5-.9 3.5-2.7 5.3-2.7 1.5 0 2.7 1.2 2.7 2.7z" />
        </svg>
      ),
    },
    {
      company: "NILASOFT",
      role: "Junior Frontend Developer",
      period: "2017 — 2019",
      description:
        "I worked closely with a UI/UX designer and two front-end developers to integrate intuitive user interfaces, ensuring design consistency and functionality. In collaboration with three back-end developers, I coordinated the implementation of changes and testing across multiple websites, enhancing reliability and performance. I also implemented responsive websites using the Angular framework for internal use, delivering solutions optimized for usability and accessibility.",
      logo: (
        <svg
          width="40"
          height="38"
          viewBox="0 0 40 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10"
        >
          <path
            d="M19.9998 33.2319C20.0005 25.7508 20.0001 18.3954 19.9986 11.0401C19.9981 8.29845 18.7031 6.97458 15.9995 6.96289C14.1607 6.95494 12.3217 6.9484 10.4831 6.96484C7.99988 6.98704 6.65133 8.31605 6.64644 10.8C6.63197 18.1553 6.64749 25.5107 6.63235 32.866C6.63099 33.5284 6.6081 34.2306 6.39479 34.8448C5.93283 36.1747 4.39583 37.1347 3.14589 37.0108C1.60488 36.8581 0.271467 35.6171 0.0503366 34.091C-0.0134759 33.6505 0.0022446 33.1969 0.0021418 32.7492C-5.70616e-05 23.1963 -0.00127095 13.6433 0.00206327 4.09038C0.00305358 1.25281 1.26184 0.000816627 4.09557 0.000435842C10.0836 -0.000370936 16.0716 0.000189469 22.3649 0.000189469C20.829 0.926135 19.9324 1.94122 19.9916 3.56664C20.0608 5.46508 21.3831 6.87357 23.2902 6.94519C24.3617 6.98543 25.4359 6.95244 26.7118 6.95244C26.7118 7.49792 26.7119 7.9699 26.7118 8.44188C26.7108 15.6178 26.7039 22.7937 26.7134 29.9696C26.7155 31.5552 27.5108 32.7568 28.8073 33.2511C30.0974 33.7431 31.7148 33.4676 32.4434 32.3218C32.9588 31.5114 33.276 30.4285 33.2832 29.4643C33.3454 21.0779 33.3156 12.6909 33.3211 4.30403C33.3215 3.76897 33.3342 3.22344 33.435 2.7009C33.7394 1.12309 35.114 0.000482984 36.6692 0.00565896C38.2583 0.0109469 39.6918 1.23618 39.9353 2.83908C40.0089 3.32316 39.9948 3.82288 39.995 4.31545C39.9992 13.7787 40.0003 23.2419 39.9999 32.7052C39.9998 35.7627 38.7275 37.045 35.69 37.0477C31.7433 37.0513 27.7964 37.0671 23.8498 37.0433C21.4313 37.0287 20.1258 35.7481 19.9998 33.2319Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <div className="flex items-baseline gap-4 md:gap-8">
            <span className="text-white/40 text-sm md:text-base">03</span>
            <h2 className="text-white uppercase tracking-wide text-sm md:text-5xl font-bold">EXPERIENCE</h2>
          </div>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-white/10 pb-12 md:pb-16 last:border-b-0"
            >
              <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="shrink-0"
                    >
                      {exp.logo}
                    </motion.div>
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="text-white/40 text-xs md:text-sm">{exp.period}</p>
                </div>
                <div className="lg:col-span-7">
                  <h4 className="text-white mb-3 md:mb-4 uppercase tracking-wide text-sm md:text-base">
                    {exp.role}
                  </h4>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}