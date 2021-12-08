import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import {
    matchesIsLoadingSelector, matchesDataSelector, getMatches,
} from "@/redux/matches";
import { getRanking } from "@/redux/ranking";

const useMatchesHooks = () => {
    const matchesData = useSelector(matchesDataSelector);
    const isLoading = useSelector(matchesIsLoadingSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        if (matchesData.length || isLoading) return;
        dispatch(getMatches());
        dispatch(getRanking());
    }, [matchesData, isLoading, dispatch, getMatches, getRanking]);

    return {
        isLoading,
    };
};

export default useMatchesHooks;
