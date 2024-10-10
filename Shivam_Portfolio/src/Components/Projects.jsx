import React, { useState } from 'react';
import a1 from "../images/a1.png";
import a2 from "../images/a2.png";
import a3 from "../images/a3.png";
import a4 from "../images/a4.png";
import a5 from "../images/a5.png";
import a6 from "../images/a6.png";
import a7 from "../images/a7.png";
import a8 from "../images/a8.png";
import a9 from "../images/a9.png";
import a10 from "../images/a10.png";
import cc from "../videos/cc.mp4";
import rc from "../videos/rc.mp4";
import cr from "../videos/cr.mp4";
import cl from "../videos/cl.mp4";
import pr from "../videos/pr.mp4";
import tc from "../videos/tc.mp4";
import ex from "../videos/ex.mp4";
import dg from "../videos/dg.mp4";
import wp from "../videos/wp.mp4";
import td from "../videos/td.mp4";
import c1 from "../images/c1.jpg"
import h from "../videos/h.mp4"
import w1 from "../images/w1.png"
import we from "../videos/we.mp4"
function ProjectSection() {
    const [projects, setProjects] = useState([
        {
            title: 'Weather App',
            description: `The Website whether you can search weather forecast data based upon the search of location using Fetch API `,
            imageUrl: w1,
            videourl: we,
            technology: "HTML,Tailwind CSS,React Js,Fetch API",
            projectUrl: 'https://shivam-weather-forecast.netlify.app/',

        },
        {

            title: 'Todo App',
            description: `The website you Where users used to add different
                                data
                                and to remove it.`,
            imageUrl: a1,
            videourl: td,
            technology: "React Js HTML CSS & JavaScript ",
            projectUrl: 'https://shivamrajtodo.netlify.app',
        },
        {
            title: 'Responsive Web Page',
            description: ` A single Page Webpage Made by using React Js And Tailwind Css is responsive on any device`,
            imageUrl: a2,
            videourl: wp,
            technology: "HTML,Tailwind CSS ,React Js ",
            projectUrl: 'https://shivamnetartpage.netlify.app',
        }, {
            title: 'Currency_Convertor Website',
            description: ` The website where users used to convert
                                any country currency
                                to another country currency.`,
            imageUrl: a3,
            videourl: cc,
            technology: "HTML,CSS,API & JavaScript",
            projectUrl: 'https://shivamcurrency-convertor.netlify.app',
        }, {
            title: 'Rock Paper Scissors Game',
            description: `The Game you play with computer in this
                                Game you Won or
                                lose depends upon what you choose.`,
            imageUrl: a4,
            videourl: rc,
            technology: "HTML,CSS & JavaScript",
            projectUrl: 'https://shivamrockgame.netlify.app',
        }, {
            title: 'Tic-Tac-Toe Game',
            description: `The Game Which played Between users And Computer in which if three patterns are match then you win otherwise Draw`,
            imageUrl: a5,
            videourl: tc,
            technology: "HTML, CSS & JavaScript",
            projectUrl: 'https://shivam-tic-tac-toe.netlify.app',
        }, {
            title: 'Daddy jokes Chrome Extension',
            description: `Google Chrome Extension Where on Clicking Every Times new Joke is Appeared`,
            imageUrl: a6,
            videourl: ex,
            technology: "HTML,CSS,JSON & JavaScript",
            projectUrl: 'https://github.com/shivamraj-2003/Jokes-Chrome-extension',
        },
        {
            title: 'Shivam Portfolio',
            description: `Personal portfoilo Website Where Work Experience,Skills,Projects About Me And Contact Me Details Are Covered made using Javascript`,
            imageUrl: a7,
            videourl: pr,
            technology: "HTML, CSS & JavaScript",
            projectUrl: 'https://github.com/shivamraj-2003/Portfolio',
        }, {
            title: 'Digital Clock',
            description: `The Clock in which time is updated
                                every second depending upon the day,night Using API is updated Every time`,
            imageUrl: a8,
            videourl: dg,
            technology: "HTML, CSS ,API & JavaScript",
            projectUrl: 'https://shivam-digitalclock.netlify.app',
        }, {
            title: 'Basic Scientific Calculator',
            description: `The web Calculator you used to calculate
                                different
                                arithmetic opeartions like
                                addition subtraction.`,
            imageUrl: a9,
            videourl: cl,
            technology: "HTML,CSS & JavaScript",
            projectUrl: 'https://shivam-cal.netlify.app',
        },
        {
            title: 'Car Animated Game',
            description: `The Car animation game in which car runs
                                on the road and
                                produce some noise`,
            imageUrl: a10,
            videourl: cr,
            technology: "HTML,CSS & JavaScrpt",
            projectUrl: 'https://shivamcargame.netlify.app',
        },
        {
            title: 'Google Chrome Extension',
            description: `The Chrome Extension which shows the title of the current
            Tab Open on every click button of popup`,
            imageUrl: c1,
            videourl: h,
            technology: "HTML,CSS & JavaScript and Json",
            projectUrl: "https://github.com/shivamraj-2003/Shivam-Extension",

        }
    ]);


    return (
        <section name="project" className="py-12 bg-sky-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    { projects.map((project, index) => (
                        <div key={ index } className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={ project.imageUrl } alt={ project.title } className="w-full h-48 object-cover object-center" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{ project.title }</h3>
                                <p className="text-gray-600">{ project.description }</p>
                                <p className='text-gray-600 font-semibold mt-2'>{ project.technology }</p>
                                <h2 className='font-semibold mt-2 text-orange-400 hover:text-red-600'><a href={ project.videourl }>View video</a></h2>
                                <a href={ project.projectUrl } className="mt-4 block text-blue-500 hover:text-lime-600">View Project</a>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;
