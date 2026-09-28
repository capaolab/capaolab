'use client';

import React, { useEffect, useRef } from 'react';

interface ContourFieldProps {
    /** Changes the terrain shape; transitions between seeds are morphed. */
    seed?: number;
    /** Center of the concentric rings, as fractions of the canvas size. */
    origin?: [number, number];
    /** 0..1 — speeds the field up and brightens the pulse (e.g. while typing). */
    energy?: number;
    /** Distance between contour levels; smaller means denser rings. */
    step?: number;
    lineColor: string;
    accentColor: string;
    className?: string;
    style?: React.CSSProperties;
}

const CELL = 9; // marching-squares grid size, in CSS px
const FRAME_MS = 1000 / 30;

function phasesFor(seed: number): [number, number, number] {
    const r = (n: number) => {
        const x = Math.sin(seed * 127.1 + n * 311.7) * 43758.5453;
        return (x - Math.floor(x)) * Math.PI * 2;
    };
    return [r(1), r(2), r(3)];
}

/**
 * Generative topographic field: the logo's concentric squares, warped by a
 * slow sine field into something that reads as Chapada contour lines, with
 * one terracota level travelling outward like a signal. Drawn with
 * marching squares on a canvas; pauses offscreen and renders a single
 * still frame under prefers-reduced-motion.
 *
 * The canvas is absolutely positioned so its bitmap size never feeds back
 * into layout — the parent must be positioned and sized by its own layout.
 */
function ContourField({
    seed = 1,
    origin = [0.5, 0.5],
    energy = 0,
    step = 0.085,
    lineColor,
    accentColor,
    className,
    style,
}: ContourFieldProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const props = useRef({ seed, origin, energy, step, lineColor, accentColor });
    const redraw = useRef<(() => void) | null>(null);

    useEffect(() => {
        props.current = { seed, origin, energy, step, lineColor, accentColor };
        redraw.current?.();
    }, [seed, origin, energy, step, lineColor, accentColor]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let width = 0;
        let height = 0;
        let time = 0;
        let pulse = 0;
        let smoothEnergy = props.current.energy;
        const phases = phasesFor(props.current.seed);
        const center = [...props.current.origin];
        let values = new Float32Array(0);

        function resize() {
            const rect = canvas!.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = rect.width;
            height = rect.height;
            canvas!.width = Math.round(width * dpr);
            canvas!.height = Math.round(height * dpr);
            ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function draw() {
            if (width < 2 || height < 2) return;
            const { step: levelStep, lineColor: stroke, accentColor: accent } = props.current;
            const cols = Math.ceil(width / CELL) + 1;
            const rows = Math.ceil(height / CELL) + 1;
            if (values.length !== cols * rows) values = new Float32Array(cols * rows);

            const scale = Math.min(width, height) / 2;
            const ox = center[0] * width;
            const oy = center[1] * height;
            const [p1, p2, p3] = phases;

            for (let j = 0; j < rows; j++) {
                for (let i = 0; i < cols; i++) {
                    const dx = (i * CELL - ox) / scale;
                    const dy = (j * CELL - oy) / scale;
                    const cheb = Math.max(Math.abs(dx), Math.abs(dy));
                    const eu = Math.hypot(dx, dy);
                    const warp =
                        0.2 * Math.sin(dx * 2.1 + time * 0.6 + p1) * Math.cos(dy * 1.7 - time * 0.4 + p2) +
                        0.09 * Math.sin((dx + dy) * 3.3 + time * 0.9 + p3);
                    values[j * cols + i] = cheb * 0.7 + eu * 0.3 + warp;
                }
            }

            const maxLevel = Math.ceil(2.6 / levelStep);
            const accentLevel = Math.floor(pulse) % maxLevel;
            ctx!.clearRect(0, 0, width, height);
            const base = new Path2D();
            const hot = new Path2D();

            for (let j = 0; j < rows - 1; j++) {
                for (let i = 0; i < cols - 1; i++) {
                    const a = values[j * cols + i];
                    const b = values[j * cols + i + 1];
                    const c = values[(j + 1) * cols + i + 1];
                    const d = values[(j + 1) * cols + i];
                    const lo = Math.min(a, b, c, d);
                    const hi = Math.max(a, b, c, d);
                    const x = i * CELL;
                    const y = j * CELL;

                    for (let k = Math.max(1, Math.ceil(lo / levelStep)); k * levelStep <= hi; k++) {
                        const t = k * levelStep;
                        const pts: number[] = [];
                        if ((a < t) !== (b < t)) pts.push(x + ((t - a) / (b - a)) * CELL, y);
                        if ((b < t) !== (c < t)) pts.push(x + CELL, y + ((t - b) / (c - b)) * CELL);
                        if ((d < t) !== (c < t)) pts.push(x + ((t - d) / (c - d)) * CELL, y + CELL);
                        if ((a < t) !== (d < t)) pts.push(x, y + ((t - a) / (d - a)) * CELL);
                        const path = k === accentLevel ? hot : base;
                        for (let n = 0; n + 3 < pts.length; n += 4) {
                            path.moveTo(pts[n], pts[n + 1]);
                            path.lineTo(pts[n + 2], pts[n + 3]);
                        }
                    }
                }
            }

            ctx!.lineWidth = 1;
            ctx!.strokeStyle = stroke;
            ctx!.stroke(base);
            ctx!.lineWidth = 1.5 + smoothEnergy;
            ctx!.strokeStyle = accent;
            ctx!.stroke(hot);
        }

        // Ease the terrain toward the current seed/origin so switching
        // between projects morphs instead of jumping.
        function approachTargets(k: number) {
            const target = phasesFor(props.current.seed);
            for (let n = 0; n < 3; n++) phases[n] += (target[n] - phases[n]) * k;
            center[0] += (props.current.origin[0] - center[0]) * k;
            center[1] += (props.current.origin[1] - center[1]) * k;
            smoothEnergy += (props.current.energy - smoothEnergy) * k;
        }

        resize();
        const resizeObserver = new ResizeObserver(() => {
            resize();
            draw();
        });
        resizeObserver.observe(canvas);

        if (reducedMotion) {
            redraw.current = () => {
                approachTargets(1);
                draw();
            };
            draw();
            return () => {
                resizeObserver.disconnect();
                redraw.current = null;
            };
        }

        let raf = 0;
        let last = 0;
        let visible = true;

        function frame(now: number) {
            raf = requestAnimationFrame(frame);
            if (!visible || now - last < FRAME_MS) return;
            const dt = last ? Math.min((now - last) / 1000, 0.1) : 0;
            last = now;
            approachTargets(Math.min(dt * 3, 1));
            time += dt * (0.35 + smoothEnergy * 1.6);
            pulse += dt * (0.9 + smoothEnergy * 3);
            draw();
        }

        const intersectionObserver = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            last = 0;
        });
        intersectionObserver.observe(canvas);
        raf = requestAnimationFrame(frame);

        return () => {
            cancelAnimationFrame(raf);
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className={className}
            style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', ...style }}
        />
    );
}

export default ContourField;
