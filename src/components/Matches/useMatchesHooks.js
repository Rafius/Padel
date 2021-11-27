import { useSelector } from "react-redux";
import { matchesDataSelector } from "@/redux/matches";

const useMatchesHooks = () => {
    const matchesData = useSelector(matchesDataSelector);

    return {
        matchesData,
    };
};

export default useMatchesHooks;
