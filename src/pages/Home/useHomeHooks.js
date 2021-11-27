import { useSelector, useDispatch } from "react-redux";
import {
    leagueMatchesSelector, weekmatchesSelector, setLeague, setWeek, isLoadingSelector, matchesTitleSelector,
    matchesDataSelector,
    getMatches
} from "@/redux/matches";
import { useEffect } from "react";

const useMatchesHooks = () => {
    const matchesData = useSelector(matchesDataSelector);
    const isLoading = useSelector(isLoadingSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        if (matchesData.length || isLoading) return;
        dispatch(getMatches());
    }, [matchesData, dispatch, getMatches]);

    return {
        isLoading,
    };
};

export default useMatchesHooks;
