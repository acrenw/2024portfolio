import React, { useRef, useEffect, useState } from 'react';
import '../styles/GameCanvas.css'; // Import styling for the game canvas
import ModalComponent from './ModalComponent';
import backgroundImage from '../assets/room.PNG';
import characterFrontImage from '../assets/characterFront.PNG';
import characterBackImage from '../assets/characterBack.PNG';
import characterLeftImage from '../assets/characterLeft.PNG';
import characterRightImage from '../assets/characterRight.PNG';



const GameCanvas = () => {
    const canvasRef = useRef(null);
    const [character, setCharacter] = useState({ x: 650, y: 550, speed: 20, width: 120, height: 120 });
    const [currentImage, setCurrentImage] = useState(null);  // Track current image
    const [modalContent, setModalContent] = useState(null); // For pop-up interactions
    
    const [characterFrontImg, setCharacterFrontImg] = useState(null);
    const [characterBackImg, setCharacterBackImg] = useState(null);
    const [characterLeftImg, setCharacterLeftImg] = useState(null);
    const [characterRightImg, setCharacterRightImg] = useState(null);
    const [bgImg, setBgImg] = useState(null);
    
    // Load images when component mounts
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
  
      // Set the initial character image (facing front) when the front image is loaded
      setCurrentImage(characterFrontImg);
    }, []);
  


  // Set element's position and size
  const piano = { x: 920, y: 570, width: 350, height: 160 }; 
  const computer = { x: 240, y: 130, width: 270, height: 310 }; 
  const danceFloor = { x: 210, y: 570, width: 205, height: 160 };
  const easle = { x: 60, y: 210, width: 120, height: 270 };  
  const guitar = { x: 560, y: 200, width: 110, height: 220 };  
  const bookshelf = { x: 700, y: 190, width: 210, height: 260 };  
  const camera = { x: 1250, y: 270, width: 90, height: 60 }; 
  const metals = { x: 1090, y: 50, width: 190, height: 70 };  
  const bed = { x: 1000, y: 220, width: 190, height: 150 };  
  const shelf = { x: 1230, y: 290, width: 150, height: 120 };  
  const wallHorizon = 310;
 
  // Function to update the canvas size
  const updateCanvasSize = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth; // Set canvas width to the full window width
      canvas.height = window.innerHeight; // Set canvas height to the full window height
    }
  };

  // Set up the canvas size on mount and on window resize
  useEffect(() => {
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize); // Update size on window resize

    return () => {
      window.removeEventListener('resize', updateCanvasSize); // Clean up listener on unmount
    };
  }, []);

  // Detect interactions (e.g., click events)
  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Example: Check if the user clicked near a specific object, like a piano
    if (clickX > piano.x && clickX < piano.x+piano.width && clickY > piano.y && clickY < piano.y+piano.height) {
      setModalContent("piano achievements");
    }
    if (clickX > computer.x && clickX < computer.x+computer.width && clickY > computer.y && clickY < computer.y+computer.height) {
        setModalContent("tech achievements");
    }
    if (clickX > danceFloor.x && clickX < danceFloor.x+danceFloor.width && clickY > danceFloor.y && clickY < danceFloor.y+danceFloor.height) {
        setModalContent("dance achievements");
    }
    if (clickX > easle.x && clickX < easle.x+easle.width && clickY > easle.y && clickY < easle.y+easle.height) {
        setModalContent("artistic achievements");
    }
    if (clickX > guitar.x && clickX < guitar.x+guitar.width && clickY > guitar.y && clickY < guitar.y+guitar.height) {
        setModalContent("guitar achievements");
    }
    if (clickX > bookshelf.x && clickX < bookshelf.x+bookshelf.width && clickY > bookshelf.y && clickY < bookshelf.y+bookshelf.height) {
        setModalContent("literature achievements");
    }
    if (clickX > camera.x && clickX < camera.x+camera.width && clickY > camera.y && clickY < camera.y+camera.height) {
        setModalContent("photography achievements");
    }
    if (clickX > metals.x && clickX < metals.x+metals.width && clickY > metals.y && clickY < metals.y+metals.height) {
        setModalContent("awards");
    }

  };

  // TODO: add another section for "z" button controls when character walks near element
  // add section for idle animation

