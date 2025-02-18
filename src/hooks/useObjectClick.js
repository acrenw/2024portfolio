import { useCallback } from 'react';
import { interactableGameObjects } from '../utils/gameObjects';

export const useObjectClick = (canvasRef, setModalContent, setTextboxContent) => {
    const objectArray = Object.values(interactableGameObjects)
    const handleCanvasClick = useCallback((e) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const clickX = (e.clientX - rect.left);
        const clickY = (e.clientY - rect.top);

        // Loop through game objects and display
        for (const obj of objectArray) {
            if (
                clickX > obj.x * canvas.width &&
                clickX < (obj.x + obj.width) * canvas.width &&
                clickY > obj.y * canvas.height &&
                clickY < (obj.y + obj.height) * canvas.height
            ) {                
                setModalContent(obj.modalContent);
                setTextboxContent(obj.textboxContent);
                return;
            }
        }
    }, [canvasRef, setModalContent]);

    return handleCanvasClick;
};