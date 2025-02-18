// src/utils/gameObjects.js

// Individual objects
const macbookWidth = 1470;
const macbookHeight = 763;
export const piano = {
    name: 'Piano',
    x: 920 / macbookWidth,
    y: 570 / macbookHeight,
    width: 350 / macbookWidth,
    height: 160 / macbookHeight,
    modalContent: [
        { type: 'title', text: 'Piano Things' },
        // { type: 'text', text: 'Instagram music account: @' },
        { type: 'text', text: 'Level 8 Piano First Class Honours The Royal Conservatory of Music Issued Jul 2021' },
        { type: 'text', text: 'Covers yet to come...' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/characterBack.PNG`, caption: 'Piano Achievement Image' },
        // { type: 'text', text: 'Details about your piano achievements, recitals, and progress.' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/characterBack.PNG`, caption: 'Piano Achievement Image' },
        // { type: 'text', text: 'Details about your piano achievements, recitals, and progress.' },
    ],
    textboxContent: "",
};

export const computer = {
    name: 'Computer',
    x: 240 / macbookWidth,
    y: 130 / macbookHeight,
    width: 270 / macbookWidth,
    height: (310 * 2 / 3) / macbookHeight,
    modalContent: [
        { type: 'title', text: 'Contact' },
        { 
          type: 'text', 
          text: (
              <>
                <center>
                  Email: <a href="mailto:c252wang@uwaterloo.ca">c252wang@uwaterloo.ca</a> | 
                  Phone (CA): <a href="tel:+15195773709">+1 519-577-3709</a> |
                  Phone (JP): <a href="tel:+15195773709">+86 080-5661-4359</a> |
                  ~ <a href="https://www.linkedin.com/in/cera-wang-171699240/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
                  ~ <a href="https://github.com/acrenw" target="_blank" rel="noopener noreferrer">Github</a>
                </center>
              </>
          ) 
        },
        { type: 'title', text: 'Internships' }, // TODO: make this into folders later
        { type: 'subtitle', text: <a href="https://www.rapyuta-robotics.com/" target="_blank" rel="noopener noreferrer">Rapyuta Robotics</a> },
        { type: 'info', text: 'Robotics Software Engineer' },
        { type: 'text', text: 'I worked as a Robotics Software Engineer on the Robot Control Systems team in Rapyuta Robotics. During my time in Japan, I met countless amazing people that have helped me and whom I became great friends with.' },
        { type: 'text', text: 'The product I was working on was an Automated Storage and Retrieval System (ASRS) robot, and it travels in our own warehouse structure with tiles as path units.' },
        { type: 'text', text: 'By the end of my internship, I worked to develop dynamic obstacle collision avoidance for ASRS robots in ROS2 using finite state machines, handling how robots publish their immediate path as “obstacles.” I also implemented a 3D R-tree for spatial indexing of robot paths, reducing query time from O(n) to O(log n). The R-tree also helped to enhance robot localization accuracy and safety by being able to support varied tile sizes, like the fire-shutter tiles, for abiding by safety protocols.' },
        { type: 'text', text: 'The subteam I was on mainly focused on theoretical math, where I designed a master controller that integrates a 6-component pipeline which worked to optimizes the ASRS production operation speed by mathematically calculating structural architecture. This pipeline is currently utilized by >3 clients and many internal teams. Our optimization strategy is based on genetic evolutionary algorithms, which I codeveloped with my team and implemented additional evolution subjects with varied chromosome lengths, addressing non-convex, multi-modal black-box optimization challenges to improve the ASRS layout. I developed one of the first components in the pipeline, an interactive Python module for real-time ASRS layout arrangement, utilizing multi-source BFS, proximity-based sorting, and directional heuristics; capable of layout rearrangement based on the time variable. We also conducted simulations and generated plots to assess convergence and parameter correlations of the evolutionary algorithm for discovering potential enhancements for our current algorithm.' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/rr/cheer.JPG`, caption: 'Cheering at work' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/rr/group_photo.PNG`, caption: 'Onboarding group photo' },

        { type: 'subtitle', text: <a href="https://www.loopx.ai/" target="_blank" rel="noopener noreferrer">Loopx</a> },
        { type: 'info', text: 'Embedded Programmer + Graphic Designer' },
        { type: 'text', text: 'In high school, I was lucky enough to have an amazing opportunity to join LoopX as an intern. LoopX was my first robotics related internship, and where I discovered the excitement of engineering.' },
        { type: 'text', text: 'At first, we were developing GoosEx - an autonomous delivery robot - which I used Python to program interactive LED screens in for displaying text alerts and emoticons to pedestrians if the robot was ever blocked or in any interactable status. Later, when LoopX moved to developing the autonomous mining vehicle, I integrated lidar-activated LED strips in C++ for it in ROS using Raspberry Pi and Jetson Nano.' },
        { type: 'text', text: 'I also handled the UI/UX design of the LoopX website and the AI platform AISear using Adobe PS, Figma, and Procreate. I was also delegated design and marketing tasks as they thought I was the only one with an artistic vision in the team. So I created marketing media like the GoosEx logo, posters, flyers, stickers, LoopX business cards, company shirts, social media banners, and so on.' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/loopx/accelerator_center.png`, caption: 'Accelerator center' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/loopx/basement.png`, caption: 'Working in the basement' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/loopx/wires.png`, caption: 'Building the LED screen' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/loopx/led_screen.jpg`, caption: 'Programming the LED screen' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/loopx/mechanic.png`, caption: 'Building GoosEx' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/loopx/obstacle.gif`, caption: 'Obstacle detection testing in UW' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/loopx/landing_page.gif`, caption: 'Landing page design' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/loopx/aisear.gif`, caption: 'Aisear logo design' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/loopx/goosex_design.png`, caption: 'GoosEx logo design' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/loopx/business_card.png`, caption: 'Business card design' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/loopx/pin.png`, caption: 'Pin design' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/loopx/shirt_design.png`, caption: 'Shirt design 1' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/loopx/shirt_design2.png`, caption: 'Shirt design 2' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/loopx/sticker.png`, caption: 'Sticker design page' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/loopx/web_design.png`, caption: 'Landing page' },

        { type: 'subtitle', text: <a href="https://openprinciples.notion.site/About-OpenPrinciples-2cff064670e94c87987d564da126d261" target="_blank" rel="noopener noreferrer">OpenPrinciples</a> },
        { type: 'info', text: 'Full stack Developer' },
        { type: 'text', text: 'I had a great time working for OpenPrinciples, as it promotes altruism and self improvement, which aligns with my personal beliefs and ideals.' },
        { type: 'text', text: 'One of our main products was UltraBrain, an AI-human assistant to align Google Calendar events with personal principles. As the full-stack developer, I integrated the Notion API with Google Calendar in Python to enhance Ultrabrain’s database and algorithmic accuracy, along with improving the UI of UltraBrain.' },
        { type: 'text', text: 'I also got to gain experience with data science by developing and deploying a Python-based data pipeline to streamline analytics and enhance data accessibility.' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/openprinciples/discord_call.png`, caption: 'Virtual group photo during COVID' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/openprinciples/github.png`, caption: 'Landing page' },

        { type: 'title', text: 'Projects' },
        { type: 'subtitle', text: <a href="https://clockhacks.dev/" target="_blank" rel="noopener noreferrer">ClockHacks</a> },
        { type: 'info', text: 'Organizer' },
        { type: 'text', text: 'I organized ClockHacks, the largest MLH-certified high school hackathon of the 2023 season, with around 360 attendees. I created the sponsorship package which helped secured over $10,000 in sponsorship prizes.' },
        { type: 'text', text: 'I also held events throughout ClockHacks, including leading the  UI/UX workshop, the opening and closing ceremonies, inviting the CEO of Centered as a guest speaker, a midnight Among Us mini game, and many more informative workshops and fun gathering events.' },
        { type: 'text', text: 'One of the main differentiating factor of our hackathon was the 3-hour organizer hacking event, where the organizers had to create a hackathon project in under 3 hours. My team and I built a base-10 clock in this event using React, Tailwind, and the built-in JavaScript time module for front-end while live streaming it on Twitch.' },
        { type: 'text', text: 'I also created all visual media for our hackathon, including the logo, swag (stickers and shirts), banners, posters, and promotional materials. The swag I created were later shipped to the winners of ClockHacks.' },
        { type: 'youtube', id: 'Irh7pC81TMM' }, // clockhacks
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/clockhacks/discord_call.jpg`, caption: 'Virtual group photo during COVID' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/clockhacks/working.jpg`, caption: 'Working during the hackathon' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/clockhacks/better_clock1.png`, caption: 'Organizer project: BetterClock' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/clockhacks/better_clock2.png`, caption: 'Organizer project: BetterClock' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/clockhacks/logo.png`, caption: 'Logo design' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/clockhacks/ig_post.png`, caption: 'Media design' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/clockhacks/shirt.png`, caption: 'Shirt design 1' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/clockhacks/shirt2.png`, caption: 'Shirt design 2' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/clockhacks/shirt3.png`, caption: 'Shirt design 3' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/clockhacks/shirt4.png`, caption: 'Shirt design 4' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/clockhacks/sticker1.png`, caption: 'Sticker design 1' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/clockhacks/sticker2.png`, caption: 'Sticker design 2' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/experience/clockhacks/sticker3.png`, caption: 'Logo design' },
        
        { type: 'subtitle', text: 'HealThyme' },
        { type: 'text', text: 'HealThyme uses the Azure Maps geospatial platform to integrate a geolocation feature for nearby walk-in clinics, granting users real-time accessibility to healthcare services. It is built with React.js for an interactive and responsive frontend, and Azure managing location and personal data.' },
        { type: 'text', text: 'It takes the location of the user, and generates a map indicating each of the hospitals closest to the user as well as how many people are in line in front of them. The user interface is especially designed for ease of comparison between the different hospitals in terms of their distance and wait time. Once the user has chosen a hospital or clinic they think is the best fit for their situation, the user is able to book a time at that said hospital, saving them time, and maybe even their life. HealThyme not only appeals to people who are seeking medical help, but it also acts as a platform for hospitals. Each hospital is able to sign up and view how many people have booked appointments , and manage the patients using our website. Any changes that the hospital makes, the user/patient will also be able to see it as well.' },
        { type: 'youtube', id: 'iKNFji-NY80' }, // healthyme
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/healthyme/landing_page.png`, caption: 'Landing: patients choose their location' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/healthyme/waitlist.png`, caption: 'Waitlist: available for hospitals to update their waitlist information' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/healthyme/booking_hospitals.png`, caption: 'Booking: lists nearby hospitals available for booking based on current user location' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/healthyme/booking.jpeg`, caption: 'Booking: shows hospital information' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/healthyme/booking_info.jpeg`, caption: 'Booking: patients enter booking info' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/healthyme/sign_in.jpeg`, caption: 'Sign-in: both patients and hospitals can sign in' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/healthyme/sign_up.jpeg`, caption: 'Sign-up: both patients and hospitals can sign up' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/healthyme/profile.jpeg`, caption: 'Profile: Hospitals enter their information in profile' },

        { type: 'subtitle', text: 'Remindicine' },
        { type: 'text', text: 'It\'s common to have diseases as one ages, and medication intake is an essential part of that. However, more than 80% of patients usually miss their prescription. Remindincine aims to serve as a reminder for medication intake, for those patients who need to take various medications several times in a day (for instance, patients with uremia are usually required to take more than six types of medications daily), or individuals with memory impairment.' },
        { type: 'pdf', src: `${process.env.PUBLIC_URL}/images/projects/remindicine/project_proposal.pdf` },
        { type: 'pdf', src: `${process.env.PUBLIC_URL}/images/projects/remindicine/design_doc.pdf` },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/remindicine/mechanical-drawing-v1_orig.png`, caption: 'Pill box mechanical drawing' },

        { type: 'subtitle', text: 'Shoebill' },
        { type: 'text', text: 'Shoebill is a web application that tracks, detects, documents and provides solutions to gaming addiction. It\'s analytics are able to track your mental stability, mood and emotions while you game. It can help you discover trends in your temperament and learn what kind of gamer you are. Using Shoebill, we can learn what tilts you the most — and optimize and grow as a competitive gamer.' },
        { type: 'text', text: 'Shoebill is built with React.js as the main framework, supported by a Flask Python backend. We integrated Hume’s API to detect emotions related to game addiction and rage behaviour. We also tried integrating the Zepp watch to get user\'s health data for analysis.' },
        { type: 'youtube', id: 'qP-S0vukCM4' }, // shoebill
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/shoebill/landing_page.png`, caption: 'Profile (landing page): shows most recent screen capture from raging user\'s webcam and a customizable gaming timer' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/shoebill/stats.png`, caption: 'Stats: displays user\'s health data and analysis based on Zepp watch data' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/shoebill/support.png`, caption: 'Support: animated oscillating circle to engage users in a meditational breathing exercise after raging in game' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/shoebill/bluetooth.png`, caption: 'Bluetooth connection between Zepp watch and Shoebill' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/shoebill/bluetooth2.png`, caption: 'Bluetooth connection between Zepp watch and Shoebill' },
        
        { type: 'subtitle', text: 'SignLingo' },
        { type: 'text', text: 'SignLingo is a sign language translator software built using computer vision and the Blobscanner library in Processing for real-time translation between text and ASL. It incorporates error feedback mechanisms, providing users with real-time warnings for incorrect signs and an ASL cheat sheet for enhanced learning proficiency.' },
        { type: 'youtube', id: 'AVIqqDKNNUA' }, // signlingo
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/signlingo/detailed_instructions.png`, caption: 'Detailed instructions page' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/signlingo/title.png`, caption: 'Title page' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/signlingo/user_manual.png`, caption: 'User manual' },
        
        { type: 'subtitle', text: 'Feed the Child' },
        { type: 'text', text: 'Feed the Child is a 2D platformer game built using Python, Tkinter, and Pygame. It incorporates a sound and timer system, and the graphics drawn by me using Procreate and Adobe PS.' },
        { type: 'youtube', id: 'l8PHyBPLN_E' }, //feed the child

        { type: 'subtitle', text: 'FoodiEco' },
        { type: 'text', text: 'Winner of Best Software Project that gives users eco-friendly replacements of recipes. We used Python for backend algorithmic calculations, and Tkinter for interactive UI.' },
        { type: 'text', text: 'This project was inspired by how people are increasingly polluting the environment for their convenience. Most people think pollution is the fault of big corporate companies and there\'s nothing they can do as an individual to make a change. However, there is one thing we have not really realized, and that is what is inside of our fridge. Ignorance of food leads to food waste and compulsive buying which is detrimental to the environment. Therefore, we created FoodiEco, the byproduct of eco-friendliness and convenience. It offers a fridge page that allows the user to have a full view of the items in their fridge, helping reduce food waste and impulse buying. There is also a recipe page that allows the user to save their own recipes to help with the organization of cooking. More, there is a replacement page that informs the user of healthier and more eco-friendly replacements for certain ingredients.' },
        { type: 'youtube', id: 'd77sW5xHxH4' }, // foodieco
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/foodieco/landing.png`, caption: 'Landing page' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/foodieco/fridge.png`, caption: 'Opened ridge' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/foodieco/recipe.png`, caption: 'Recipe book' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/foodieco/list.png`, caption: 'Recipe: create your own recipe' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/foodieco/search.png`, caption: 'Replacement dictionary' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/foodieco/replacement.png`, caption: 'Replacement dictionary: create your own replacements' },
        
        { type: 'subtitle', text: 'ReadBetter' },
        { type: 'text', text: 'ReadBetter is a web application that utilizes bionic reading to help people increase their reading efficiency. Whether if it’s because you have low attention span or if you’re cramming in that last lecture before a quiz. Bionic reading is a technology of guiding people’s eyes across texts to assist in reading by providing artificial fixation points. By bolding initial letters of words with a specific rule that creates the highest efficiency in reading, it allows the reader to easily follow the text. ReadBetter accepts pdf files, image files (.jpeg, .jpg, and .png), and audio files and displays them in a bionic reading form for the users.' },
        { type: 'text', text: 'We developed a website using HTML, CSS and JS; using Flask and Python to code the functionality. Our program is able to handle various input types: pdf, image files, audio and txt. The parsing for these -files was coded using Python libraries: EasyOCR that handles image-to-text conversion and PyPDF2 for pdf-to-text. For the audio, we incorporated the use of AssemblyAI speech-to-text API, which converts audio files to text.' },
        { type: 'youtube', id: 'BRFJ2iNiig0' }, // readbetter
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/readbetter/landing.png`, caption: 'Landing page' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/readbetter/choose_file.png`, caption: 'File selection' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/readbetter/complete_conversion.png`, caption: 'Conversion completed.' },
        
        // { type: 'subtitle', text: "Slouchn't" },
        // { type: 'text', text: 'Slouchn’t is a posture correction software that utilizes computer vision. It first calibrates with the user to determine their correct and incorrect posture. With this collected data, the program will determine the range the user would have to meet in order to maintain a good posture. If the user does not have the right posture - straight back and neck - for a certain amount of time, the program will urge the user to adjust their posture through audio and video effects. The program also includes tips the user can keep in mind for maintaining the perfect posture.' },
        // { type: 'text', text: 'We used the opencv-python package, along with mediapipe to build our computer vision program. It prompts the webcam of the computer, which detects the motion of the person using specific body landmarks, including the shoulders, nose and eyes. The distances between these landmarks are then used to determine whether or not the person has incorrect posture. If the distance drops under a certain calculated threshold, the user is told to fix their posture before continuing their work. We also tested this on multiple people to raise the accuracy of our software' },
        // { type: 'youtube', id: 'v25uHHj_7GY' }, // slouchnt
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/slouchnt/tip.png`, caption: 'Intro screen: tip of the day' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/slouchnt/sit_straight.jpg`, caption: 'Calibration process: data collection' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/slouchnt/sitting_straight.png`, caption: 'Calibration process: user sitting straight' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/slouchnt/slouch.png`, caption: 'Calibration process: data collection' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/slouchnt/slouching.png`, caption: 'Calibration process: user slouching' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/slouchnt/calibration_complete.png`, caption: 'Calibration complete' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/slouchnt/warning.png`, caption: 'Warning window accompanied by sound to warn user to sit straight' },

        // { type: 'subtitle', text: 'OStranslate' },
        // { type: 'text', text: 'OStranslate is a web application that provides quick and easy summarization and translation by allowing the user to submit numerous types of file formats including text, url, video, and audio. After uploading, OStranslate provides a brief summary of the information covered in the uploaded file, then the user can choose from 133 different languages to translate between.' },
        // { type: 'text', text: 'OStranslate is built using Python, HTML, and CSS with the Symbl.ai and Google Translate APIs.' },
        // { type: 'youtube', id: 'yH0WUr2rpaQ' }, // ostranslate
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/ostranslate/home.png`, caption: 'Landing page' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/ostranslate/data.png`, caption: 'Summarization and translation appear here' },

        { type: 'subtitle', text: 'Data Colonialism & Meta Research' },
        { type: 'text', text: 'This research paper examines the issue of data colonialism as it pertains to Meta, with a specific focus on its environmental implications. Meta’s history of data exploitation, exemplified by controversies like the Cambridge Analytica scandal and WhatsApp data sharing, underscores the pervasive societal impact of unethical data practices. Violations of user privacy not only threaten a fundamental human right but also amplify biases against marginalized groups and contribute to environmental harm through unsustainable technological development.' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/datacolonialism/infographic.png`, caption: 'Data Colonialism in Meta Infographic' },
        { type: 'pdf', src: `${process.env.PUBLIC_URL}/images/projects/datacolonialism/data_colonialism.pdf` },
        
        { type: 'title', text: 'Onshape Gallery' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/a1.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/a2.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/b1.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/b2.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/ballista_closeup1.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/ballista_closeup2.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/ballista1.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/ballista2.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/c.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/d.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/e.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/f_mechanical_drawing.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/f.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/g_mechanical_drawing.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/g.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/h.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/i.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/j.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/k.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/l.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/m.png`, caption: 'Piano Achievement Image' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/projects/onshape/mechanical_drawing.png`, caption: 'Piano Achievement Image' },
        
        // { type: 'subtitle', text: 'Blind Box Project' },
        
        { type: 'title', text: 'Resume' },
        { type: 'pdf', src: `${process.env.PUBLIC_URL}/documents/2025_master_resume__simp_.pdf` },
    ],
    textboxContent: "",
};

