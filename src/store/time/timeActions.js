import { UPDATE_TIME } from "../types";

export const updateTime = (seconds) => ({
  type: UPDATE_TIME,
  payload: seconds,
});

// Halfing seconds fixes the issue visually, but doesn't fix the fact it's re-rendering twice over.
