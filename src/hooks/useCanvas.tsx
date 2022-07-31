import { useRef, useEffect, MutableRefObject } from 'react';

interface ICanvas {
    draw: (ctx: CanvasRenderingContext2D, canvas?: HTMLCanvasElement) => void
}

const useCanvas = ({ draw }: ICanvas) => {
    const canvasRef = useRef<HTMLCanvasElement>(null) as MutableRefObject<HTMLCanvasElement>;

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        let animationFrameId = 0;

        const render = () => {
            draw(context as CanvasRenderingContext2D);
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw]);

    return canvasRef;
};

export default useCanvas;
