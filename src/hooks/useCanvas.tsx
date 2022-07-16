import { useRef, useEffect, MutableRefObject } from 'react';

interface ICanvas {
    draw: (ctx: HTMLCanvasElement, count: number) => void
}

const useCanvas = (draw: ICanvas) => {
    const canvasRef = useRef<HTMLCanvasElement>(null) as MutableRefObject<HTMLCanvasElement>;

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        let frameCount = 0;
        let animationFrameId = 0;

        const render = () => {
            frameCount++;
            draw(context, frameCount);
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
