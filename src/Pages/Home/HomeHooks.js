import { useState } from 'react';

const useHomeHook = () => {
    const [week, setWeek] = useState(0);

    const increaseWeek = () => setWeek(week + 1);
    const decreaseWeek = () => setWeek(week - 1);

    return {
        week,
        increaseWeek,
        decreaseWeek
    };
};

export default useHomeHook;