
export const EPISODE_FORM_SET_STEP = 'EPISODE_FORM_SET_STEP';
export const EPISODE_FORM_OPEN = 'EPISODE_FORM_OPEN';
export const EPISODE_FORM_CLOSE = 'EPISODE_FORM_SET_STEP';

export const episodeFormOpen = () => ({
  type: EPISODE_FORM_OPEN,
});
export const episodeFormClose = () => ({
  type: EPISODE_FORM_CLOSE,
});
export const  episodeFormSetStep = (step) => ({
  type: EPISODE_FORM_SET_STEP,
  payload: {step}
});
