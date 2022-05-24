/* eslint-disable jsx-a11y/label-has-associated-control */
type likedAnimalsProps = {
    onInputChange: (value:string) => void
    onSave: () => void
    error: string
    onPush: () => void
    onBack: () => void
    likedAnimalsInput: string
}
const LikedAnimalsQuestion = ({
  onInputChange, onPush, onSave, error, likedAnimalsInput, onBack,
}:likedAnimalsProps) => (
  <section className="question--main">
    <h1 className="question">Question 4: What animals do you like?</h1>
    <p>Add only one animal at a time</p>
    <div className="input--help-modified">
      <label>
        <br />
        <input
          className={`select ${error && 'border--red'}`}
          type="text"
          value={likedAnimalsInput}
          onChange={(e) => {
            onInputChange(e.target.value);
          }}
        />
      </label>
      <button
        className="btn btn-primary btn-block button--width"
        type="button"
        onClick={() => {
          onPush();
        }}
      >
        Add
      </button>
    </div>
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
export default LikedAnimalsQuestion;
