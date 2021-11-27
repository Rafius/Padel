import { useSelector, useDispatch } from "react-redux";
import {
    leagueMatchesSelector, weekmatchesSelector, setLeague, setWeek, isLoadingSelector, matchesTitleSelector,
} from "@/redux/matches";

const useMatchesHooks = () => {
    const week = useSelector(weekmatchesSelector);
    const league = useSelector(leagueMatchesSelector);
    const title = useSelector(matchesTitleSelector);

    const dispatch = useDispatch();
    const increaseWeek = () => dispatch(setWeek(week + 1));
    const decreaseWeek = () => dispatch(setWeek(week - 1));
    const handleSetLeague = (league) => dispatch(setLeague(league));

    return {
        week,
        title,
        league,
        decreaseWeek,
        increaseWeek,
        matchesLength: 18,
        handleSetLeague,
    };
};

export default useMatchesHooks;
