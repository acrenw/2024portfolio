import React, { useRef, useEffect, useState } from 'react';
import '../styles/GameCanvas.css';
import ModalComponent from './ModalComponent';
import speechBubbleImage from '../assets/speechBubble.png';
import backgroundImage from '../assets/room.PNG';
import backgroundImageGlow from '../assets/roomGlow.png';
import characterFrontImage from '../assets/characterFront.PNG';
import characterBackImage from '../assets/characterBack.PNG';
import characterLeftImage from '../assets/characterLeft.PNG';
import characterRightImage from '../assets/characterRight.PNG';
import TextboxComponent from './TextboxComponent';

// TODO: make this bilingual
//       separate this gigantic file into multiple ones, probably one file for each object??
//       make bg image have glowing animation on clickable objects
//       make prettier

const GameCanvas = () => {
    const canvasRef = useRef(null);
    const [modalContent, setModalContent] = useState(null); // For pop-up interactions
    const [textboxContent, setTextboxContent] = useState(null);
    const [speechBubbleImg, setSpeechBubbleImg] = useState();
    // TODO: add a characterdirection here
    const [character, setCharacter] = useState({ x: 650, y: 550, speed: 20, width: 120, height: 120 });
    const [currentCharacterImg, setCurrentCharacterImg] = useState(null);  // Track current image
    const [currentBgImg, setCurrentBgImg] = useState(null);
    // const [opacity, setOpacity] = useState(1);
    // const [isFadingIn, setIsFadingIn] = useState(true);
    
    const [characterFrontImg, setCharacterFrontImg] = useState(null);
    const [characterBackImg, setCharacterBackImg] = useState(null);
    const [characterLeftImg, setCharacterLeftImg] = useState(null);
    const [characterRightImg, setCharacterRightImg] = useState(null);

    const [bgImg, setBgImg] = useState(null);
    const [bgImgGlow, setBgImgGlow] = useState(null);

    
    // Load images
    useEffect(() => {
      const speechBubbleImg = new Image()
      speechBubbleImg.src = speechBubbleImage;
      speechBubbleImg.onload = () => setSpeechBubbleImg(speechBubbleImg)

      const characterFrontImg = new Image();
      characterFrontImg.src = characterFrontImage;
      characterFrontImg.onload = () => setCharacterFrontImg(characterFrontImg);
  
      const characterBackImg = new Image();
      characterBackImg.src = characterBackImage;
      characterBackImg.onload = () => setCharacterBackImg(characterBackImg);
  
      const characterLeftImg = new Image();
      characterLeftImg.src = characterLeftImage;
      characterLeftImg.onload = () => setCharacterLeftImg(characterLeftImg);
  
      const characterRightImg = new Image();
      characterRightImg.src = characterRightImage;
      characterRightImg.onload = () => setCharacterRightImg(characterRightImg);
  
      const bgImg = new Image();
      bgImg.src = backgroundImage;
      bgImg.onload = () => setBgImg(bgImg);

      const bgImgGlow = new Image();
      bgImgGlow.src = backgroundImageGlow;
      bgImgGlow.onload = () => setBgImgGlow(bgImgGlow);
  
      // Set the initial images
      setCurrentCharacterImg(characterFrontImg);
      setCurrentBgImg(bgImg);

    }, []);
  


  // Set objects' position and size
  // TODO: make this simpler with
  //  const objects = [
  //       { x: 80, y: 100, name: 'Piano', content: 'Piano Achievements' OR content: pianoModalContent},
  //       { x: 120, y: 100, name: 'Metals', content: 'Metals Achievements' }
  // ];
  const piano = { x: 920, y: 570, width: 350, height: 160 }; 
  const computer = { x: 240, y: 130, width: 270, height: 310*2/3 }; 
  const danceFloor = { x: 210, y: 570, width: 205, height: 160 };
  const easle = { x: 60, y: 210, width: 120, height: 270/2 };  
  const guitar = { x: 560, y: 200, width: 110, height: 220*2/3 };  
  const bookshelf = { x: 700, y: 190, width: 200, height: 260*2/3 };  
  const camera = { x: 1250, y: 270, width: 90, height: 60 }; 
  const metals = { x: 1090, y: 50, width: 190, height: 70 };  
  const bed = { x: 1030, y: 220, width: 185, height: 200 };  
  const shelf = { x: 1230, y: 290, width: 150, height: 100/2 };  
  const speechBubble = { width: 70, height: 56 }
  const wallHorizon = 310;
 
  const updateCanvasSize = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth; // Set canvas width to the full window width
      canvas.height = window.innerHeight; // Set canvas height to the full window height
    }
  };

  // Set up window resizing
  useEffect(() => {
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  // Detect interactions
  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // TODO: make this less repetitive, make a f const checkClickAndSetModal = (clickX, clickY, x, y, width, height, modalContent) => {}
    // ex. pianoModalContent = [{},{},{}]
    if (clickX > piano.x && clickX < piano.x + piano.width && clickY > piano.y && clickY < piano.y + piano.height) {
        setModalContent([
            { type: 'text', text: 'Piano Achievements' },
            // { type: 'text', text: 'Instagram music account: @' },
            { type: 'text', text: 'Level 8 Piano First Class Honours The Royal Conservatory of Music Issued Jul 2021' },
            // { type: 'image', src: `${process.env.PUBLIC_URL}/images/characterBack.PNG`, caption: 'Piano Achievement Image' },
            // { type: 'text', text: 'Details about your piano achievements, recitals, and progress.' },
            // { type: 'image', src: `${process.env.PUBLIC_URL}/images/characterBack.PNG`, caption: 'Piano Achievement Image' },
            // { type: 'text', text: 'Details about your piano achievements, recitals, and progress.' },
        ]);
        setTextboxContent(""); 
    }
    
    if (clickX > computer.x && clickX < computer.x + computer.width && clickY > computer.y && clickY < computer.y + computer.height) {
        setModalContent([
            { type: 'text', text: 'Cera\'s computer' },
            { 
              type: 'text', 
              text: (
                  <>
                      Email: <a href="mailto:c252wang@uwaterloo.ca">c252wang@uwaterloo.ca</a> | 
                      Phone: <a href="tel:+15195773709">(519) 577-3709</a> |
                      ~ <a href="https://www.linkedin.com/in/cera-wang-171699240/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
                      ~ <a href="https://github.com/acrenw" target="_blank" rel="noopener noreferrer">Github</a>
                  </>
              ) 
            },
            { type: 'text', text: 'Projects Folder' },
            { type: 'text', text: 'Internships Folder' },
            { type: 'text', text: 'Rapyuta Robotics' },
            { type: 'text', text: 'Loopx - Embedded Programmer + Graphic Designer' },
            { type: 'text', text: 'I worked in ROS (Robot Operating System) with Python for autonomous mining vehicles. I also contributed to the UI/UX design of the LoopX website and the AI platform AISear with Adobe PS, Figma, and Procreate. As the designer, I created marketing media like the GoosEx logo, posters, flyers, stickers, busines scards, shirts and social media banners.' },
            { type: 'text', text: 'OpenPrinciples - Full stack Developer' },
            { type: 'text', text: 'I adjusted code-based backend and frontend development in Python for UltraBrain (an AI and human hybrid assistant) optimizing algorithmic functionality and ensuring enhanced productivity and user experience. I also designed and implemented a data engineering pipeline in Python to facilitate analytics.' },
            { type: 'text', text: 'Projects' },
            { type: 'text', text: 'ClockHacks - Organizer' },
            { type: 'text', text: 'I organized ClockHacks, the largest MLH-certified high school hackathon of the 2023 season, with participation of 360 attendees and securing prizes valued over $10,000. Made organizer project using React and Tailwind CSS.' },
            { type: 'text', text: 'FoodiEco' },
            { type: 'text', text: 'People are polluting the environment for their convenience. Most people aren’t aware of what is inside their fridge, leading to food waste and compulsive buying which is detrimental to the environment. FoodiEco is the byproduct of eco-friendliness and convenience. ​The FoodiEco app, coded in Python, offers a fridge page that allows the user to have a full view of the items in their fridge, helping reduce food waste and impulse buying. There is also a recipe page that allows the user to save their own recipes to help with the organization of cooking. Moreover, there is a replacement page that informs the user of healthier and more eco-friendly replacements for certain ingredients.' },
            { type: 'text', text: 'HealThyme' },
            { type: 'text', text: 'Shoebill' },
            { type: 'text', text: "Slouchn't" },
            { type: 'text', text: 'Remindicine' },
            { type: 'text', text: 'It\'s common to have diseases as one ages, and medication intake is an essential part of that. However, more than 80% of patients usually miss their prescription. Remindincine aims to serve as a reminder for medication intake, for those patients who need to take various medications several times in a day (for instance, patients with uremia are usually required to take more than six types of medications daily), or individuals with memory impairment.' },
            { type: 'pdf', src: 'documents/data_colonialism.pdf' },
            { type: 'text', text: 'ReadBetter' },
            { type: 'text', text: 'OStranslate' },
            { type: 'text', text: 'SignLingo' },
            { type: 'youtube', id: 'AVIqqDKNNUA' },
            { type: 'text', text: 'Feed the Child' },
            { type: 'youtube', id: 'l8PHyBPLN_E' },
            { type: 'text', text: 'Data Colonialism & Meta Research' },
            { type: 'pdf', src: 'documents/data_colonialism.pdf' },
            { type: 'text', text: 'Onshape Gallery' },
            { type: 'text', text: 'Blind Box Project' },
            { type: 'pdf', src: 'documents/2025_master_resume__simp_.pdf' },
        ]);
        setTextboxContent(""); 
    }
    
    // TODO: add interactive captions & reorganize
    if (clickX > danceFloor.x && clickX < danceFloor.x + danceFloor.width && clickY > danceFloor.y && clickY < danceFloor.y + danceFloor.height) {
        setModalContent([
            { type: 'text', text: 'Dance Achievements' },
            { type: 'text', text: 'Instagram dance account: @helo_moshi' },
            { type: 'youtube', id: 'Oxr0JxiVCso' }, //baddie
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/baddie-group-photo.jpg`, caption: 'Baddie performance in Lazardis Hall, Laurier University, Waterloo.' },
            { type: 'youtube', id: 'sajsWQKAiek' }, //accendio
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/accendio-group-photo.jpg`, caption: 'Group photo of Accendio performance in Kabukicho, Tokyo.' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/kabukicho-group-photo.jpg`, caption: 'Group photo of Accendio performance in Kabukicho, Tokyo.' },
            { type: 'youtube', id: '_pBiNEmWHhY' }, //dice
            { type: 'youtube', id: 'yK9jC1jydWI' }, //cupid
            { type: 'youtube', id: 'pCdh_bfSy5M' }, //gashina
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/get-back-dance-photo.jpg`, caption: 'Dance practice in XuanSe dance studio.' },
            { type: 'youtube', id: '9tioZwmZ1lk' }, //get back
            { type: 'youtube', id: 'MXAAh60NQss' }, //hype boy
            { type: 'youtube', id: 'uz8ux7EPHwI' }, //istj
            { type: 'youtube', id: 'GYqEMHqhrLs' }, //ladida
            { type: 'youtube', id: 'niTvaxbkku8' }, //hey mama
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/lhss-group-photo-1.jpg`, caption: 'LHSS dance team group photo.' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/lhss-group-photo-2.jpg`, caption: 'LHSS dance team group photo.' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/dbd-arm-flower.jpg`, caption: 'LHSS Double Blue Day performance snap shot.' },
            { type: 'youtube', id: 'GAG_lFFnSRU' }, //panorama
            { type: 'youtube', id: 'oKd_tsLKM3U' }, //pink venom clip
            { type: 'youtube', id: 'Yy0YjQI83bk' }, //pink venom
            { type: 'youtube', id: 'ZQEZF117JaY' }, //pretty girls
            { type: 'youtube', id: 'brI-BJiU6VM' }, //quack quack
            { type: 'youtube', id: 'SC-YZvHMA8g' }, //santa tell me
            { type: 'youtube', id: 'n6tXUaSRiOE' }, //scoop
            { type: 'youtube', id: '-2NCYs5t4to' }, //shape of you
            { type: 'youtube', id: 'zdRHr963_LE' }, //sukidakara
            { type: 'youtube', id: 'DWvmQFWLwLY' }, //tambourine
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/violeta.jpg`, caption: 'LHSS end-of-year Violeta performance snap shot.' },
            { type: 'youtube', id: 'y2zZfOGaK5M' }, //weapon
            { type: 'youtube', id: 'pFdQui83pLk' }, //xiao cheng xia tian
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/xuan-se-dance-photo.jpg`, caption: 'Dance practice snap shot in XuanSe dance studio.' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/xuan-se-dance-photo-1.jpg`, caption: 'Dance practice snap shot in XuanSe dance studio.' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/dance/xuan-se-dance-photo-2.jpg`, caption: 'Dance practice snap shot in XuanSe dance studio.' },
            { type: 'youtube', id: 'bO8DzvtGjto' }, //xuan se live performance
            { type: 'youtube', id: 'dqluTAhGLBI' }, //young boss
            { type: 'youtube', id: 'pOXwRIn1dnY' }, //zoom
        ]);
        setTextboxContent(""); 
    }
    
    if (clickX > easle.x && clickX < easle.x + easle.width && clickY > easle.y && clickY < easle.y + easle.height) {
        setModalContent([
            { type: 'text', text: 'Instagram art account: @acrenw' },
            { type: 'text', text: 'Illustration Gallery' },
            { type: 'youtube', id: 'rzcSCLN9PmM' },
            { type: 'youtube', id: '_uWFIWkj6hA' },
            { type: 'youtube', id: '0gJHkqd7xwA' },
            { type: 'youtube', id: 'b3xqs8ZuWso' },
            { type: 'youtube', id: 'EJdPlGHerAE' },
            { type: 'youtube', id: 'zYYP5FY3px4' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/bangs_girl.jpg`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/basketball_design.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/blind_girl.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/bubble_tea.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/butterfly_girl.jpg`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/carton_girl.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/cheetah_girl.jgp.jpg`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/chick.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/chicken_design.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/chinese_bunny.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/clouds.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/egg_head.jpg`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/hazards_poster.jpg`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/keyclub_logo.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/keyclub.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/lama.jpg`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/morgan_freeman.jpg`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/no_tears_girl.jpg`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/nobody_cares.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/punk_girl.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/reading_girl.jpg`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/red_thread_guy.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/sculpture1.jpg`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/sculpture2.jpg`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/silenced_girl.jpg`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/skateboard.jpg`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/sleeping_girl.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/sunset_village.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/sunset.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/victorian_girls.jpg`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/waves.jpg`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/whale.jpg`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/wufc.png`, caption: 'Artistic Achievement Image' },
            { type: 'text', text: '3D Gallery' },
            { type: 'youtube', id: 'ulzAFV6T5xw' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/candygirl.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/goosex.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/jinx.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/pochita.png`, caption: 'Artistic Achievement Image' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/art/skull_book.png`, caption: 'Artistic Achievement Image' },
        ]);
        setTextboxContent(""); 
    }
    
    // if (clickX > guitar.x && clickX < guitar.x + guitar.width && clickY > guitar.y && clickY < guitar.y + guitar.height) {
    //     setModalContent([
    //         { type: 'text', text: 'Guitar Achievements' },
    //         { type: 'image', src: `${process.env.PUBLIC_URL}/images/characterBack.PNG`, caption: 'Guitar Achievement Image' },
    //         { type: 'text', text: 'Instagram music account: @.' },
    //     ]);
    //     setTextboxContent(""); 
    // }
    
    if (clickX > bookshelf.x && clickX < bookshelf.x + bookshelf.width && clickY > bookshelf.y && clickY < bookshelf.y + bookshelf.height) {
        setModalContent([
            { type: 'text', text: 'Literature Achievements' },
            { type: 'text', text: 'Caterpillar finding friends.' },
            { type: 'text', text: 'The  Polar Express short story.' },
            { type: 'text', text: 'My poetry & anthology.' },
        ]);
        setTextboxContent(""); 
    }
    
    if (clickX > camera.x && clickX < camera.x + camera.width && clickY > camera.y && clickY < camera.y + camera.height) {
        setModalContent([
            { type: 'text', text: 'Photography Achievements' },
            { type: 'text', text: 'Instagram photography account: @a.pgy_t.' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/before-the-show.jpg`, caption: 'Before the Show | 上台之前' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/bridge.JPG`, caption: 'Bridge' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/bubble-man.JPG`, caption: 'Bubble Man' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/conformity-bridge.JPG`, caption: 'Conformity Bridge | 往来皆人不见己' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/delivery-man.JPG`, caption: 'He Wilts so the Flowers Bloom | 送餐夕阳巷，我本送花郎' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/fence.JPG`, caption: 'Fence' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/library.JPG`, caption: 'Grind or Die' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/logo.JPG`, caption: 'Logo' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/lonely.JPG`, caption: 'Lonely' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/lungs.JPG`, caption: 'Lungs' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/memory-shop.JPG`, caption: 'The Memory Shop' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/mirror.JPG`, caption: 'Reflection' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/mom.jpg`, caption: 'Mom' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/slippery.JPG`, caption: 'Slipping on Sunlight' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/snowing-temple.JPG`, caption: 'Bubble Snow' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/thin-house.JPG`, caption: 'Thin House' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/tingzi-bridge.jpg`, caption: 'Another Bridge' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/tip.jpg`, caption: 'Acute' },
            { type: 'image', src: `${process.env.PUBLIC_URL}/images/photography/water-fall.JPG`, caption: 'Waterfall' },
        ]);
        setTextboxContent(""); 
    }
    
    if (clickX > metals.x && clickX < metals.x + metals.width && clickY > metals.y && clickY < metals.y + metals.height) {
        setModalContent([
            { type: 'text', text: 'Certifications and Awards'},
            { type: 'text', text: 'Level 8 Piano First Class Honours The Royal Conservatory of Music Issued Jul 2021' },
            { type: 'text', text: 'Certificate of Distinction Issued by University of Waterloo CEMC · Apr 2021 CCC Top 25%.' },
            { type: 'text', text: 'Chinese Panda Cup Competition Issued by The Consulate General of the People’s Republic of China in Toronto · Aug 2017 & 2018 Second Place ' },
            { type: 'text', text: 'Certificate of Achievement Certificate of Achievement Issued by KW Chinese School · Jun 2016 In Recognition of Academic Excellence' },
            { type: 'text', text: 'Certificate of Achievement Issued by Polar Expressions Publishing In recognition for outstanding achievement in 2018/2019 National Student Short-Story Contest ' },
          ]);
          setTextboxContent(""); 
    }
    
    if (clickX > character.x && clickX < character.x+character.width && clickY > character.y && clickY < character.y+character.height || clickX > (character.x + character.width - 5) && clickX < (character.x + character.width - 5 + speechBubble.width) && clickY > (character.y - 15) && clickY < (character.y - 15 + speechBubble.height)) {
      setTextboxContent("Interact/learn about ME by clicking on any glowing object! I'm a computer engineering student at the University of Waterloo actively looking for jobs, contact me here:\n\nc252wang@uwaterloo.ca | (519) 577-3709\nP.S. you can find for details on my computer.");
      // setTextboxContent("Interact/learn about ME by clicking on or pressing 'Z' near any glowing object! I'm a computer engineering student at the University of Waterloo actively looking for jobs, contact me here:\n\nc252wang@uwaterloo.ca | (519) 577-3709\nP.S. you can find for details on my computer.");

    }
  };

    // Set initial textbox
    useEffect(() => {
      setTextboxContent("Interact/learn about ME by clicking on any glowing object! I'm a computer engineering student at the University of Waterloo actively looking for jobs, contact me here:\n\nc252wang@uwaterloo.ca | (519) 577-3709\nP.S. you can find for details on my computer.");
      // setTextboxContent("Interact/learn about ME by clicking on or pressing 'Z' near any glowing object! I'm a computer engineering student at the University of Waterloo actively looking for jobs, contact me here:\n\nc252wang@uwaterloo.ca | (519) 577-3709\nP.S. you can find for details on my computer.");
    }, []);

  // TODO: add another section for "z" button controls when character walks near element
  //       add section for idle animation (character and speech bubble, amke entire animation stuff an f)

