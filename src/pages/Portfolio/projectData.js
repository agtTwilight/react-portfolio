import placeholder from "./assests/placeholder.png"
import wow from "./assests/wow.png"
import gitgood from "./assests/gitgood.png"
import eatsy from "./assests/eatsy.png"
import test from "./assests/test.png"
import homepage from "./assests/eatsydemo/homepage.png"
import msgsend from "./assests/eatsydemo/msgsend.png"
import msgview from "./assests/eatsydemo/msgview.png"
import profile01 from "./assests/eatsydemo/profilesettings.png"
import profile02 from "./assests/eatsydemo/profilesettings02.png"

export const projects = [
    {
        src: eatsy,
        title: "Eatsy",
        about: "Foody social media app",
        utils: "MongoDB | Express.js | React.js | Node.js",
        demo: [
            {
                src: homepage,
                title: "Home Page",
                about: "this is a test",
            },
            {
                src: msgsend,
                title: "Sending Messages",
                about: "Did my test work?",
            },
            {
                src: msgview,
                title: "Viewing Messages",
                about: "Did my test work?",
            },
            {
                src: profile01,
                title: "Editing Your Profile",
                about: "Did my test work?",
            },
            {
                src: profile02,
                title: "Editing Your Profile Cont.",
                about: "Did my test work?",
            },
        ]
    },
    {
        src: wow,
        title: "World of Wordcraft",
        about: "Text based adventure game",
        utils: "MySQL | Express.js | Node.js | Handlebars.js",
        demo: [
            {
                src: test,
                title: "testing page 1",
                about: "this is a test",
            },
            {
                src: test,
                title: "testing page 2",
                about: "Did my test work?",
            },
            {
                src: test,
                title: "testing page 2",
                about: "Did my test work?",
            },
        ]
    },
    {
        src: gitgood,
        title: "Git Good",
        about: "Strategy card game",
        utils: "JS | API fetch & data cleaning | HTML | CSS",
        demo: [
            {
                src: test,
                title: "testing page 1",
                about: "this is a test",
            },
            {
                src: test,
                title: "testing page 2",
                about: "Did my test work?",
            },
            {
                src: test,
                title: "testing page 2",
                about: "Did my test work?",
            },
            {
                src: test,
                title: "testing page 2",
                about: "Did my test work?",
            },
        ]
    },
]

export default projects
