import React, { useEffect, useRef } from 'react';

interface ProgressProps {
    percentage: number;
    size: number;
}

const ProgressBar: React.FC<ProgressProps> = ({ percentage, size }) => {
    const inactiveCanvasRef = useRef<HTMLCanvasElement>(null);
    const activeCanvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const iProgress = inactiveCanvasRef.current;
        const aProgress = activeCanvasRef.current;

        if (iProgress && aProgress) {
            const iProgressCTX = iProgress.getContext('2d');
            const aProgressCTX = aProgress.getContext('2d');

            if (iProgressCTX && aProgressCTX) {
                drawInactive(iProgressCTX);
                drawProgress(aProgressCTX, percentage);
            }
        }
    }, [percentage, size]);

    const drawInactive = (ctx: CanvasRenderingContext2D) => {
        ctx.lineCap = 'square';

        // Outer ring
        ctx.beginPath();
        ctx.lineWidth = size * 0.055; // Adjust line width based on size
        ctx.strokeStyle = '#e1e1e1';
        ctx.shadowColor = 'hsl(220 8% 57% / 1)';
        ctx.shadowBlur = 2;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.arc(size / 2, size / 2, size * 0.47, 0, 2 * Math.PI);
        ctx.stroke();

        // Progress bar background
        ctx.beginPath();
        ctx.lineWidth = 0;
        ctx.fillStyle = '#e6e6e6';
        ctx.arc(size / 2, size / 2, size * 0.44, 0, 2 * Math.PI);
        ctx.fill();

        // Inner circle
        ctx.beginPath();
        ctx.lineWidth = 0;
        ctx.fillStyle = '#fff';
        ctx.arc(size / 2, size / 2, size * 0.36, 0, 2 * Math.PI);
        ctx.fill();
    };

    const containerStyle: React.CSSProperties = {
        display: 'inline-block',
        position: 'relative',
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const canvasStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: size,
        height: size,
    };

    const textStyle: React.CSSProperties = {
        position: 'absolute',
        margin: 0,
        padding: 0,
        width: size,
        left: '50%',
        top: '50%',
        fontSize: size * 0.24,
        fontWeight: 900,
        textAlign: 'center',
        transform: 'translate(-50%, -50%)',
        color: '#505050',
    };

    const drawProgress = (ctx: CanvasRenderingContext2D, percentage: number) => {
        const quarterTurn = Math.PI / 2;
        const endingAngle = (2 * percentage * Math.PI) - quarterTurn;
        const startingAngle = 0 - quarterTurn;

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear canvas

        ctx.beginPath();
        ctx.lineWidth = size * 0.073; // Adjust line width based on size
        ctx.strokeStyle = 'hsl(225 58% 64% / 1)';
        ctx.arc(size / 2, size / 2, size * 0.40, startingAngle, endingAngle);
        ctx.stroke();
    };

    return (
        <div style={{height: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
            <div style={containerStyle}>
                <canvas ref={inactiveCanvasRef} style={canvasStyle} height={size} width={size}></canvas>
                <canvas ref={activeCanvasRef} style={canvasStyle} height={size} width={size}></canvas>
                <p style={textStyle}>{Math.round(percentage * 100)}%</p>
            </div>
        </div>
    );
};

export default ProgressBar;