// Function to draw the grid with labels
const drawGrid = (context, width, height) => {
    context.strokeStyle = '#ccc'; // Grid line color
    context.font = '10px Arial';  // Font for labels
    context.fillStyle = 'black';  // Label color
    
    // Draw vertical and horizontal lines every 10px
    for (let x = 0; x <= width; x += 10) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, height);
      context.stroke();
      // Label the x-coordinate at the top
      if (x % 50 === 0) {
        context.fillText(x, x, 10); // Text slightly offset to avoid overlapping with the line
      }
    }

    for (let y = 0; y <= height; y += 10) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(width, y);
      context.stroke();
      // Label the y-coordinate on the left side
      if (y % 50 === 0) {
        context.fillText(y, 2, y); // Text slightly offset to avoid overlapping with the line
      }
    }
  };


  // Function to draw on canvas
  const draw = (context) => {
    // Clear the canvas
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    
    // Draw the background
    if (bgImg) {
        context.drawImage(bgImg, 0, 0, canvasRef.current.width, canvasRef.current.height);
    }
    
    // Draw the character based on current direction
    if (currentImage) {
        context.drawImage(currentImage, character.x, character.y, character.width, character.height);
    }
    // Draw the grid with labels
    drawGrid(context, canvasRef.current.width, canvasRef.current.height);
  };

  // Use the canvasRef to draw the game
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (context) {
      draw(context);  // Draw everything on canvas
    }
  }, [character, currentImage, bgImg]);  // Re-draw when character or currentImage changes



  // Handle setting up event listeners for keyboard input
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [character, currentImage]);

  // Handle canvas click events
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.addEventListener('click', handleCanvasClick);
    return () => {
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, []);

   // Handle key down (for movement and direction)
   const handleKeyDown = (e) => {
    const newCharacter = { ...character };
    switch (e.key) {
      case 'ArrowUp':
        newCharacter.y -= character.speed;
        setCurrentImage(characterBackImg);  // Switch to back image when moving up
        break;
      case 'ArrowDown':
        newCharacter.y += character.speed;
        setCurrentImage(characterFrontImg);  // Switch to front image when moving down
        break;
      case 'ArrowLeft':
        newCharacter.x -= character.speed;
        setCurrentImage(characterLeftImg);  // Switch to left image when moving left
        break;
      case 'ArrowRight':
        newCharacter.x += character.speed;
        setCurrentImage(characterRightImg);  // Switch to right image when moving right
        break;
      default:
        break;
    }

    // Check for collision with the elements
    if (
      newCharacter.x < danceFloor.x + danceFloor.width &&
      newCharacter.x + character.width > danceFloor.x &&
      newCharacter.y < danceFloor.y + danceFloor.height &&
      newCharacter.y + character.height > danceFloor.y
    ) {
      return; // Collision detected, do not update position
    }
    if (
        newCharacter.x < piano.x + piano.width &&
        newCharacter.x + character.width > piano.x &&
        newCharacter.y < piano.y + piano.height &&
        newCharacter.y + character.height > piano.y
      ) {
        return; // Collision detected, do not update position
    }
    if (
        newCharacter.x < computer.x + computer.width &&
        newCharacter.x + character.width > computer.x &&
        newCharacter.y < computer.y + computer.height &&
        newCharacter.y + character.height > computer.y
      ) {
        return; // Collision detected, do not update position
    }
    if (
        newCharacter.x < easle.x + easle.width &&
        newCharacter.x + character.width > easle.x &&
        newCharacter.y < easle.y + easle.height &&
        newCharacter.y + character.height > easle.y
      ) {
        return; // Collision detected, do not update position
    }
    if (
        newCharacter.x < guitar.x + guitar.width &&
        newCharacter.x + character.width > guitar.x &&
        newCharacter.y < guitar.y + guitar.height &&
        newCharacter.y + character.height > guitar.y
      ) {
        return; // Collision detected, do not update position
    }
    if (
        newCharacter.x < bookshelf.x + bookshelf.width &&
        newCharacter.x + character.width > bookshelf.x &&
        newCharacter.y < bookshelf.y + bookshelf.height &&
        newCharacter.y + character.height > bookshelf.y
      ) {
        return; // Collision detected, do not update position
    }
    if (
        newCharacter.x < camera.x + camera.width &&
        newCharacter.x + character.width > camera.x &&
        newCharacter.y < camera.y + camera.height &&
        newCharacter.y + character.height > camera.y
      ) {
        return; // Collision detected, do not update position
    }
    if (
        newCharacter.x < metals.x + metals.width &&
        newCharacter.x + character.width > metals.x &&
        newCharacter.y < metals.y + metals.height &&
        newCharacter.y + character.height > metals.y
      ) {
        return; // Collision detected, do not update position
    }
    if (
        newCharacter.x < bed.x + bed.width &&
        newCharacter.x + character.width > bed.x &&
        newCharacter.y < bed.y + bed.height &&
        newCharacter.y + character.height > bed.y
      ) {
        return; // Collision detected, do not update position
    }
    if (
        newCharacter.x < shelf.x + shelf.width &&
        newCharacter.x + character.width > shelf.x &&
        newCharacter.y < shelf.y + shelf.height &&
        newCharacter.y + character.height > shelf.y
      ) {
        return; // Collision detected, do not update position
    }
    if (
        newCharacter.y < wallHorizon
    ) {
        return;
    }

    // Update character position
    setCharacter(newCharacter);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        onClick={handleCanvasClick} // Detect clicks for interaction
      />
      {modalContent && (
        <ModalComponent
          content={modalContent}
          onClose={() => setModalContent(null)} // Close the modal
        />
      )}
    </div>
  );  
};

export default GameCanvas;
