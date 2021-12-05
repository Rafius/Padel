import { useSelector, useDispatch } from "react-redux";
import {
    matchesIsLoadingSelector, matchesDataSelector, getMatches, getPhoneNumbers
} from "@/redux/matches";
import { useEffect } from "react";

const useMatchesHooks = () => {
    const matchesData = useSelector(matchesDataSelector);
    const isLoading = useSelector(matchesIsLoadingSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        if (matchesData.length || isLoading) return;
        dispatch(getMatches());
        dispatch(getPhoneNumbers());
    }, []);
    // }, [matchesData, dispatch, getMatches, getPhoneNumbers, isLoading]);

    return {
        isLoading,
    };
};

export default useMatchesHooks;
