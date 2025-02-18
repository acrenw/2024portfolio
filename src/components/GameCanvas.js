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
import { piano, computer, easle, guitar, bookshelf, camera, metals, speechBubble, bed, shelf, wallHorizon, interactableGameObjects } from '../utils/gameObjects';
import { useObjectClick } from '../hooks/useObjectClick';
import useWindowSize from '../hooks/useWindowSize.js';

// TODO: make this bilingual
//       make bg image have glowing/fading animation on clickable objects
//       make prettier
//       get rid of the canvas.* everywhere
//       add character animation
//       add another section for "z" button controls when character walks near element
//       add section for idle animation (character and speech bubble, make entire animation stuff an f)

const GameCanvas = () => {
    const macbookWidth = 1470;
    const macbookHeight = 763;

    const canvasRef = useRef(null);
    const [modalContent, setModalContent] = useState(null); // For pop-up interactions
    const [textboxContent, setTextboxContent] = useState(null);
    const [speechBubbleImg, setSpeechBubbleImg] = useState();
    const [character, setCharacter] = useState({ x: 650 / macbookWidth, y: 550 / macbookHeight, speedx: 20 / macbookWidth, speedy: 20 / macbookHeight, width: 120 / macbookWidth, height: 120 / macbookHeight });
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

    
    // ------------------------------ Load images ------------------------------ 
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
  
 
  // ------------------------------ Listen for window resizes and get user window size ------------------------------ 
  const { width, height } = useWindowSize();

  useEffect(() => {
      const canvas = canvasRef.current;
      if (canvas) {
          canvas.width = width; 
          canvas.height = height; 
      }
  }, [width, height]);


  //  ------------------------------ Detect interactions with game objects ------------------------------ 
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


  //  ------------------------------ Draw stuff ------------------------------ 
  useEffect(() => {
    setTextboxContent("Interact/learn about ME by clicking on any glowing object! I'm a computer engineering student at the University of Waterloo actively looking for jobs, contact me here:\n\nc252wang@uwaterloo.ca | +1 226-698-7985 \nP.S. You can find more details on my computer.");
    // setTextboxContent("Interact/learn about ME by clicking on or pressing 'Z' near any glowing object! I'm a computer engineering student at the University of Waterloo actively looking for jobs, contact me here:\n\nc252wang@uwaterloo.ca | +1 519-577-3709 | +86 080-5661-4359\nP.S. You can find more details on my computer.");
  }, []);

 


  const draw = (context) => {
    const canvas = canvasRef.current

    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    
    // Background
    if (currentBgImg) {
      // context.globalAlpha = opacity;
      context.drawImage(currentBgImg, 0, 0, canvas.width, canvas.height);
      // context.globalAlpha = 1; // Reset alpha for other drawings
    }
    
    // Character
    if (currentCharacterImg) {
        context.drawImage(currentCharacterImg, character.x*canvas.width, character.y*canvas.height, character.width*canvas.width, character.height*canvas.height);
    }

    // Speech bubble
    if (speechBubbleImg && !textboxContent) {
      context.drawImage(speechBubbleImg, character.x*canvas.width + character.width*canvas.width - 5, character.y*canvas.height - 15, speechBubble.width*canvas.width, speechBubble.height*canvas.height);
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

  //  ------------------------------ Click events ------------------------------ 
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.addEventListener('click', handleCanvasClick);
    return () => {
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, []);

  //  ------------------------------ Key events ------------------------------ 
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
        newCharacter.y -= character.speedy;
        setCurrentCharacterImg(characterBackImg);
        break;
      case 'ArrowDown':
        newCharacter.y += character.speedy;
        setCurrentCharacterImg(characterFrontImg);
        break;
      case 'ArrowLeft':
        newCharacter.x -= character.speedx;
        setCurrentCharacterImg(characterLeftImg);
        break;
      case 'ArrowRight':
        newCharacter.x += character.speedx;
        setCurrentCharacterImg(characterRightImg);
        break;
      case 'z':
        // const canvas = canvasRef.current;
        // const margin = (10/((macbookHeight+macbookWidth)/2))*((canvas.width+canvas.height)/2);
        // console.log("z clicked")
        // for (const obj of Object.values(interactableGameObjects)) {
        //   if (
        //     // Facing left: character is to the right of the object
        //     (
        //       ((newCharacter.x - speechBubble.width - margin) * canvas.width < (obj.x + obj.width) * canvas.width) &&
        //       (newCharacter.x * canvas.width > (obj.x + obj.width) * canvas.width) &&
        //       ((newCharacter.y + newCharacter.height) * canvas.height > obj.y * canvas.height) &&
        //       (newCharacter.y * canvas.height < (obj.y + obj.height) * canvas.height) &&
        //       (currentCharacterImg === characterLeftImg)
        //     ) ||
      
        //     // Facing right: character is to the left of the object
        //     (
        //       ((newCharacter.x + newCharacter.width + speechBubble.width + margin) * canvas.width > obj.x * canvas.width) &&
        //       (newCharacter.x * canvas.width < obj.x * canvas.width) &&
        //       ((newCharacter.y + newCharacter.height) * canvas.height > obj.y * canvas.height) &&
        //       (newCharacter.y * canvas.height < (obj.y + obj.height) * canvas.height) &&
        //       (currentCharacterImg === characterRightImg)
        //     ) ||
      
        //     // Facing down: character is above the object
        //     (
        //       ((newCharacter.y + newCharacter.height + speechBubble.height + margin) * canvas.height > obj.y * canvas.height) &&
        //       (newCharacter.y * canvas.height < obj.y * canvas.height) &&
        //       ((newCharacter.x + newCharacter.width) * canvas.width > obj.x * canvas.width) &&
        //       (newCharacter.x * canvas.width < (obj.x + obj.width) * canvas.width) &&
        //       (currentCharacterImg === characterFrontImage)
        //     ) ||
      
        //     // Facing up: character is below the object
        //     (
        //       ((newCharacter.y - speechBubble.height - margin) * canvas.height < (obj.y + obj.height) * canvas.height) &&
        //       (newCharacter.y * canvas.height > (obj.y + obj.height) * canvas.height) &&
        //       ((newCharacter.x + newCharacter.width) * canvas.width > obj.x * canvas.width) &&
        //       (newCharacter.x * canvas.width < (obj.x + obj.width) * canvas.width) &&
        //       (currentCharacterImg === characterBackImage)
        //     )
        //   ) {
        //     setModalContent(obj.modalContent);
        //     setTextboxContent(obj.textboxContent);
        //     break; // Stop once an object is found.
        //   }
        // }
        break;
      default:
        break;
    }

    // Check for collision
    function isColliding(obj1, obj2) {
      const canvas = canvasRef.current
      return (
        obj1.x*canvas.width < obj2.x*canvas.width + obj2.width*canvas.width &&
        obj1.x*canvas.width + obj1.width*canvas.width > obj2.x*canvas.width &&
        obj1.y*canvas.height < obj2.y*canvas.height + obj2.height*canvas.height &&
        obj1.y*canvas.height + obj1.height*canvas.height > obj2.y*canvas.height
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
    if (newCharacter.y*canvasRef.current.height < wallHorizon.y*canvasRef.current.height || 
      (newCharacter.y + character.height)*canvasRef.current.height > canvasRef.current.height ||
      newCharacter.x*canvasRef.current.width < 0 ||
      (newCharacter.x + newCharacter.width + speechBubble.width)*canvasRef.current.width > canvasRef.current.width) {
      return; // Don't update character position
    }

    // Update character image
    setCharacter(newCharacter);
  };

  //  ------------------------------ Exit ------------------------------ 
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
