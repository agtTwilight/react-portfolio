import placeholder from "./assests/placeholder.png"
import wow from "./assests/wow.png"
import gitgood from "./assests/gitgood.png"
import eatsy from "./assests/eatsy.png"
import test from "./assests/test.png"

export const projects = [
        {
                src: eatsy,
                title: "Eatsy",
                about: "Foody social media app",
                utils: "MongoDB | Express.js | React.js | Node.js",
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
                ]
        },
        {
                projectSrc: wow,
                projectTitle: "World of Wordcraft",
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
                projectSrc: gitgood,
                projectTitle: "Git Good",
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
