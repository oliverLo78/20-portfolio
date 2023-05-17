
import speakeasy from './images/Speakeasy-Screenshot.png';
import rosetorough from './images/Rose-to-Rough reviews.png';
import jubilee from './images/jubilee songs search.png'

const grpProjects = [
    {
        id: 1,
        title: 'SpeakEasy',
        description: 'SpeakEasy project Discover classic cocktails or get information on you favorite one. See their ingredients and bio and also watch Youtube tutorials on creating them.',
        imagePath: speakeasy,
        imageAlt: 'Image of SpeakEasy App',
        link: 'https://jkanvision.github.io/The-SpeakEasy-Project/',
        github: 'https://github.com/jkanvision/The-SpeakEasy-Project.git',
        technologies: 'HTML5, CSS3, JavaScript, jQuery, Bulma'
    },
    {
        id: 2,
        title: 'Rose-to-Rough',
        description: 'A wine review website where you can contribute to a growing collection of reviews.',
        imagePath: rosetorough,
        imageAlt: 'Image of Rose-to-Rough App',
        link: 'https://rose-to-rough.herokuapp.com/',
        github: 'https://github.com/harrj396/Rose-to-Rough',
        technologies: 'Express.js & Node.js to create RESTful API, Handlebars.js as the template engine, MySQL and Sequelize ORM',
    },
    {
        id: 3,
        title: 'Jubilee',
        description: 'Jubilee is a custom vinyl creation website connecting to the Spotify API tro select your favorite artists and music',
        imagePath: jubilee,
        imageAlt: 'Image of Jubilee App',
        link:'https://jubilee.herokuapp.com/',
        github: 'https://github.com/harrj396/Jubilee',
        technologies: 'MERN application using JavaScript, Express.js & Node.js, MongoDB for the database, Apollo for Queries and mutations',
    },
]

export default grpProjects;