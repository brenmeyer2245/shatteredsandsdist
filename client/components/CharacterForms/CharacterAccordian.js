import React, {useState, useEffect} from "react"
import {ShatteredSandsAccordion, ShatteredSandsModal} from '../Utility';

import {connect} from 'react-redux';
import {fetchCharacters} from '../../store'


const CharacterAccordion = (props) => {
const mockCharacters = [
  {name: 'Kal'},
  {name: 'Jaonos'},
  {name: 'Besh'},
  {name: 'Vass'},
  {name: 'Macide'},
  {name: 'Clock'},
  {name: 'Pal'},
]
 return <ShatteredSandsModal>
   <h1>

     Toot
   </h1>

 </ShatteredSandsModal>

}

const mapStateToProps = (state) => ({
  allCharacters: state.characters
});

export default connect(mapStateToProps)(CharacterAccordion);
