import React, {useState} from 'react'



const Modal = (props) => {
    const [modalOpen, setModalOpen] = useState(false)

  return(
  <div className={"modal-container" + modalOpen ? "--open" : "--closed"}>
    <div className="modal-close" onClick={() => setModalOpen(!modalOpen)}>
      {/* icon for close */}
    </div>
    <div className="modal-contents">
      <span> Test </span>
    </div>
  </div>)
};

export default Modal;
