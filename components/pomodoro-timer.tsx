'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const WORK_TIME = 25 * 60; // 25 minutes in seconds
const BREAK_TIME = 5 * 60; // 5 minutes in seconds

export function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsWorkTime(!isWorkTime);
      setTimeLeft(isWorkTime ? BREAK_TIME : WORK_TIME);
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft, isWorkTime]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(isWorkTime ? WORK_TIME : BREAK_TIME);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-6 bg-slate-800 rounded-lg shadow-lg">
      <Image
        src="/trump-pointing.jpg"
        alt="Trump pointing"
        width={300}
        height={300}
        className="rounded-lg"
      />
      <div className="text-6xl font-bold text-white">
        {formatTime(timeLeft)}
      </div>
      <div className="text-xl text-slate-300">
        {isWorkTime ? 'Work Time' : 'Break Time'}
      </div>
      <div className="flex space-x-4">
        <Button
          onClick={toggleTimer}
          variant={isRunning ? "destructive" : "default"}
          className="text-lg px-8 py-2"
        >
          {isRunning ? 'Pause' : 'Start'}
        </Button>
        <Button
          onClick={resetTimer}
          variant="outline"
          className="text-lg px-8 py-2 border-white text-white hover:bg-white hover:text-slate-800"
        >
          Reset
        </Button>
      </div>
    </div>
  );
} 