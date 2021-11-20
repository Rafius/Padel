import { useEffect, useState } from 'react';
import scheduleJson from "./schedule.json";

const useHomeHook = () => {
    const [week, setWeek] = useState(0);
    const [league, setLeague] = useState("low");
    const [schedule, setSchedule] = useState(scheduleJson.schedule);

    const increaseWeek = () => setWeek(week + 1);
    const decreaseWeek = () => setWeek(week - 1);
    const setLowLeague = () => setLeague("low");
    const setMidLeague = () => setLeague("mid");

    useEffect(() => {
        const newSchedule = scheduleJson.schedule.filter(item => item.league === league);
        setWeek(0);
        setSchedule(newSchedule);
    }, [league]);

    return {
        week,
        increaseWeek,
        decreaseWeek,
        league,
        setLowLeague,
        setMidLeague,
        schedule
    };
};

export default useHomeHook;