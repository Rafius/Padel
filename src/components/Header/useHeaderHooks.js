import { useSelector, useDispatch } from "react-redux";
import {
    matchesLeagueSelector, matchesWeekSelector, setLeague, setWeek, matchesTitleSelector, getMatches, matchesWeeksLengthSelector,
} from "@/redux/matches";

const useMatchesHooks = () => {
    const week = useSelector(matchesWeekSelector);
    const league = useSelector(matchesLeagueSelector);
    const title = useSelector(matchesTitleSelector);
    const matchesWeeksLength = useSelector(matchesWeeksLengthSelector);
    const dispatch = useDispatch();

    const handleSetWeek = (value) => {
        dispatch(setWeek(week + value));
    };

    const handleSetLeague = (league) => {
        dispatch(setLeague(league));
        dispatch(getMatches());
    };

    return {
        week,
        title,
        league,
        handleSetWeek,
        handleSetLeague,
        matchesWeeksLength,
    };
};

export default useMatchesHooks;
