import React from 'react';
import { connect } from 'react-redux';
import './Profile.scss';

export const Profile = ({ user, spartan, emblem, stats }) => {
  return (
    <section className="profile_container">
      <h2 className="profile_gamertag">{user}</h2>
      <img
        className="profile_spartan-img"
        src={spartan}
        alt={`${user}'s spartan image`}
      />
      <article className="profile_service-card">
        <img
          className="profile_emblem-img"
          src={emblem}
          alt={`${user}'s emblem`}
        />
        <table class="profile_stat-table" border="1">
          <tr>
            <td>SPARTAN RANK</td>
            <td>{stats.rank}</td>
          </tr>
          <tr>
            <td>TOTAL XP</td>
            <td>{stats.xp}</td>
          </tr>
          <tr>
            <td>TOTAL KILLS</td>
            <td>{stats.kills}</td>
          </tr>
          <tr>
            <td>TOTAL DEATHS</td>
            <td>{stats.deaths}</td>
          </tr>
          <tr>
            <td>KDR</td>
            <td>{stats.kills / stats.deaths}</td>
          </tr>
          <tr>
            <td>WINS</td>
            <td>{stats.wins}</td>
          </tr>
          <tr>
            <td>LOSSES</td>
            <td>{stats.losses}</td>
          </tr>
          <tr>
            <td>HEADSHOTS</td>
            <td>{stats.headshots}</td>
          </tr>
          <tr>
            <td>SPARTAN KILLS</td>
            <td>{stats.spartanKills}</td>
          </tr>
          <tr>
            <td>SHOTS FIRED</td>
            <td>{stats.shots}</td>
          </tr>
          <tr>
            <td>ACCURACY</td>
            <td>{stats.hits / stats.shots}</td>
          </tr>
          <tr>
            <td>DAMAGE DEALT</td>
            <td>{stats.damage}</td>
          </tr>
          <tr>
            <td>UNIQUE MEDALS EARNED</td>
            <td>{stats.medals}</td>
          </tr>
          <tr>
            <td>TIME PLAYED</td>
            <td>{stats.time.hours}</td>
          </tr>
        </table>
      </article>
    </section>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  spartan: state.spartan,
  emblem: state.emblem,
  stats: state.stats
});

export default connect(mapStateToProps)(Profile);
