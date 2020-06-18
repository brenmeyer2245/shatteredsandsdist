import React from 'react'
import {Modal} from '../../../Utility/Modal/Modal';
import {connect} from 'react-redux';
import {EpisodeFormStepConstants, EpisodeFormData} from './EpisodeFormCreate.data'
 import {episodeFormOpen, episodeFormClose} from './EpisodeFormCreate.actions'
 import {ProgressBar} from '../../../Utility/ProgressBar/ProgressBar.component'

 const EpisodeFormCreate = (props) =>{
  console.log(props)
  if (props.preventRender) return null;
  let bodyContent = null;

  //TODO: replace with Actual Component
  if (props.step == EpisodeFormStepConstants.Title)
  bodyContent = (<div style={{height: "200px", width: "200px", background: 'blue'}}>
    <h1>
     Title Body
    </h1>
  </div>

  )
  else
  bodyContent = (<div style={{height: "200px", width: "200px", background: 'blue'}}>
    <h1>
     Description Body
    </h1>
  </div>
  )


  return(
    <div>
  <Modal
        modifiers={['popup', 'large']}
        popup={true}
        isOpen={props.isOpen}
        onRequestClose={props.episodeFormClose}
        onClickClose={props.episodeFormClose}
      >
        <div className="EpisodeForm__Top">
            <h2 className="EpisodeForm__Heading type-headline-small">
            <span className="EpisodeForm__HeadingText">
              New Episode
						</span>
            </h2>


      <ProgressBar                
          className="EpisodeForm__ProgressBar"
          selectedStep={props.step}
          steps={[
            {
              label: 'Step 1 Label',
              id: EpisodeFormStepConstants.Title,
              handleClick: () => {
                props.episodeForm.setStep(EpisodeFormStepConstants.Title)
              }
            }
            ,{
              label: 'Step 2 Label',
              id: EpisodeFormStepConstants.Description,
              handleClick: () => {
                props.episodeForm.setStep(EpisodeFormStepConstants.Description)
              }
            }
          ]}
          ariaLabel=""
          >
          <div
            className="EpisodeForm__Body">
            {bodyContent}
          </div>
          </ProgressBar>
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
  episodeFormClose: () => {
    console.log('Close Fired')
    dispatch(episodeFormClose())
  },
  episodeFormOpen: () => {
    console.log('[MODAL OPEN] Fired')
    dispatch(episodeFormOpen())
  }
    ,
  episodeFormSetStep: (newStep) => dispatch(episodeFormOpen(newStep))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EpisodeFormCreate);



