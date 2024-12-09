import { createContext, ReactNode, useState, useContext, useRef } from "react";

interface ITimerContext {
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  formattedTime: string;
}

export const TimerContext = createContext<ITimerContext | undefined>(undefined);

interface ITimerProviderProps {
  children: ReactNode;
}

export const TimerProvider = ({ children }: ITimerProviderProps) => {
  const [totalTime, setTotalTime] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTotalTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTotalTime(0);
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const format = (num: number) => String(num).padStart(2, "0");
    return `${format(hrs)}:${format(mins)}:${format(secs)}`;
  };

  const formattedTime = formatTime(totalTime);

  return (
    <TimerContext.Provider
      value={{ startTimer, pauseTimer, resetTimer, formattedTime }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
};