export const danceFloor = {
    name: 'Dance Floor',
    x: 210 / macbookWidth,
    y: 570 / macbookHeight,
    width: 205 / macbookWidth,
    height: 160 / macbookHeight,
    modalContent: [
        { type: 'title', text: 'Dance Things' },
        { type: 'text', text: 'Instagram dance account: @helo_moshi' },
        { type: 'youtube', id: 'Oxr0JxiVCso' }, // baddie
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/baddie-group-photo.jpg`, caption: 'Baddie performance in Lazardis Hall, Laurier University, Waterloo.' },
        { type: 'youtube', id: 'sajsWQKAiek' }, // accendio
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/accendio-group-photo.jpg`, caption: 'Group photo of Accendio performance in Kabukicho, Tokyo.' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/kabukicho-group-photo.jpg`, caption: 'Group photo of Accendio performance in Kabukicho, Tokyo.' },
        { type: 'youtube', id: 'DWvmQFWLwLY' }, // tambourine
        { type: 'youtube', id: 'pCdh_bfSy5M' }, // gashina
        // { type: 'youtube', id: 'zdRHr963_LE' }, // sukidakara
        { type: 'youtube', id: 'uz8ux7EPHwI' }, // istj
        { type: 'youtube', id: '_pBiNEmWHhY' }, // dice
        { type: 'youtube', id: 'GYqEMHqhrLs' }, // ladida
        // { type: 'youtube', id: '9tioZwmZ1lk' }, // get back
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/get-back-dance-photo.jpg`, caption: 'Dance practice in XuanSe dance studio.' },
        { type: 'youtube', id: 'bO8DzvtGjto' }, // xuan se live performance
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/xuan-se-group-photo.jpg`, caption: 'Dance practice snap shot in XuanSe dance studio.' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/xuan-se-dance-photo-1.jpg`, caption: 'Dance practice snap shot in XuanSe dance studio.' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/xuan-se-dance-photo-2.jpg`, caption: 'Dance practice snap shot in XuanSe dance studio.' },
        { type: 'youtube', id: 'niTvaxbkku8' }, // hey mama
        { type: 'youtube', id: 'GAG_lFFnSRU' }, // panorama
        { type: 'youtube', id: 'oKd_tsLKM3U' }, // pink venom clip
        { type: 'youtube', id: 'Yy0YjQI83bk' }, // pink venom
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/lhss-group-photo-1.jpg`, caption: 'LHSS dance team group photo.' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/lhss-group-photo-2.jpg`, caption: 'LHSS dance team group photo.' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/dbd-arm-flower.jpg`, caption: 'LHSS Double Blue Day performance snap shot.' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/violeta.jpg`, caption: 'LHSS end-of-year Violeta performance snap shot.' },
        { type: 'youtube', id: 'ZQEZF117JaY' }, // pretty girls
        { type: 'youtube', id: 'pFdQui83pLk' }, // xiao cheng xia tian
        { type: 'youtube', id: 'brI-BJiU6VM' }, // quack quack
        { type: 'youtube', id: 'dqluTAhGLBI' }, // young boss
        // { type: 'youtube', id: 'MXAAh60NQss' }, // hype boy
        { type: 'youtube', id: 'SC-YZvHMA8g' }, // santa tell me
        { type: 'youtube', id: 'n6tXUaSRiOE' }, // scoop
        { type: 'youtube', id: '-2NCYs5t4to' }, // shape of you
        { type: 'youtube', id: 'yK9jC1jydWI' }, // cupid
        // { type: 'youtube', id: 'pOXwRIn1dnY' }, // zoom
        // { type: 'youtube', id: 'y2zZfOGaK5M' }, // weapon
    ],
    textboxContent: "",
};

export const easle = {
    name: 'Easle',
    x: 60 / macbookWidth,
    y: 210 / macbookHeight,
    width: 120 / macbookWidth,
    height: (270 / 2) / macbookHeight,
    modalContent: [
        { type: 'title', text: 'Art Things' },
        { type: 'text', text: 'Instagram art account: @acrenw' },
        { type: 'subtitle', text: 'Illustration Gallery' },
        { type: 'youtube', id: 'rzcSCLN9PmM' }, // sunsest
        { type: 'youtube', id: '_uWFIWkj6hA' }, // single layer
        { type: 'youtube', id: '0gJHkqd7xwA' }, // sticker
        { type: 'youtube', id: 'b3xqs8ZuWso' }, // phone case
        { type: 'youtube', id: 'EJdPlGHerAE' }, // food
        { type: 'youtube', id: 'zYYP5FY3px4' }, // cute girls
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/lama.jpg`, caption: 'Toys Still Life - Acrylic on Cardboard' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/morgan_freeman.jpg`, caption: 'Morgan Freeman - Acrylic on Cardboard' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/victorian_girls.jpg`, caption: 'Victorian Party - Acrylic on Canvas' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/sculpture1.jpg`, caption: 'Sculpture 1 - Graphite on Paper' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/sculpture2.jpg`, caption: 'Sculpture 2 - Graphite on Paper' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/reading_girl.jpg`, caption: 'Sunday Afternoon' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/sunset.png`, caption: 'Lone Traveller at Sunset' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/whale.jpg`, caption: 'Sky Whale - This is also an NFT' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/butterfly_girl.jpg`, caption: 'Butterfly Talk' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/bangs_girl.jpg`, caption: 'Vase Body' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/cheetah_girl.jgp.jpg`, caption: 'Wild' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/blind_girl.png`, caption: 'Blind' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/bubble_tea.png`, caption: 'Bubble Tea Day' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/egg_head.jpg`, caption: 'No Thoughts Egg Head' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/no_tears_girl.jpg`, caption: 'Water Shortage' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/silenced_girl.jpg`, caption: 'Silenced' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/chinese_bunny.png`, caption: 'Mid Autumn Festival' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/waves.jpg`, caption: 'Waves' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/chick.png`, caption: 'Chick' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/clouds.png`, caption: 'Clouds' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/carton_girl.png`, caption: 'Milk Carton Fairy' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/punk_girl.png`, caption: 'Punk' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/red_thread_guy.png`, caption: 'Satan' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/sleeping_girl.png`, caption: 'Lavender Night' },
        { type: 'subtitle', text: 'Designs' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/chicken_design.png`, caption: 'Paid Poster Design Commission for News Company, gained >130k views' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/basketball_design.png`, caption: 'Basketball Shoes Poster Design' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/keyclub_logo.png`, caption: 'Key Club Division 3/4 Logo Design' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/keyclub.png`, caption: 'Key Club Media Design' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/nobody_cares.png`, caption: 'Shirt Design - Lithography' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/skateboard.jpg`, caption: 'Skateboard Design' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/wufc.png`, caption: 'Frizbee Design for WUFC at the University of Waterloo' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/hazards_poster.jpg`, caption: 'Hazards Poster Design' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/sunset_village.png`, caption: 'Sunset Village' },
        { type: 'subtitle', text: '3D Gallery' },
        { type: 'youtube', id: 'ulzAFV6T5xw' }, // rolling ball
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/candygirl.png`, caption: 'Candy Girl blindbox design with Blender' },
        // TODO: add my islands and donuts and whatnot
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/goosex.png`, caption: 'Autonomous delivery robot design in Nomad' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/jinx.png`, caption: 'Jinx Sculpture with Nomad' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/pochita.png`, caption: 'Pochita Sculpture with Nomad' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/skull_book.png`, caption: 'Skull book sculpture with Nomad' },
    ],
    textboxContent: "",
};

export const guitar = {
    name: 'Guitar',
    x: 560 / macbookWidth,
    y: 200 / macbookHeight,
    width: 110 / macbookWidth,
    height: (220 * 2 / 3) / macbookHeight,
    modalContent: [],
    textboxContent: "",
};

export const bookshelf = {
    name: 'Bookshelf',
    x: 700 / macbookWidth,
    y: 190 / macbookHeight,
    width: 200 / macbookWidth,
    height: (260 * 2 / 3) / macbookHeight,
    modalContent: [
        { type: 'title', text: 'Literature Things' },
        { type: 'text', text: 'Caterpillar finding friends published book.' },
        { type: 'text', text: 'Published Polar Express short story.' },
        { type: 'text', text: 'My poetry & anthology.' },
        { type: 'text', text: 'To be added...' },
    ],
    textboxContent: "",
};

export const camera = {
    name: 'Camera',
    x: 1250 / macbookWidth,
    y: 270 / macbookHeight,
    width: 90 / macbookWidth,
    height: 60 / macbookHeight,
    modalContent: [
        { type: 'title', text: 'Photography Things' },
        { type: 'text', text: 'Instagram photography account: @a.pgy_t.' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/water-fall.JPG`, caption: 'Waterfall' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/before-the-show.jpg`, caption: 'Before the Show | 上台之前' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/conformity-bridge.JPG`, caption: 'Conformity Bridge | 往来皆人不见己' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/bubble-man.JPG`, caption: 'Bubble Man' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/delivery-man.JPG`, caption: 'He Wilts so the Flowers Bloom | 送餐夕阳巷，我本送花郎' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/memory-shop.JPG`, caption: 'The Memory Shop' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/mom.jpg`, caption: 'Mom' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/slippery.JPG`, caption: 'Slipping on Sunlight' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/snowing-temple.JPG`, caption: 'Bubble Snow' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/lonely.JPG`, caption: 'Lonely' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/thin-house.JPG`, caption: 'Thin House' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/fence.JPG`, caption: 'Fence' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/mirror.JPG`, caption: 'Reflection' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/library.JPG`, caption: 'Grind or Die' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/bridge.JPG`, caption: 'Bridge' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/tingzi-bridge.jpg`, caption: 'Another Bridge' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/logo.JPG`, caption: 'Logo' },
        { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/tip.jpg`, caption: 'Acute' },
        // { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/lungs.JPG`, caption: 'Lungs' },
    ],
    textboxContent: "",
};

