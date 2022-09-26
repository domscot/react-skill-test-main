import timeSlice from "./timeSlice";

export const getTimePassed = (state) => {
  const time = timeSlice(state);

  if (time) return time.timePassed;
  else return 0;
};
