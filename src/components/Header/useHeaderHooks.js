import { useSelector, useDispatch } from "react-redux";
import {
    leagueMatchesSelector, weekmatchesSelector, setLeague, setWeek, isLoadingSelector, matchesTitleSelector, getMatches,
} from "@/redux/matches";

const useMatchesHooks = () => {
    const week = useSelector(weekmatchesSelector);
    const league = useSelector(leagueMatchesSelector);
    const title = useSelector(matchesTitleSelector);

    const dispatch = useDispatch();

    const handleSetWeek = (value) => {
        dispatch(setWeek(week + value));
        dispatch(getMatches());
    };

    const handleSetLeague = (league) => {
        dispatch(setLeague(league));
        dispatch(getMatches());
    };

    return {
        week,
        title,
        league,
        matchesLength: 18,
        handleSetWeek,
        handleSetLeague,
    };
};

export default useMatchesHooks;
