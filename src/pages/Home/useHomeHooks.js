import { useSelector, useDispatch } from "react-redux";
import {
    matchesIsLoadingSelector, matchesDataSelector, getMatches,
} from "@/redux/matches";
import { useEffect } from "react";

const useMatchesHooks = () => {
    const matchesData = useSelector(matchesDataSelector);
    const isLoading = useSelector(matchesIsLoadingSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        if (matchesData.length || isLoading) return;
        dispatch(getMatches());
    }, [matchesData, dispatch, getMatches, isLoading]);

    return {
        isLoading,
    };
};

export default useMatchesHooks;
