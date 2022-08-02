import {
    useState, useRef, useEffect, MutableRefObject, SetStateAction, Dispatch,
} from 'react';
import draw from '../Game/game';

const useCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null) as MutableRefObject<HTMLCanvasElement>;
    const [isRefrashed, setRefrashed] = useState<boolean>(false);

    const { requestAnimationFrame, cancelAnimationFrame } = window;

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        let animationFrameId = 0;

        const render = () => {
            draw(context as CanvasRenderingContext2D, isRefrashed, setRefrashed);
            animationFrameId = requestAnimationFrame(render);
        };
        render();

        return () => cancelAnimationFrame(animationFrameId);
    });

    return [canvasRef, isRefrashed, setRefrashed] as [
        MutableRefObject<HTMLCanvasElement>,
        boolean,
        Dispatch<SetStateAction<boolean>>
    ];
};

export default useCanvas;
