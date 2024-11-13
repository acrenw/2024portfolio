import React, { useRef, useEffect, useState } from 'react';
import '../styles/GameCanvas.css';
import ModalComponent from './ModalComponent';
import backgroundImage from '../assets/room.png';
import backgroundImageGlow from '../assets/roomGlow.png';
import characterFrontImage from '../assets/characterFront.PNG';
import characterBackImage from '../assets/characterBack.PNG';
import characterLeftImage from '../assets/characterLeft.PNG';
import characterRightImage from '../assets/characterRight.PNG';
import TextboxComponent from './TextboxComponent';

// TODO: make this bilingual
//       separate this gigantic file into multiple ones, probably one file for each object??
//       make bg image have glowing animation on clickable objects


const GameCanvas = () => {
    const canvasRef = useRef(null);
    const [modalContent, setModalContent] = useState(null); // For pop-up interactions
    const [textboxContent, setTextboxContent] = useState(null);
    const [character, setCharacter] = useState({ x: 650, y: 550, speed: 20, width: 120, height: 120 });
    const [currentImage, setCurrentImage] = useState(null);  // Track current image
    const [currentBgImage, setCurrentBgImage] = useState(null);
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
      setCurrentImage(characterFrontImg);
      setCurrentBgImage(bgImg);

    }, []);
  


  // Set objects' position and size
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

    if (clickX > piano.x && clickX < piano.x + piano.width && clickY > piano.y && clickY < piano.y + piano.height) {
        setModalContent([
            { type: 'text', text: 'Piano Achievements' },
            // { type: 'text', text: 'Instagram music account: @' },
            { type: 'text', text: 'Level 8 Piano First Class Honours The Royal Conservatory of Music Issued Jul 2021' },
            // { type: 'image', src: 'images/characterBack.PNG', alt: 'Piano Achievement Image' },
            // { type: 'text', text: 'Details about your piano achievements, recitals, and progress.' },
            // { type: 'image', src: 'images/characterBack.PNG', alt: 'Piano Achievement Image' },
            // { type: 'text', text: 'Details about your piano achievements, recitals, and progress.' },
        ]);
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
    }
    
    // TODO: add interactive captions
    if (clickX > danceFloor.x && clickX < danceFloor.x + danceFloor.width && clickY > danceFloor.y && clickY < danceFloor.y + danceFloor.height) {
        setModalContent([
            { type: 'text', text: 'Dance Achievements' },
            { type: 'text', text: 'Instagram dance account: @helo_moshi' },
            { type: 'youtube', id: 'Oxr0JxiVCso' },
            // { type: 'video', src: 'images/dance/accendio.MP4', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            { type: 'image', src: 'images/dance/accendio-group-photo.jpg', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            { type: 'image', src: 'images/dance/baddie-group-photo.jpg', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/cupid.mov', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            { type: 'image', src: 'images/dance/dbd-arm-flower.jpg', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/dice.mov', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/ding-dang.mov', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/gashina.mov', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            { type: 'image', src: 'images/dance/get-back-dance-photo.jpg', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/get-back.MP4', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/hey-mama.mov', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/hype-boy.MP4', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/istj.mov', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            { type: 'image', src: 'images/dance/kabukicho-group-photo.jpg', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/ladida.mp4', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            { type: 'image', src: 'images/dance/lhss-group-photo-1.jpg', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            { type: 'image', src: 'images/dance/lhss-group-photo-2.jpg', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/panorama.MOV', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/pink-venom-zoom.mov', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/pink-venom.mov', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/pretty-girls.mov', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/quack-quack.mov', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/santa-tell-me.mov', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/scoop.mov', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/shape-of-you.mov', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/sukidakara.mov', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/tambourine.mov', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            { type: 'image', src: 'images/dance/violeta.jpg', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/weapon.mov', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/xiao-cheng-xia-tian.mov', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            { type: 'image', src: 'images/dance/xuan-se-dance-photo.jpg', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            { type: 'image', src: 'images/dance/xuan-se-dance-photo-1.jpg', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            { type: 'image', src: 'images/dance/xuan-se-dance-photo-2.jpg', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/xuan-se.MP4', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/young-boss.MP4', alt: 'Accendio performance in Kabukicho, Tokyo.' },
            // { type: 'video', src: 'images/dance/zoom.mov', alt: 'Accendio performance in Kabukicho, Tokyo.' },
        ]);
    }
    
    // TODO: change alt
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
            { type: 'image', src: 'images/art/bangs_girl.jpg', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/basketball_design.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/blind_girl.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/bubble_tea.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/butterfly_girl.jpg', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/carton_girl.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/cheetah_girl.jgp.jpg', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/chick.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/chicken_design.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/chinese_bunny.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/clouds.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/egg_head.jpg', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/hazards_poster.jpg', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/keyclub_logo.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/keyclub.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/lama.jpg', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/morgan_freeman.jpg', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/no_tears_girl.jpg', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/nobody_cares.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/punk_girl.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/reading_girl.jpg', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/red_thread_guy.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/sculpture1.jpg', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/sculpture2.jpg', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/silenced_girl.jpg', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/skateboard.jpg', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/sleeping_girl.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/sunset_village.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/sunset.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/victorian_girls.jpg', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/waves.jpg', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/whale.jpg', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/wufc.png', alt: 'Artistic Achievement Image' },
            { type: 'text', text: '3D Gallery' },
            { type: 'youtube', id: 'ulzAFV6T5xw' },
            { type: 'image', src: 'images/art/candygirl.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/goosex.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/jinx.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/pochita.png', alt: 'Artistic Achievement Image' },
            { type: 'image', src: 'images/art/skull_book.png', alt: 'Artistic Achievement Image' },
        ]);
    }
    
    // if (clickX > guitar.x && clickX < guitar.x + guitar.width && clickY > guitar.y && clickY < guitar.y + guitar.height) {
    //     setModalContent([
    //         { type: 'text', text: 'Guitar Achievements' },
    //         { type: 'image', src: 'images/characterBack.PNG', alt: 'Guitar Achievement Image' },
    //         { type: 'text', text: 'Instagram music account: @.' },
    //     ]);
    // }
    
    if (clickX > bookshelf.x && clickX < bookshelf.x + bookshelf.width && clickY > bookshelf.y && clickY < bookshelf.y + bookshelf.height) {
        setModalContent([
            { type: 'text', text: 'Literature Achievements' },
            { type: 'text', text: 'Caterpillar finding friends.' },
            { type: 'text', text: 'The  Polar Express short story.' },
            { type: 'text', text: 'My poetry & anthology.' },
        ]);
    }
    
    if (clickX > camera.x && clickX < camera.x + camera.width && clickY > camera.y && clickY < camera.y + camera.height) {
        setModalContent([
            { type: 'text', text: 'Photography Achievements' },
            { type: 'text', text: 'Instagram photography account: @a.pgy_t.' },
            { type: 'image', src: 'images/photography/before-the-show.jpg', alt: 'Before the Show | 上台之前' },
            { type: 'image', src: 'images/photography/bridge.JPG', alt: 'Bridge' },
            { type: 'image', src: 'images/photography/bubble-man.JPG', alt: 'Bubble Man' },
            { type: 'image', src: 'images/photography/conformity-bridge.JPG', alt: 'Conformity Bridge | 往来皆人不见己' },
            { type: 'image', src: 'images/photography/delivery-man.JPG', alt: 'He Wilts so the Flowers Bloom | 送餐夕阳巷，我本送花郎' },
            { type: 'image', src: 'images/photography/fence.JPG', alt: 'Fence' },
            { type: 'image', src: 'images/photography/library.JPG', alt: 'Grind or Die' },
            { type: 'image', src: 'images/photography/logo.JPG', alt: 'Logo' },
            { type: 'image', src: 'images/photography/lonely.JPG', alt: 'Lonely' },
            { type: 'image', src: 'images/photography/lungs.JPG', alt: 'Lungs' },
            { type: 'image', src: 'images/photography/memory-shop.JPG', alt: 'The Memory Shop' },
            { type: 'image', src: 'images/photography/mirror.JPG', alt: 'Reflection' },
            { type: 'image', src: 'images/photography/mom.jpg', alt: 'Mom' },
            { type: 'image', src: 'images/photography/slippery.JPG', alt: 'Slipping on Sunlight' },
            { type: 'image', src: 'images/photography/snowing-temple.JPG', alt: 'Bubble Snow' },
            { type: 'image', src: 'images/photography/thin-house.JPG', alt: 'Thin House' },
            { type: 'image', src: 'images/photography/tingzi-bridge.jpg', alt: 'Another Bridge' },
            { type: 'image', src: 'images/photography/tip.jpg', alt: 'Acute' },
            { type: 'image', src: 'images/photography/water-fall.JPG', alt: 'Waterfall' },

        ]);
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
    }
    
    if (clickX > character.x && clickX < character.x+character.width && clickY > character.y && clickY < character.y+character.height) {
        setTextboxContent("Interact/learn about ME by clicking on or pressing 'Z' near any glowing object! I'm a computer engineering student at the University of Waterloo actively looking for jobs, contact me here: c252wang@uwaterloo.ca / (519) 577-3709 / P.S. you can find for details on my computer.");
    }

  };
    // TODO: make textbox disappear when popup window appears
    // Set initial textbox
    useEffect(() => {
        setTextboxContent("Interact/learn about ME by clicking on or pressing 'Z' near any glowing object! I'm a computer engineering student at the University of Waterloo actively looking for jobs, contact me here:\n\nc252wang@uwaterloo.ca | (519) 577-3709\nP.S. you can find for details on my computer.");
    }, []);

  // TODO: add another section for "z" button controls when character walks near element
  //       add section for idle animation
  //       add a speech bubble near characters head with animation

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
    if (currentBgImage) {
      // context.globalAlpha = opacity;
      context.drawImage(currentBgImage, 0, 0, canvasRef.current.width, canvasRef.current.height);
      // context.globalAlpha = 1; // Reset alpha for other drawings
    }
    
    // Character
    if (currentImage) {
        context.drawImage(currentImage, character.x, character.y, character.width, character.height);
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
  }, [character, currentImage, currentBgImage]);  // Redraw when character or currentImage changes


  // TODO: add fading animation
  // Background image animation
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgImage((prevBgImg) => (prevBgImg === bgImg ? bgImgGlow : bgImg));
    }, 500); // Change every 0.5 seconds

    return () => clearInterval(intervalId);
  }, [bgImg, bgImgGlow]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    draw(context);
  }, [currentBgImage]); // Redraw whenever the current background image changes


  // // Fading animation
  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext('2d');

  //   const fade = () => {
  //     const fadeInterval = setInterval(() => {
  //       setOpacity((prevOpacity) => {
  //         // Change opacity based on fading direction
  //         const newOpacity = prevOpacity + (isFadingIn ? 0.05 : -0.05);
  //         draw(context, currentBgImage, Math.max(0, Math.min(1, newOpacity)));

  //         if (newOpacity <= 0 || newOpacity >= 1) {
  //           clearInterval(fadeInterval);
  //           // Change fade direction and switch images when fully faded
  //           setIsFadingIn(!isFadingIn);
  //           setCurrentBgImage((prevImage) => (prevImage === bgImg ? bgImgGlow : bgImg));
  //         }

  //         return Math.max(0, Math.min(1, newOpacity));
  //       });
  //     }, 50);
  //   };

  //   fade();
  //   const intervalId = setInterval(fade, 500); // Change image every 0.5 seconds

  //   return () => clearInterval(intervalId);
  // }, [currentBgImage, isFadingIn, bgImg, bgImgGlow]);


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
  }, [character, currentImage]);

  const handleKeyDown = (e) => {
  const newCharacter = { ...character };
  switch (e.key) {
    case 'ArrowUp':
      newCharacter.y -= character.speed;
      setCurrentImage(characterBackImg);
      break;
    case 'ArrowDown':
      newCharacter.y += character.speed;
      setCurrentImage(characterFrontImg);
      break;
    case 'ArrowLeft':
      newCharacter.x -= character.speed;
      setCurrentImage(characterLeftImg);
      break;
    case 'ArrowRight':
      newCharacter.x += character.speed;
      setCurrentImage(characterRightImg);
      break;
    default:
      break;
  }

    // Check for collision
    // if (
    //   newCharacter.x < danceFloor.x + danceFloor.width &&
    //   newCharacter.x + character.width > danceFloor.x &&
    //   newCharacter.y < danceFloor.y + danceFloor.height &&
    //   newCharacter.y + character.height > danceFloor.y
    // ) {
    //   return
    // }
    if (
        newCharacter.x < piano.x + piano.width &&
        newCharacter.x + character.width > piano.x &&
        newCharacter.y < piano.y + piano.height &&
        newCharacter.y + character.height > piano.y
      ) {
        return;
    }
    if (
        newCharacter.x < computer.x + computer.width &&
        newCharacter.x + character.width > computer.x &&
        newCharacter.y < computer.y + computer.height &&
        newCharacter.y + character.height > computer.y
      ) {
        return;
    }
    if (
        newCharacter.x < easle.x + easle.width &&
        newCharacter.x + character.width > easle.x &&
        newCharacter.y < easle.y + easle.height &&
        newCharacter.y + character.height > easle.y
      ) {
        return;
    }
    if (
        newCharacter.x < guitar.x + guitar.width &&
        newCharacter.x + character.width > guitar.x &&
        newCharacter.y < guitar.y + guitar.height &&
        newCharacter.y + character.height > guitar.y
      ) {
        return;
    }
    if (
        newCharacter.x < bookshelf.x + bookshelf.width &&
        newCharacter.x + character.width > bookshelf.x &&
        newCharacter.y < bookshelf.y + bookshelf.height &&
        newCharacter.y + character.height > bookshelf.y
      ) {
        return;
    }
    if (
        newCharacter.x < camera.x + camera.width &&
        newCharacter.x + character.width > camera.x &&
        newCharacter.y < camera.y + camera.height &&
        newCharacter.y + character.height > camera.y
      ) {
        return;
    }
    if (
        newCharacter.x < metals.x + metals.width &&
        newCharacter.x + character.width > metals.x &&
        newCharacter.y < metals.y + metals.height &&
        newCharacter.y + character.height > metals.y
      ) {
        return;
    }
    if (
        newCharacter.x < bed.x + bed.width &&
        newCharacter.x + character.width > bed.x &&
        newCharacter.y < bed.y + bed.height &&
        newCharacter.y + character.height > bed.y
      ) {
        return;
    }
    if (
        newCharacter.x < shelf.x + shelf.width &&
        newCharacter.x + character.width > shelf.x &&
        newCharacter.y < shelf.y + shelf.height &&
        newCharacter.y + character.height > shelf.y
      ) {
        return;
    }
    if (
        newCharacter.y < wallHorizon
    ) {
        return;
    }
    if (
        newCharacter.y + character.height > canvasRef.current.height
    ) {
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
