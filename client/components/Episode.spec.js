import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Episode from './Episode'
import {EpisodeTitleLink} from './Episode'

const adapter = new Adapter()
enzyme.configure({adapter})

describe.only('Episode', () => {
  let episodeCard

  beforeEach(() => {
    episodeCard = shallow(
      <Episode
        episode={{
          title: 'Test Episode',
          series: 'Test Series',
          bookNumber: 22,
          chapterNumber: 101,
          id: 1
        }}
      />
    )
  })
  it('renders the title, bookNum and ChapNum', () => {
    expect(episodeCard.find('h4').text()).to.be.equal(
      'Test Series Book:22,Chapter:101'
    )
  })
  it('has a link on its title, links to episode page', () => {
    let link = episodeCard.find(EpisodeTitleLink)
    expect(link).to.have.lengthOf(1)
    expect(link.props().to).to.be.equal('/episodes/1')
  })
})
