import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default props => {
  console.log('NavProps:', props);
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
      {/* <EpisodeNavLink to={`/episodes/${props.episodeId}/summary`}>
        Comments
      </EpisodeNavLink> */}
    </EpisodeNavWrapper>
  );
};

const EpisodeNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(113, 3, 3);
  color: white;
  margin-top: 0em;
  border-bottom-left-radius: 0.7em;
  border-bottom-right-radius: 0.7em;
  box-shadow: 0.7em 0.7em rgba(12, 1, 1, 0.2);
`;

const EpisodeNavLink = styled(Link)`
  color: white;
  font-size: 1.3em;
  text-decoration: none;
  padding: 0.7em 2.5em;
  margin: 0.7em;
`;
