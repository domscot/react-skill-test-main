import { useSelector } from "react-redux";
import { timeSelectors } from "../store/time";
import moment from "../moment";

const TimeSpend = ({ className }) => {
  const timePassed = useSelector(timeSelectors.getTimePassed);

  return (
    <div className={className}>
      <span className="text-xl">
        Time spent on site:{" "}
        {moment
          .unix(timePassed)
          .utc()
          .format("H [hours,] m [minutes and] s [seconds]")}
      </span>
    </div>
  );
};

export default TimeSpend;
