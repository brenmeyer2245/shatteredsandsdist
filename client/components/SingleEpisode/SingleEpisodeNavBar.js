import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {updateAudio} from '../../utils'
import { urlPrefix } from '../../../Common/Constants';


export default props => {
  console.log('here', urlPrefix)
  return (
    <EpisodeNavWrapper>
      <EpisodeNavLink to={`/episodes/${props.episodeId}/summary`}>
        Summary
      </EpisodeNavLink>
      <EpisodeNavLink to={`/episodes/${props.episodeId}/characters`}>
        Characters
      </EpisodeNavLink>
      <EpisodeNavLink to={`/episodes/${props.episodeId}/cast`}>
        Cast
      </EpisodeNavLink>
      {props.audio && props.audio.length === 1 ?
      (<EpisodeNavLink onClick={(evt) => {
        evt.preventDefault();
        let myurl = urlPrefix.audio + props.audio
        if (props.title && props.audio) updateAudio(myurl, props.title)
        else console.log(`${!props.audio ? 'Audio is not defined' : 'Title is not defined'}`);
      }} to={`#`} >
        Play
      </EpisodeNavLink>
      ) : (
        props.audio && props.audio.length > 1 ? (<EpisodeNavLink to={`/episodes/${props.episodeId}/audio`}> Audio </EpisodeNavLink>) : null)}
    </EpisodeNavWrapper>
  );
};

const EpisodeNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(113, 3, 3);
  color: white;
  margin-top: -2em;
  border-bottom-left-radius: 0.7em;
  border-bottom-right-radius: 0.7em;
  box-shadow: 0.7em 0.7em rgba(12, 1, 1, 0.2);
`;

const EpisodeNavLink = styled(Link)`
    color: white;
    font-size: 1.3em;
    width: 25%;
    -webkit-text-decoration: none;
    text-decoration: none;
    padding: 1%;
    margin: 1%;
    text-align: center;
`;
