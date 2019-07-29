import React from 'react';
import { connect } from 'react-redux';
import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Profile.scss';

export class Profile extends React.Component {
  scrollToBottom = () => {
    this.loadPlayer.scrollIntoView({ behavior: 'smooth' });
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  getKDR = () => {
    const { stats } = this.props;
    const { kills, deaths } = stats;
    const total = kills + deaths;
    return (kills / total) * 100;
  };

  render() {
    const { user, spartan, emblem, stats } = this.props;
    const statusMeter = (
      <CircularProgressbarWithChildren
        value={this.getKDR()}
        strokeWidth={5}
        circleRatio={0.5}
        styles={buildStyles({
          strokeLinecap: 'butt',
          rotation: -0.25,
          trailColor: 'hsl(0, 0%, 93%)'
        })}
      >
        <img
          style={{ height: '100px', marginTop: '-5' }}
          src={emblem}
          alt={`${user}'s emblem`}
        />
        <div style={{ fontSize: '12', marginTop: '-5' }}>
          <p className="kdr-percentage">
            {(stats.kills / stats.deaths).toFixed(3)}
          </p>
          <p className="kdr-label">K/D</p>
        </div>
        <table className="statusMeter_table">
          <tbody>
            <tr>
              <td align="left">
                <span className="table-k">_</span>
                KILLS
              </td>
              <td align="right">{stats.kills}</td>
            </tr>
            <tr>
              <td align="left">
                <span className="table-d">_</span>
                DEATHS
              </td>
              <td align="right">{stats.deaths}</td>
            </tr>
          </tbody>
        </table>
        <p className="statusMeter_timer">{`${stats.time.hours}:${
          stats.time.minutes
        }:${Math.round(stats.time.seconds)}`}</p>
        <p className="statusMeter_playTime">PLAYTIME</p>
      </CircularProgressbarWithChildren>
    );
    return (
      <section className="profile_container">
        <h2 className="profile_gamertag">{user}</h2>
        <article className="profile_service-card">
          <table className="profile_stat-table" border="1">
            <tbody>
              <tr>
                <td>SPARTAN RANK</td>
                <td>{stats.rank}</td>
              </tr>
              <tr>
                <td>TOTAL XP</td>
                <td>{stats.xp}</td>
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
                <td>SHOTS FIRED</td>
                <td>{stats.shots}</td>
              </tr>
              <tr>
                <td>ACCURACY</td>
                <td>{`${((stats.hits / stats.shots) * 100).toFixed(3)}%`}</td>
              </tr>
              <tr>
                <td>DAMAGE DEALT</td>
                <td>
                  {stats.damage
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </td>
              </tr>
              <tr>
                <td>MEDALS EARNED</td>
                <td>{stats.medals}</td>
              </tr>
            </tbody>
          </table>
          {statusMeter}
          <img
            className="profile_spartan-img"
            src={spartan}
            alt={`${user}'s Spartan`}
            ref={img => {
              this.loadPlayer = img;
            }}
          />
        </article>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  spartan: state.spartan,
  emblem: state.emblem,
  stats: state.stats
});

export default connect(mapStateToProps)(Profile);
