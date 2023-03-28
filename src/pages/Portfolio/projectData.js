import wow from "./assets/wow.png"
import gitgood from "./assets/gitgood.png"
import eatsy from "./assets/eatsy.png"

// eatsy demo images
import eatsyHomepage from "./assets/eatsydemo/homepage.png"
import eatsyMsgsend from "./assets/eatsydemo/msgsend.png"
import eatsyMsgview from "./assets/eatsydemo/msgview.png"
import eatsyProfile01 from "./assets/eatsydemo/profilesettings.png"
import eatsyProfile02 from "./assets/eatsydemo/profilesettings02.png"

// world of wordcraft demo images
import wowLogin from "./assets/wowdemo/login.png"
import wowHomepage from "./assets/wowdemo/homepage.png"
import wowGamestart from "./assets/wowdemo/gamestart.png"
import wowGameplay from "./assets/wowdemo/gameplay.png"

// git good demo images
import ggHomepage from "./assets/gitgooddemo/homepage.png"
import ggGamestart from "./assets/gitgooddemo/gamestart.png"
import ggGameplay01 from "./assets/gitgooddemo/gameplay01.png"
import ggGameplay02 from "./assets/gitgooddemo/gameplay02.png"
// TODO add data for github && Deployed links
export const projects = [
    {
        src: eatsy,
        title: "Eatsy",
        role: "Project Manager",
        about: "Eatsy is a social media platform for home cooks, foodies, and chefs, where you can discover new recipes, connect with other home cooks, and share your culinary creations with the world.",
        highlight: "I was responsible for the backend of this project, as well as populating the front end components with data from API fetch requests, and implemented the React.js logic using the useState and useEffect hooks.",
        utils: "MongoDB | Express.js | React.js | Node.js",
        github: "https://github.com/agtTwilight/eatsy-front-end",
        deployed: "https://eatsyfoods.netlify.app/",
        demo: [
            {
                src: eatsyHomepage,
                title: "Home Page",
                about: "Any user that has created a menu will have it displayed on the home page. Our home page features a filter bar with the 'useEffect' react hook to conditionally render the menus of chefs with the selected cooking style. ",
            },
            {
                src: eatsyMsgsend,
                title: "Sending Messages",
                about: "From the home page, you can navigate into a users profile to find more details about their menu and connect with them via the send message modal.",
            },
            {
                src: eatsyMsgview,
                title: "Viewing Messages",
                about: "The user recieving your messages can view them in the message center within their profile. They may decide to reply to any messages to continue the connection.",
            },
            {
                src: eatsyProfile01,
                title: "Editing Your Profile",
                about: "This is the view of a logged-in users profile. From the top down, we can see that users have the option to upload custom profile pictures, view their messages, view their menu, or update any desired user information. I implemented JWT user auth to conditionally render the logged in users profile.",
            },
            {
                src: eatsyProfile02,
                title: "Editing Your Profile Cont.",
                about: "In your profiles menu view you may update any existing menu items, or add dishes to your existing menu. A future direction I would like to take with the app is to embrace its social media qualities, and add the option for users to have many menus at a time, and have each menu item be linked via hashtags, for an easier user experience when trying to compare dishes.",
            },
        ]
    },
    {
        src: wow,
        title: "World of Wordcraft",
        role: "Github Admin",
        about: "WOW is a text-based adventure game with spell creation as its main feature.",
        highlight:"I was responsible for this projects backend, and initializing game start by fetching the correct data from the backend and cleaning it for use in handlebars.js/gameplay.",
        utils: "MySQL | Express.js | Node.js | Handlebars.js",
        github: "https://github.com/agtTwilight/world-of-wordcraft",
        deployed: "https://world-of-wordcraft.herokuapp.com/",
        demo: [
            {
                src: wowLogin,
                title: "Login",
                about: "This project uses sequelize sessions to pull the correct user data after login. User password are encrypted with the bcrypt npm package (which I continued to use in future projects).",
            },
            {
                src: wowHomepage,
                title: "Home Page",
                about: "Our home page is a space where you can relax between adventures. Here you can see your characters stats, achievement log, and you're presented with the option to start a new adventure.",
            },
            {
                src: wowGamestart,
                title: "Game Start",
                about: "When you start a new adventure you're brought to our game handlebars.js front end. When you select continue, a random encounter from our database will begin.",
            },
            {
                src: wowGameplay,
                title: "Gameplay",
                about: "During encounters you can use spells to attack, items to heal or enhance yourself, and you can access the forge to create new spells.",
            },
        ]
    },
    {
        src: gitgood,
        title: "Git Good",
        role: "Project Manager",
        about: "Git Good is a lane based strategy card game that uses data from a superhero and pokemon API. Gameplay took inspiration from Marvel SNAP and Artifact, two successful lane based strategy card games.",
        highlight:"I was responsible for API fetch and data cleaning. I'm particularly proud of my idea to use min-max normalization to normalize stat values between the two data sets used.",
        utils: "JS | API fetch & data cleaning | HTML | CSS",
        github: "https://github.com/agtTwilight/git-good",
        deployed: "https://sprocketcreations.github.io/git-good/arena/",
        demo: [
            {
                src: ggHomepage,
                title: "Home Page",
                about: "Our home page uses localStorage to track whether this is your first time visiting the site. For users who have never visited the site (or if you clear your localStorage and revisit), you will be prompted with this welcome message from our team.",
            },
            {
                src: ggGamestart,
                title: "Game Start",
                about: "Starting a new game, you will be prompted with a hand of five cards. You may reject the hand to get a new starting five, but once you're ready to play, select `Begin`.",
            },
            {
                src: ggGameplay01,
                title: "Gameplay",
                about: "Each round begins with players playing as many cards as they can, until their mana is depleted. Here we are highlighting the interactions and hover effects used during the play phase.",
            },
            {
                src: ggGameplay02,
                title: "Gameplay Cont.",
                about: "Here you can see a snapshot of the game a few rounds in. Card and player hitpoints deplete as they are targeted, and card health notably changes to indicate whether or not it has been damaged.",
            },
        ]
    },
]

export default projects