export const metals = {
    name: 'Metals',
    x: 1090 / macbookWidth,
    y: 50 / macbookHeight,
    width: 190 / macbookWidth,
    height: 70 / macbookHeight,
    modalContent: [
        { type: 'title', text: 'Certifications and Awards'},
        { type: 'list', text: 'Level 8 Piano First Class Honours Issued by The Royal Conservatory of Music' },
        { type: 'list', text: 'CCC Top 25% · Certificate of Distinction Issued by University of Waterloo CEMC' },
        { type: 'list', text: '2 time 2nd place winner in National Chinese Panda Cup Competition Issued by The Consulate General of the People’s Republic of China in Toronto' },
        { type: 'list', text: 'Short Story published in National Student Short-Story Contest · Certificate of Achievement Issued by Polar Expressions Publishing In recognition for outstanding achievement' },
        { type: 'list', text: 'Certificate of Achievement In Recognition of Academic Excellence Issued by KW Chinese School' },
      ],
    textboxContent: "",
};

export const character = {
    name: 'Character',
    width: 120 / macbookWidth,
    height: 120 / macbookHeight,
    modalContent: [],
    textboxContent: "Interact/learn about ME by clicking on any glowing object! I'm a computer engineering student at the University of Waterloo actively looking for jobs, contact me here:\n\nc252wang@uwaterloo.ca | +1 519-577-3709 | +86 080-5661-4359\nP.S. You can find more details on my computer.",
};

