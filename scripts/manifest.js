'use strict';
var me, projects, welcome, you;

me = {
  name: 'Anna Sundukova',
  abstract: "<p>This is <em>about me</em>.</p>",
  cv: "<p>This is my <b>CV</b>.</p>",
  email: 'annasundukova@yahoo.com',
  twitter: '',
  instagram: 'annoushk_a',
  facebook: 'anna.sundukova.1',
  tumblr: 'styleinlife'
};

you = {
  name: 'rdanitz',
  twitter: '@rdanitz',
  github: 'rdanitz'
};

welcome = "Anna Sundukova";

projects = [
  {
    name: 'elvis',
    title: 'Last Days of Elvis Album Art',
    abstract: "Album Art",
    description: "<p>Album art commissioned by Berlin-based indie band Last Days of Elvis for their EP \"Oh Dearism\", released July 2016.</p>\n<p>Enigmatic, viscous, eclectic, at times disturbing, at times romantic, a bit equivocal, a bit discomforting, but very soulful. All that, which you find in their music.</p>",
    images: 2
  }, {
    name: 'meditation-space',
    title: 'Meditation Space',
    abstract: "The Meditation Space",
    description: "<p>The Meditation Space is a project I developped in my first year at the Glasgow School of Art.</p>\n<p>It is a timber pod designed for one or two people willing to relax and experience the soothing effect of silent contemplation of the beauty of surrounding nature.</p> \n<p>Located on a rocky seashore in Portencross, Scotland, across the sea from the Isle of Arran, the site has beautiful surroundings. The view towards Arran is especially breathtaking during sunsets... </p>\n<p>The idea was to create a form that would resemble the nature of the surroundings, but not blend in completely to signify the spiritual importance of the Meditation Space.</p>",
    images: 7
  }, {
    name: 'simply-berlin-zine',
    title: 'Simply Berlin Zine',
    abstract: "Simply Berlin Zine",
    description: "<p>Simply is an independent publication about the beauty of ordinary things.</p>\n<p>Made by and for those experiencing “glossy” lifestyle fatigue, Simply aims to create content, which celebrates the beauty of everyday life. The concept of Simply is, well, simple - to speak about matters everyone can relate to, but to do it in a way, which inspires the reader to see them with new eyes.</p> \n<p>Every issue is a collection of words and pictures dedicated to a single theme. The first issue is dedicated to Berlin - the city where it all started.</p>\n<p>You can check out the full version <a href=\"https://issuu.com/annasundukova/docs/simplyberlinzinefull\">here</a>. Enjoy and share your thoughts!</p>",
    images: 6
  }, {
    name: 'cast',
    title: 'CAST',
    abstract: "CAST",
    description: "$\n<p>CAST is Centre for Advanced and Sustainable Textiles - final project of my BArch degree at the Glasgow School of Art.</p>\n$\n<p>CAST is a space dedicated to design, research and development of sustainable textiles and materials.</p>\n$\n<p>Designing the building, I wanted to achieve an atmosphere of a creative laboratory, where learning from each other, collaborating and exchanging ideas is the main working principle.</p> \n$\n<p>All spaces are designed to be visually and spatially connected to each other and to the surrounding nature to create free flow of movement and open views in and around the building, celebrating the process of creation and textile production and paying tribute to the beauty of surrounding nature.</p>\n$\n<p>The Centre includes specialist textile workshops and designer studios, a gallery, an event venue and a cafe.</p>\n$\n<p>A space where creativity can flourish should inspire.</p>\n$\n<p>At the same time it should be reserved enough to avoid overwhelming emotions that are too strong and can be distractive for the creative mind.</p>\n$\n<p>CAST is, therefore, a composition of simple orthogonal forms and reduced material palette of concrete and glass, which creates the composed atmosphere necessary to allow the creative process to unfold unrestrained against a neutral background.</p>\n$\n<p>Flow of people, ideas, nature, views, air, sounds and scents is the magic that happens in-between the space - this happens in the orangery, which connects the separate units.</p>\n$",
    images: 13
  }, {
    name: 'imaginary-cities',
    title: 'Imaginary Cities',
    abstract: "    ",
    description: "    ",
    images: 0
  }, {
    name: 'analog-photography',
    title: 'Analog Photography',
    abstract: "Analog Photography",
    description: "<p>A collection of photos taken over the years with my vintage FED 3 Soviet 35mm camera from the 1970s. </p>",
    images: 13
  }, {
    name: 'culture-kitchen',
    title: 'Culture Kitchen',
    abstract: "Culture Kitchen",
    description: "<p>Culture Kitchen is a project that aims to regenerate, activate and enliven a disarranged and disregarded area in the Southside of Glasgow, UK.</p>\n<p>Culture Kitchen is located in one of the most culturally, socially and ethnically diverse areas of the city.</p> \n<p>At the moment, there is little engagement between different community groups. The urban environment in the area does not provide any spaces or places, where people could come and spend their time together.</p>\n<p>The design proposal is an urban farming hub and dining space, which seeks to promote healthy eating culture among city dwellers.</p> \n<p>The concept was inspired by the principles of Food Diplomacy, which perceives food as a medium that can facilitate natural social bonding within communities. The core idea of the project is good food bringing people together.</p>\n<p>Culture Kitchen pavilion is built from used cargo shipping containers, repurposed to accommodate the various spaces.</p>\n<p>The pavillion is surrounded by allotments and gardens, which will create a fresh and lively burst of greenery on the otherwise bleak and greyish site.</p>",
    images: 0
  }, {
    name: 'music-as-object',
    title: 'Music as Object',
    abstract: "Spacecraft: Music as Object",
    description: "<p>This project is a conceptual exploration of space developped in my first year at the Glasgow School of Art.</p>\n<p>The series of small models are a physical interpretation of my chosen \"Inspiration\" - the magnificent musical piece called Storm by Antonio Vivaldi.</p>\n<p>With the three conceptual models I tried to translate the atmosphere of a sea storm, sharp rays of light piercing through storm-clouds, wind, waves, thunder and lighting, a feeling of tension, movement and expressive dynamics, which I found myself imagining while listening to this piece of music.</p>",
    images: 11
  }
];
