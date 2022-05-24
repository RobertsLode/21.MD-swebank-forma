/* eslint-disable jsx-a11y/label-has-associated-control */
type GenderQuestionProps = {
    onRadioChange: (value: string) => void
    onSave: () => void
    error: string
    onBack: () => void
    gender: string
  }

const GenderQuestion = ({
  onRadioChange, onSave, error, onBack, gender,
}: GenderQuestionProps) => (
  <section className="question--main">
    <h1 className="question">Question 2: What gender are you?</h1>
    <div className="radio input--box">
      <input
        id="options-1"
        name="multi-step-radio-example"
        type="radio"
        value="Male"
        checked={gender === 'Male'}
        onChange={(e) => {
          onRadioChange(e.target.value);
        }}
      />
      <label htmlFor="options-1">
        Male
      </label>
      <input
        checked={gender === 'Female'}
        id="options-2"
        name="multi-step-radio-example"
        type="radio"
        value="Female"
        onChange={(e) => {
          onRadioChange(e.target.value);
        }}
      />
      <label htmlFor="options-2">

        Female
      </label>
    </div>
    {error && <p className="error">{error}</p> }
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

export default GenderQuestion;
