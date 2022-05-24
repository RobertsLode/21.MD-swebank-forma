type summaryProps = {
    conditions: string
    fullName: string
    gender: string
    favMovie: string
    likedAnimals: string[]
    aboutMe: string
    onBack: () => void
}
const Summary = ({
  conditions, fullName, gender, favMovie, likedAnimals, aboutMe, onBack,
}:summaryProps) => (
  <section className="question--main">
    <h1 className="question">Summary, check if everything is correct.</h1>
    <div className="summary--box">
      <span className="summary--span">
        <b>Did you agree to conditions?</b>
        <p>{conditions}</p>
      </span>
      <span className="summary--span">
        <b>Did you write your full name corretly?</b>
        <p>{fullName}</p>
      </span>
      <span className="summary--span">
        <b>Did you select the correct gender?</b>
        <p>{gender}</p>
      </span>
      <span className="summary--span">
        <b>Did you select your favorite movie?</b>
        <p>{favMovie}</p>
      </span>
      <span className="summary--span">
        <b> Did you write all of your liked animals?</b>
        <p>{likedAnimals.toString()}</p>
      </span>
      <span className="summary--span">
        <b>Did you write all thet you wanted about yourself?</b>
        <p>{aboutMe}</p>
      </span>
    </div>
    <button
      className="btn btn-primary btn-block"
      type="button"
      onClick={() => onBack()}
    >
      Previous
    </button>
  </section>
);
export default Summary;
