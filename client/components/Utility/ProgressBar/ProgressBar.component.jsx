import React from 'react'
import {classes} from '../UtilityFunctions/classes.js'


/**
 * @params props
 * steps, selectedStep, arialLabel and label
 */
export const ProgressBar = (props) => {
  let selectedStepIndex = -1;

  if (props.steps && props.selectedStep){
    //iterate through existing steps
    //set the selected Step
    props.steps.forEach((step, i) => {
      if (step.id === props.selectedStep) selectedStepIndex = i
    })
  }

    //if selectedStep wasn't set, render Null
    if (selectedStepIndex < 0) {
      console.log("[ProgressBar]", "selected step does not exist in provided steps", props)
      return null;
    }

    return(
      <nav
        arial-label={props.arialLabel}
        className={classes(['ProgressBar', props.className])}>

        {props.steps.map((step, index) => {
          const indexDisplay = index+1;
          const ariaLabel = `${step.label}: Step ${indexDisplay} of ${props.steps.length + 1}`


          const isActive = step.id === props.selectedStep;
          //if the ste is < current Step
          const buttonClickable = index < selectedStepIndex;

          return (
            <div
              key={indexDisplay + step.label}
              className={classes([
                'ProgressBar__Step',
                isActive && 'ProgressBar--Step--active',
                buttonClickable && 'ProgressBar__Step--clickable'
              ])}
              arial-label={ariaLabel}
              onClick={() => {
                if (buttonClickable) step.handleClick()
              }}
            >
              <div className="ProgressBar__Circle">
                <span className="Progress__CircleNumber">
                {indexDisplay}</span>

              </div>

              <div className="ProgressBar__Label">{step.label}</div>
            </div>
          )
        })}


      </nav>
    )
}
