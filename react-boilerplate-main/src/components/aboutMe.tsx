/* eslint-disable jsx-a11y/label-has-associated-control */
type aboutMeProps = {
    onInputChange: (value:string) => void
    onSave: () => void
    error: string
    onBack: () => void
    aboutMe: string
}
const AboutMeQuestion = ({
  onInputChange, onSave, error, aboutMe, onBack,
}:aboutMeProps) => (
  <section className="question--main">
    <h1 className="question">Write about yourself - aproximetly 150 characters.</h1>
    <label>
      <br />
      <textarea
        className="textarea"
        value={aboutMe}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
      />
    </label>
    {error && <p className="error">{error}</p>}
    <div className="button--box">
      <button
        className="btn btn-primary btn-block button--width"
        type="button"
        onClick={() => onBack()}
      >
        Previous
      </button>
      <button
        className="btn btn-primary btn-block button--width"
        type="button"
        onClick={() => {
          onSave();
        }}
      >
        Next
      </button>
    </div>
  </section>
);
export default AboutMeQuestion;
