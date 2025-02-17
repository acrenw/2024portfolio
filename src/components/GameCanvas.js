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
import { piano, computer, easle, guitar, bookshelf, camera, metals, speechBubble, bed, shelf, wallHorizon } from '../utils/gameObjects';
import { useObjectClick } from '../hooks/useObjectClick';
import useWindowSize from '../hooks/useWindowSize.js';

// TODO: make this bilingual
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
  
 
  // Listen for window resizes and get user window size
  const { width, height } = useWindowSize();

  useEffect(() => {
      const canvas = canvasRef.current;
      if (canvas) {
          canvas.width = width; 
          canvas.height = height; 
      }
  }, [width, height]);


  // Detect interactions with game objects
  const handleCanvasClick = useObjectClick(canvasRef, setModalContent, setTextboxContent);

  useEffect(() => {
      const canvas = canvasRef.current;
      if (canvas) {
          canvas.addEventListener('click', handleCanvasClick);
      }
      return () => {
          if (canvas) {
              canvas.removeEventListener('click', handleCanvasClick);
          }
      };
  }, [handleCanvasClick]);


  // Set initial textbox
  useEffect(() => {
    setTextboxContent("Interact/learn about ME by clicking on any glowing object! I'm a computer engineering student at the University of Waterloo actively looking for jobs, contact me here:\n\nc252wang@uwaterloo.ca | +1 519-577-3709 | +86 080-5661-4359\nP.S. You can find more details on my computer.");
    // setTextboxContent("Interact/learn about ME by clicking on or pressing 'Z' near any glowing object! I'm a computer engineering student at the University of Waterloo actively looking for jobs, contact me here:\n\nc252wang@uwaterloo.ca | +1 519-577-3709 | +86 080-5661-4359\nP.S. You can find more details on my computer.");
  }, []);

  // TODO: add another section for "z" button controls when character walks near element
  //       add section for idle animation (character and speech bubble, amke entire animation stuff an f)


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
    function isColliding(obj1, obj2) {
      const canvas = canvasRef.current
      return (
        obj1.x < obj2.x*canvas.width + obj2.width*canvas.width &&
        obj1.x + obj1.width > obj2.x*canvas.width &&
        obj1.y < obj2.y*canvas.height + obj2.height*canvas.height &&
        obj1.y + obj1.height > obj2.y*canvas.height
      );
    }  
    
    // Array of objects to check for collisions
    const obstacles = [piano, computer, easle, guitar, bookshelf, camera, metals, bed, shelf]; //danceFloor
    for (let obstacle of obstacles) {
      if (isColliding(newCharacter, obstacle)) {
        return; // Don't update character position
      }
    }
    // Check boundary collisions
    if (newCharacter.y < wallHorizon.y || 
      newCharacter.y + character.height > canvasRef.current.height) {
      return; // Don't update character position
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
