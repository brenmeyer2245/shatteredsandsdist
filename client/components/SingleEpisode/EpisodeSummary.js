import React, {Fragment} from 'react'
import {splitSummaryToPages, testSummary} from '../../utils'

const EpisodeSummary = props => {
  const {
    series,
    bookNumber,
    bookTitle,
    chapterNumber,
    title,
    photos
  } = props
  let summary = props.episodeSummary || "Summary Currently Not Available"

  return (
    <div className="singleEpisode-summary-container" style={{height: "70vh", width: "80vw"}}>
      {/* Split By Page */}
    {splitSummaryToPages(summary, 1450).map((page, index) => (

          <div key={"page"  + index} className="singleEpisodeDeets-base mt-4 elevatedCard flexDown">
            <div className="singleEpisodeDeets-contents">
               {index === 0  && (
                <Fragment>
               <h2 className="text-center font-GreatVibes">
                  {series} Book: {bookNumber}, {bookTitle}
                </h2>
                <h2 className="text-center font-GreatVibes">
                  Chapter {chapterNumber}: {title}
                </h2>
                <br />
                </Fragment>)}
                <div className="font-Merienda">
                        <div className="episode-summary-text ">
                          {page}
                        </div>
                </div>
                <br />
             </div>
          </div>))}
      </div>
  )}

export default EpisodeSummary
