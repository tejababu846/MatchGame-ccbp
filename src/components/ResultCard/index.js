import './index.css'

const ResultCard = props => {
  const {score, restartGame} = props

  const onPlayAgainClick = () => restartGame()

  return (
    <div className="score-card-container">
      <img
        className="trophy-image"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="your-score-text">YOUR SCORE</p>
      <h1 className="result-score">{score}</h1>
      <button
        onClick={onPlayAgainClick}
        type="button"
        className="play-again-button"
      >
        <img
          className="reset-icon"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <p className="play-again-text">PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default ResultCard
