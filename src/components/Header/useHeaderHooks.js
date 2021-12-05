import { useSelector, useDispatch } from "react-redux";
import {
    matchesLeagueSelector, matchesWeekSelector, setLeague, setWeek, matchesTitlesSelector, getMatches
} from "@/redux/matches";

const useMatchesHooks = () => {
    const week = useSelector(matchesWeekSelector);
    const league = useSelector(matchesLeagueSelector);
    const titles = useSelector(matchesTitlesSelector);
    const dispatch = useDispatch();


    const handleSetLeague = (league) => {
        dispatch(setLeague(league));
        dispatch(getMatches());
    };

    const handleSelect = (e) => {
        dispatch(setWeek(parseInt(e.target.value)));
    };

    return {
        week, league, titles, handleSelect, handleSetLeague
    };
};

export default useMatchesHooks;
