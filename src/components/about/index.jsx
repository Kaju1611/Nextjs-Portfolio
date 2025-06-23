import React from "react";
import ItemLayout from "./ItemLayout";
import Image from "next/image";

export const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            As a fresh graduate diving into artificial intelligence and machine learning, I am building my expertise using tools like Python, NumPy, and Pandas for data manipulation and analysis. I have hands-on experience with Scikit-learn for implementing machine learning algorithms such as regression, SVM (Support Vector Machines), and classification models. My journey also includes exploring Natural Language Processing (NLP) to unlock insights from text data.

            In addition to my ML endeavors, I leverage my web development skills, utilizing frameworks like React.js and Next.js to create interactive platforms that integrate intelligent systems. With a passion for combining AI with dynamic web solutions, I am ready to craft impactful, data-driven applications and contribute to the future of technology.
            <br />
            <span className="text-accent"></span>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="font-semibold text-base">projects</sub>{" "}
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+<sub className="font-semibold text-base">year of experience</sub>{" "}
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Kaju1611&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Prince"
            loading="lazy"
            width={400}
            height={200}
          />
        </ItemLayout>
        <ItemLayout className="col-span-8 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=Kaju1611&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Prince"
            loading="lazy"
            width={400}
            height={200}
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,react,redux,vite,nextjs,nodejs,express,mongodb,mysql,c,cpp,python,java,tailwind,discord,git,github,postman,d3,stackoverflow,figma,vscode,windicss,windows,vercel,tensorflow,ros,npm,jquery,linkedin,arduino,linux,threejs,wordpress"
            alt="Prince"
            loading="lazy"
            width={800}
            height={100}
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Image
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=Kaju1611&theme=dark&hide_border=true&type=svg&background=FEFE5B00&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="GitHub Streak"
            loading="lazy"
            width={400}
            height={200}
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=Kaju1611&repo=My-Portfolio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="repo card"
            loading="lazy"
            width={400}
            height={200}
          />
        </ItemLayout>
        {/* Leet Code */}
        <ItemLayout className={"col-span-full md:col-span-6 !p-0 "}>
          <img
            className="w-full h-auto"
            src="https://leetcard.jacoblin.cool/PRINCE_KUMAR_GUPTA?theme=transparent&ext=heatmap&source=leetcode&font=Oldenburg"
            alt="LeetCode Profile"
            loading="lazy"
            width={400}
            height={200}
          />
        </ItemLayout>
      </div>
    </section>
  );
};
export default AboutDetails;