/* eslint-disable jsx-a11y/label-has-associated-control */
type fullNameProps = {
    onInputChange: (value:string) => void
    onSave: () => void
    error: string
    fullName: string
    onBack: () => void
}
const FullNameQuestion = ({
  onInputChange, onSave, error, onBack,
  fullName,
}:fullNameProps) => (

  <section className="question--main">
    <h1 className="question">Question 1: What is your full name?</h1>
    <label>
      <br />
      <input
        className={`select ${error && 'border--red'}`}
        type="text"
        value={fullName}
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
export default FullNameQuestion;
