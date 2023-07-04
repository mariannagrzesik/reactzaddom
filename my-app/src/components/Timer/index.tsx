import { useEffect, useRef, useState } from "react";
import "./Timer.scss";

type TimerProps = {
	seconds: number;
};

export const Timer = ({seconds}: TimerProps) => {
    

	const [secondsValue, setSeconds] = useState(seconds);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const clearFunction = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
	};

	const minusSeconds = () => {
        setSeconds(prev => {
          if(prev > 0) return prev -1;
          else {
            alert('time is up');
            clearFunction();
            return 0
          }
        })
      }

	const startInterval = () => {
		const interval = setInterval(minusSeconds, 1000);
		intervalRef.current = interval;
	};

	useEffect(() => {
        setSeconds(seconds);
		startInterval();
        console.log(seconds)
		return () => {
			clearFunction();
		};
	}, []);

	return (
		<>
			<div>
				<span>{secondsValue}</span>
				<button onClick={clearFunction}>STOP</button>
				<button onClick={startInterval}>START</button>
			</div>
			<div></div>
		</>
	);
};
