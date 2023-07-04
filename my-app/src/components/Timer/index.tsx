
import { clearInterval } from "node:timers";
import { useEffect, useRef, useState } from "react";
import "./Timer.scss";

export const Timer = () => {
	const [seconds, setSeconds] = useState(10);
    const intervalRef=useRef<NodeJS.Timeout|null>(null);

	const minusSeconds = () => {
		setSeconds((prev) => {
			return prev - 1;
		});
	};

    const clearFunction = () =>{
        if(intervalRef.current){
            clearInterval(intervalRef.current)
        }
    }

	useEffect(() => {
		const interval = setInterval(minusSeconds, 1000);
        intervalRef.current=interval;
        return()=>{
            clearInterval(interval)
        }
	}, []);


	return (
		<>
        <div>
			<span>{seconds}</span>
            <button onClick={clearFunction}>STOP</button>
		</div>
        <div>

        </div>
        </>
	);
};