// // Function to draw the grid with labels
// const drawGrid = (context, width, height) => {
//     context.strokeStyle = '#ccc'; // Grid line color
//     context.font = '10px Arial';  // Font for labels
//     context.fillStyle = 'black';  // Label color
    
//     // Draw vertical and horizontal lines every 10px
//     for (let x = 0; x <= width; x += 10) {
//       context.beginPath();
//       context.moveTo(x, 0);
//       context.lineTo(x, height);
//       context.stroke();
//       // Label the x-coordinate at the top
//       if (x % 50 === 0) {
//         context.fillText(x, x, 10); // Text slightly offset to avoid overlapping with the line
//       }
//     }

//     for (let y = 0; y <= height; y += 10) {
//       context.beginPath();
//       context.moveTo(0, y);
//       context.lineTo(width, y);
//       context.stroke();
//       // Label the y-coordinate on the left side
//       if (y % 50 === 0) {
//         context.fillText(y, 2, y); // Text slightly offset to avoid overlapping with the line
//       }
//     }
//   };


  const draw = (context) => {
    // Clear canvas
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    
    // Background
    if (currentBgImg) {
      // context.globalAlpha = opacity;
      context.drawImage(currentBgImg, 0, 0, canvasRef.current.width, canvasRef.current.height);
      // context.globalAlpha = 1; // Reset alpha for other drawings
    }
    
    // Character
    if (currentCharacterImg) {
        context.drawImage(currentCharacterImg, character.x, character.y, character.width, character.height);
    }

    // Speech bubble
    if (speechBubbleImg && !textboxContent) {
      context.drawImage(speechBubbleImg, character.x + character.width - 5, character.y - 15, speechBubble.width, speechBubble.height);
    }
    
    // Grid
    // drawGrid(context, canvasRef.current.width, canvasRef.current.height);
  };

  // Draw game
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (context) {
      draw(context);
    }
  }, [character, currentCharacterImg, currentBgImg]);  // Redraw when character or currentCharacterImg changes


  // TODO: add fading animation
  // Background image animation
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgImg((prevBgImg) => (prevBgImg === bgImg ? bgImgGlow : bgImg));
    }, 500); // Change every 0.5 seconds

    return () => clearInterval(intervalId);
  }, [bgImg, bgImgGlow]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    draw(context);
  }, [currentBgImg]); // Redraw whenever the current background image changes


  // // Fading animation
  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext('2d');

  //   const fade = () => {
  //     const fadeInterval = setInterval(() => {
  //       setOpacity((prevOpacity) => {
  //         // Change opacity based on fading direction
  //         const newOpacity = prevOpacity + (isFadingIn ? 0.05 : -0.05);
  //         draw(context, currentBgImg, Math.max(0, Math.min(1, newOpacity)));

  //         if (newOpacity <= 0 || newOpacity >= 1) {
  //           clearInterval(fadeInterval);
  //           // Change fade direction and switch images when fully faded
  //           setIsFadingIn(!isFadingIn);
  //           setCurrentBgImg((prevImage) => (prevImage === bgImg ? bgImgGlow : bgImg));
  //         }

  //         return Math.max(0, Math.min(1, newOpacity));
  //       });
  //     }, 50);
  //   };

  //   fade();
  //   const intervalId = setInterval(fade, 500); // Change image every 0.5 seconds

  //   return () => clearInterval(intervalId);
  // }, [currentBgImg, isFadingIn, bgImg, bgImgGlow]);

  function isColliding(obj1, obj2) {
    return (
      obj1.x < obj2.x + obj2.width &&
      obj1.x + obj1.width > obj2.x &&
      obj1.y < obj2.y + obj2.height &&
      obj1.y + obj1.height > obj2.y
    );
  }  

  // Click events
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.addEventListener('click', handleCanvasClick);
    return () => {
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, []);

  // Key events
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [character, currentCharacterImg]);

  const handleKeyDown = (e) => {
    const newCharacter = { ...character };
    switch (e.key) {
      case 'ArrowUp':
        newCharacter.y -= character.speed;
        setCurrentCharacterImg(characterBackImg);
        break;
      case 'ArrowDown':
        newCharacter.y += character.speed;
        setCurrentCharacterImg(characterFrontImg);
        break;
      case 'ArrowLeft':
        newCharacter.x -= character.speed;
        setCurrentCharacterImg(characterLeftImg);
        break;
      case 'ArrowRight':
        newCharacter.x += character.speed;
        setCurrentCharacterImg(characterRightImg);
        break;
      default:
        break;
    }

    // Check for collision
    // Array of objects to check for collisions
    const obstacles = [piano, computer, easle, guitar, bookshelf, camera, metals, bed, shelf]; //danceFloor

    for (let obstacle of obstacles) {
      if (isColliding(newCharacter, obstacle)) {
        return;
      }
    }
    // Check boundary collisions
    if (newCharacter.y < wallHorizon || 
      newCharacter.y + character.height > canvasRef.current.height) {
    return;
  }

    // Update character image
    setCharacter(newCharacter);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        onClick={handleCanvasClick}
      />
      {modalContent && (
        <ModalComponent
          content={modalContent}
          onClose={() => setModalContent(null)}
        />
      )}
      {textboxContent && (
        <TextboxComponent
          content={textboxContent}
          onClose={() => setTextboxContent(null)}
        />
      )}
    </div>
  );  
};

export default GameCanvas;
