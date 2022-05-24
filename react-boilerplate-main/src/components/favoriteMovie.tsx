/* eslint-disable jsx-a11y/label-has-associated-control */
import ReactTooltip from 'react-tooltip';

type favMovieProps = {
    onSelectChange: (value:string) => void
    onSave: () => void
    error: string
    favMovie: string
    onBack: () => void
}
const FavMovieQuestion = ({
  onSelectChange, onSave, error, favMovie, onBack,
}:favMovieProps) => (
  <section className="question--main">
    <h1 className="question">Question 3: What is your favorite movie?</h1>
    <label>
      {' '}
      <br />
      <div className="input--help">
        <select
          className={`select ${error && 'border--red'}`}
          value={favMovie}
          onChange={(e) => {
            onSelectChange(e.target.value);
          }}
        >
          <option disabled> </option>
          <option>
            The Lord of the Rings: The Fellowship of the Ring
          </option>
          <option>
            The Lord of the Rings: The Two Towers
          </option>
          <option>
            The Lord of the Rings: The Return of the King
          </option>
          <option>
            They all are prefect, I cant choose only one!
          </option>
        </select>
        <p data-tip="Thats a trick question, the only acceptable answer is the bottom one">
          Help
        </p>
      </div>
      <ReactTooltip />
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
export default FavMovieQuestion;
