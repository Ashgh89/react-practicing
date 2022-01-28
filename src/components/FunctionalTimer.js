import { useEffect, useState } from "react";

const FunctionalTimer = () => {
  const [count, setCount] = useState(0);
  // Component did mount (CDM) + Component did update (CDU) + Component will unmout (CWUM) => Alles of einmal in useEffect()
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Hi Ash");
      // Call count + 1 every second:
      setCount((c) => c + 1);
    }, 1000);
    console.log(count);
    // Clean-Up => timer, interval, ...
    // This Clean-Up function only render when we delete elements, because it is (CWUN)
    // In our example, if we click on hide the time will stop and when click on show, the time will resume and that's great.
    // Without this Clean-Up, when we hide the timer, we get error and it says you unmout the timer and i can't update your state.
    // and it causes error and when we click on hide and show continuously our timer seconds goes faster and it is clumsy
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>This is Timer</div>;
};

export default FunctionalTimer;
