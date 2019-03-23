import React from 'react'

const EpisodeSummary = props => {
  const {
    summary,
    series,
    bookNumber,
    bookTitle,
    chapterNumber,
    title,
    photos
  } = props
  return (
    <div className="singleEpisodeDeets-base mt-4 elevatedCard flexDown">
      <div className="singleEpisodeDeets-contents">
        <h2 className="text-center">
          {series} Book: {bookNumber}, {bookTitle}
        </h2>
        <h2 className="text-center">
          Chapter {chapterNumber}: {title}
        </h2>
        <br />
        <div>
          <div className="flex">
            <div>
              {photos ? (
                <img className="episode-summary-img" src={photos[0]} />
              ) : null}
            </div>
            <div className="episode-summary-text">
              {summary ||
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            </div>
          </div>
          <br />
          <div className="flex">
            {summary ||
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            <div>
              {photos ? (
                <img className="episode-summary-img" src={photos[1]} />
              ) : null}
            </div>
          </div>
          <br />
          <div className="flex">
            <div>
              {photos ? (
                <img className="episode-summary-img" src={photos[2]} />
              ) : null}
            </div>
            {summary ||
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          </div>
        </div>
        <br />
        </div>
    </div>
  )
}

export default EpisodeSummary
