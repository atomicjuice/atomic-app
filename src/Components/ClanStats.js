import React, { Component } from 'react';
import '../Css/StatsStyle.css'


class ClanStats extends Component {

  clanLocalStorage = (localStorage.getItem('currentClan'))
  clanParsed = JSON.parse(this.clanLocalStorage)

  state = {
    clan: !this.props.clan ? this.clanParsed : this.props.clan
  }

  addToClanList = (name, id) => {
    if (!localStorage.getItem('clanList')) {
      localStorage.setItem('clanList', JSON.stringify({ [name]: id }))
      const clan = localStorage.getItem('clanList')
      const parsedClan = JSON.parse(clan)
      this.props.setClanList(parsedClan)
    }
    else {
      let retreivedData = localStorage.getItem('clanList')
      let clanArray = JSON.parse(retreivedData)
      clanArray[name] = id
      localStorage.setItem('clanList', JSON.stringify(clanArray))
      this.props.setClanList(clanArray)
      console.log(localStorage)
    }
  }

  setClanOneComparisonID = this.props.setClanOneComparisonID

  render() {
    const clan = this.state.clan
    return (
      <div>
        <div className='clanStats clanCard'>
          <h1>Name: {clan.name}</h1>
          <br />
          <h2>Founder Name: {clan.creator_name}</h2>
          <br />
          <h2>Members Count: {clan.members_count}</h2>
          <br />
          <h2>Motto: {clan.motto} </h2>
          <br />
          <h2>Minimum tier vehicle to join: {clan.recruiting_options.vehicles_level}</h2>
          <br />
          <h2>Battles before you can join: {clan.recruiting_options.battles}</h2>
          <br />
          <h2>Minimum win/loss ratio needed to join: {clan.recruiting_options.wins_ratio} </h2>
          <br />
          <button className="addtoclanlist" onClick={() => this.addToClanList(clan.name, clan.clan_id)}>+ Add To Clan List </button>
          <br></br>
          <br></br>
          <button onClick={() => this.setClanOneComparisonID(clan.clan_id)}>+ Compare With Another Clan</button>
        </div>
      </div>
    );
  }
}

export default ClanStats;

