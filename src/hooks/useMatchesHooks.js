import { useSelector, useDispatch } from "react-redux";
import {
    leagueMatchesSelector, weekmatchesSelector, setLeague, currentTitleSelector, setWeek, currentMatchesPerWeekSelector,
    matchesLengthPerLeagueSelector, getMatches, isLoadingSelector
} from "@/redux/matches";
import { useEffect } from "react";

const useMatchesHooks = () => {
    const matchesLength = useSelector(matchesLengthPerLeagueSelector);
    const { events } = useSelector(currentMatchesPerWeekSelector);
    const week = useSelector(weekmatchesSelector);
    const league = useSelector(leagueMatchesSelector);
    const title = useSelector(currentTitleSelector);
    const isLoading = useSelector(isLoadingSelector);

    const dispatch = useDispatch();
    const increaseWeek = () => dispatch(setWeek(week + 1));
    const decreaseWeek = () => dispatch(setWeek(week - 1));
    const handleSetLeague = (league) => dispatch(setLeague(league));

    useEffect(() => {
        if (events.length) return;
        dispatch(getMatches());
    }, []);

    return {
        week,
        title,
        events,
        league,
        isLoading,
        decreaseWeek,
        increaseWeek,
        matchesLength,
        handleSetLeague,
    };
};

export default useMatchesHooks;
