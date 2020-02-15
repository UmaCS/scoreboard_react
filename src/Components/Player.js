import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'
import Counter from './Counter';

class Player extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number,
    id: PropTypes.number,
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func
  }

  render(){
    const {
      name,
      score,
      index,
      id,
      removePlayer,
      changeScore
    } = this.props;

    return (
      <div className='player'>
        <span className='player-name'>
        <button className="remove-player" onClick={ () => removePlayer(id)}>✖</button>

        <Icon isHighScore={this.props.isHighScore}/>

        {name}</span>
        <Counter
        index={index}
        score={score}
        changeScore={changeScore}
        />
      </div>
    );
  }

}

export default Player;
