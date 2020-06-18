import {
  EPISODE_FORM_OPEN,
  EPISODE_FORM_CLOSE,
  EPISODE_FORM_SET_STEP
} from './EpisodeFormCreate.actions';

import {
  EpisodeFormStepConstants
} from './EpisodeFormCreate.data'

export const EpisodeFormCreateInitial = {
  formOpen: true,
  step: EpisodeFormStepConstants.Title,
  episodeTitle: "",
  episodeDescription:""
}



const EpisodeFormReducer = (
  formState = EpisodeFormCreateInitial,
  action
) => {
    switch(action.type){
      case EPISODE_FORM_OPEN: {
        return {
          ...formState,
          formOpen: true
        }
      }
      case EPISODE_FORM_CLOSE: {
        return {
          ...formState,
          formOpen: false
        }
      }
      case EPISODE_FORM_SET_STEP: {
        return {
          ...formState,
          step: action.payload.step
        }
      }
      default:
        return formState
    }
}

export default EpisodeFormReducer;



