import React, {useRef} from 'react';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Scrollbars } from 'react-custom-scrollbars'
import {classes, createModifiers} from '../UtilityFunctions/classes';


const InnerContent = props => {
  return (
  <div>
    <div className="Modal__InnerScrollbar">
      {props.children}
    </div>
    <button
      className="Modal__Close u-reset-button"
      onClick={props.onClickClose}
      onKeyDown={e => (e.key == 'Enter' || e.key == ' ') ?
                                    props.onClickClose() : null
      }
      tabIndex="0"
      aria-label="Close Modal"
    >
        <FontAwesomeIcon
          icon="window-close"
          className="Modal__CloseIcon"
          alt="Close Modal"/>
    </button>
  </div>
)
}




/**
 * @param {Object} props
 * @param {bool} props.popup
 * @param {bool} props.isOpen
 * @param {bool} props.onRequestClose
 * @param {bool} props.errorModal
 * @param {ref} props.contentRef
 * @param {string} props.modalTitle
 *
 *
 */
export const Modal = (props) => (
  /** Modal Container from ReactModal Library
        properties from params for
        classNames, the label for the content,
        extra classes for error modals, aria focus controls,
        state for open/closed, a cb function to trigger on close
        and a reference to the content component
  **/
  <ReactModal
    className={classes([
        'Modal'
        ,props.className
        ,createModifiers(
          'Modal',
          ((props.modifiers || [])
              .concat([props.popup && 'popup']))
        )
      ])}

    contentLabel={props.modalTitle ? props.modalTitle : 'Modal'}
    overlayClasses = {classes([
      'Modal_Overlay'
      ,props.errorModal && 'Modal__Overlay--error'
    ])}
    ariaHideApp ={false}
    onRequestClose={props.onRequestClose}
    isOpen = {props.isOpen}
    contentRef = {props.contentRef}
  >

    {/* Modal Content */}
    <div className={classes([
          'Modal_Content'
          ,props.contentClassName
      ])}>
      {/* If this modal is not a popup, allow scroll */}
      {
        props.popup ? (<InnerContent {...props} />)
                    : ( <Scrollbars>
                          <InnerContent {...props}/>
                        </Scrollbars>)
      }
    </div>
  </ReactModal>
)
