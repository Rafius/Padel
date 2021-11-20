import { useSelector, useDispatch } from "react-redux";
import {
    leagueMatchesSelector, weekmatchesSelector, setLeague, currentTitleSelector, dataMatcheSelector, setWeek, currentMatchesPerWeekSelector,
    matchesLengthPerLeagueSelector
} from "@/redux/matches";

const useMatchesHooks = () => {
    const matchesLength = useSelector(matchesLengthPerLeagueSelector);

    const { events } = useSelector(currentMatchesPerWeekSelector);
    const week = useSelector(weekmatchesSelector);
    const league = useSelector(leagueMatchesSelector);
    const title = useSelector(currentTitleSelector);

    const dispatch = useDispatch();
    const increaseWeek = () => dispatch(setWeek(week + 1));
    const decreaseWeek = () => dispatch(setWeek(week - 1));
    const handleSetLeague = (league) => dispatch(setLeague(league));

    return {
        week,
        title,
        events,
        league,
        decreaseWeek,
        increaseWeek,
        matchesLength,
        handleSetLeague,
    };
};

export default useMatchesHooks;