export const speechBubble = {
    name: 'Speech Bubble',
    width: 70 / macbookWidth,
    height: 56 / macbookHeight,
    modalContent: [],
    textboxContent: "Interact/learn about ME by clicking on any glowing object! I'm a computer engineering student at the University of Waterloo actively looking for jobs, contact me here:\n\nc252wang@uwaterloo.ca | +1 519-577-3709 | +86 080-5661-4359\nP.S. You can find more details on my computer.",
};

// Group together
export const interactableGameObjects = {
    piano,
    computer,
    danceFloor,
    easle,
    bookshelf,
    camera,
    metals,
    character,
    speechBubble,
  };

// Non-interactable objects
export const bed = {
    name: 'Bed',
    x: 1040 / macbookWidth,
    y: 220 / macbookHeight,
    width: 145 / macbookWidth,
    height: 200 / macbookHeight,
    textboxContent: "Interact/learn about ME by clicking on any glowing object! I'm a computer engineering student at the University of Waterloo actively looking for jobs, contact me here:\n\nc252wang@uwaterloo.ca | +1 519-577-3709 | +86 080-5661-4359\nP.S. You can find more details on my computer.",
};

export const shelf = {
    name: 'Shelf',
    x: 1230 / macbookWidth,
    y: 290 / macbookHeight,
    width: 150 / macbookWidth,
    height: 50 / macbookHeight,
    textboxContent: "Interact/learn about ME by clicking on any glowing object! I'm a computer engineering student at the University of Waterloo actively looking for jobs, contact me here:\n\nc252wang@uwaterloo.ca | +1 519-577-3709 | +86 080-5661-4359\nP.S. You can find more details on my computer.",
};

export const wallHorizon = {
    name: 'Wall Horizon',
    y: 230 / macbookHeight,
};