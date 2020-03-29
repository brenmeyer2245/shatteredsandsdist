import React, {useState, useEffect} from "react"
import {Modal} from '../Utility/Modal/Modal';
import {connect} from 'react-redux';
import {fetchCharacters} from '../../store'


const CharacterAccordion = (props) => (
  <Modal
    isOpen={true}
    popup={true}
    modifiers={['popup', 'large']}
    onRequestClose={() => {console.log("close")}}
    onClickClose={() => {console.log(" click close")}}
  >
  <div>
    <h1>
    This is a test
      </h1>
  </div>
 </Modal>
)

const mapStateToProps = (state) => ({
  allCharacters: state.characters
});

export default connect(mapStateToProps)(CharacterAccordion);
