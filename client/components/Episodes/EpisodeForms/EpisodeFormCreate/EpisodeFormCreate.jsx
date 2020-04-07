import React from 'react'
import {Modal} from '../../../Utility/Modal/Modal';
import {classes} from '../../../Utility/UtilityFunctions/classes'
import {connect} from 'react-redux';
import {EpisodeFormStepConstants} from './EpisodeFormCreate.data'
 import {episodeFormOpen, episodeFormClose} from './EpisodeFormCreate.actions'


export const EpisodeFormCreate = (props) =>{

  if (props.preventRender) return null;
  let bodyContent = null;

  if (props.step == EpisodeFormStepConstants.Title)
  bodyContent = (<div style={{height: "200px", width: "200px", background: 'blue'}}>
    <h1>
     Title Body
    </h1>
  </div>

  )
  if (props.step == EpisodeFormStepConstants.Description)
  bodyContent = (<div style={{height: "200px", width: "200px", background: 'blue'}}>
    <h1>
     Description Body
    </h1>
  </div>
  )


  return(
    <div className={classes('EpisodeForm')}
    >
      <Modal
        modifiers={['popup', 'large']}
        popup={true}
        isOpen={props.isOpen}
        onRequestClose={props.episodeFormClose}
        onClickClose={props.episodeFormClose}
      >
        <div className="EpisodeForm__Top">
            <h2
            className="EpisodeForm__Heading type-headline-small"
            >
            <span className="EpisodeForm__HeadingText">
							{props.vm.heading}
						</span>
            </h2>
        {/* Progress Bar */}
          <div 							className="EpisodeForm__ProgressBar">
            </div>
        </div>

        <div
          className="EpisodeForm__Body">
          {bodyContent}
        </div>
      </Modal>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isOpen: state.episodeForm.formOpen,
  step: state.episodeForm.step
})

const mapDispatchToProps = (dispatch) => ({
  episodeFormClose: () => dispatch(episodeFormClose()),
  episodeFormOpen: () => dispatch(episodeFormOpen()),
  episodeFormSetStep: (newStep) => dispatch(episodeFormOpen(newStep))
})

export const EpisodeFormCreateConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(EpisodeFormCreate);

