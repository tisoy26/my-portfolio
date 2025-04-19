"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const GridDotBackground = React.memo(
  ({ 
    className, 
    dotColor = "rgba(255, 255, 255, 0.2)", 
    dotSize = 1, 
    gap = 40,
    beamColor = "rgba(59, 130, 246, 0.3)",
  }: { 
    className?: string; 
    dotColor?: string;
    dotSize?: number;
    gap?: number;
    beamColor?: string;
  }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas size to match parent container
      const resizeCanvas = () => {
        const parent = canvas.parentElement;
        if (!parent) return;
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      };

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      // Create grid points
      const createGrid = () => {
        // Define the type for grid points
        type GridPoint = {
          x: number;
          y: number;
          vx: number;
          vy: number;
          connections: number[];
        };
        
        const points: GridPoint[] = [];
        const cols = Math.floor(canvas.width / gap) + 2;
        const rows = Math.floor(canvas.height / gap) + 2;

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            points.push({
              x: i * gap,
              y: j * gap,
              vx: Math.random() * 0.2 - 0.1,
              vy: Math.random() * 0.2 - 0.1,
              connections: []
            });
          }
        }
        return points;
      };

      let grid = createGrid();
      
      // Animation
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw beams between nearby points
        ctx.strokeStyle = beamColor;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        
        for (let i = 0; i < grid.length; i++) {
          const point = grid[i];
          grid[i].connections = [];
          
          // Find nearby points to connect
          for (let j = 0; j < grid.length; j++) {
            if (i === j) continue;
            
            const otherPoint = grid[j];
            const distance = Math.sqrt(
              Math.pow(point.x - otherPoint.x, 2) + 
              Math.pow(point.y - otherPoint.y, 2)
            );
            
            // Connect if within distance threshold
            if (distance < gap * 1.5) {
              grid[i].connections.push(j);
              ctx.moveTo(point.x, point.y);
              ctx.lineTo(otherPoint.x, otherPoint.y);
            }
          }
          
          // Update position with slight movement
          point.x += point.vx;
          point.y += point.vy;
          
          // Bounce at edges
          if (point.x <= 0 || point.x >= canvas.width) point.vx *= -1;
          if (point.y <= 0 || point.y >= canvas.height) point.vy *= -1;
        }
        
        ctx.stroke();
        
        // Draw dots
        for (let i = 0; i < grid.length; i++) {
          const point = grid[i];
          
          ctx.beginPath();
          ctx.fillStyle = dotColor;
          ctx.arc(point.x, point.y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
        
        requestAnimationFrame(animate);
      };
      
      animate();
      
      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    }, [dotColor, dotSize, gap, beamColor]);

    return (
      <div
        className={cn(
          "absolute inset-0 z-0 overflow-hidden",
          className,
        )}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full"
        />
      </div>
    );
  }
);

GridDotBackground.displayName = "GridDotBackground";