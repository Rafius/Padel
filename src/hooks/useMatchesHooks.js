import { useSelector, useDispatch } from "react-redux";
import {
    leagueMatchesSelector, weekmatchesSelector, setLeague, setWeek, isLoadingSelector, matchesTitleSelector,
    matchesDataSelector,
    getMatches
} from "@/redux/matches";
import { useEffect } from "react";

const useMatchesHooks = () => {
    const matchesData = useSelector(matchesDataSelector);
    const week = useSelector(weekmatchesSelector);
    const league = useSelector(leagueMatchesSelector);
    const title = useSelector(matchesTitleSelector);
    const isLoading = useSelector(isLoadingSelector);

    const dispatch = useDispatch();
    const increaseWeek = () => dispatch(setWeek(week + 1));
    const decreaseWeek = () => dispatch(setWeek(week - 1));
    const handleSetLeague = (league) => dispatch(setLeague(league));

    useEffect(() => {
        if (matchesData.length) return;
        dispatch(getMatches());
    }, [matchesData, dispatch, getMatches]);

    return {
        week,
        title,
        league,
        isLoading,
        matchesData,
        decreaseWeek,
        increaseWeek,
        handleSetLeague,
    };
};

export default useMatchesHooks;
