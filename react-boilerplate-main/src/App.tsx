/* eslint-disable jsx-a11y/label-has-associated-control */
import './App.scss';
import './styles/reset.scss';
import './styles/flexboxgrid.scss';
import { useState } from 'react';

import GenderQuestion from './components/genderQuestions';
import FullNameQuestion from './components/fullName';
import FavMovieQuestion from './components/favoriteMovie';
import LikedAnimalsQuestion from './components/likedAnimals';
import AboutMeQuestion from './components/aboutMe';
import Summary from './components/summarty';

const initialFormData = {
  conditions: '',
  fullName: '',
  gender: '',
  favMovie: '',
  likedAnimals: [] as string[],
  aboutMe: '',
};
const App = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [error, setError] = useState('');
  const [likedAnimalsInput, setLikedAnimalsInput] = useState('');
  // const [likedAnimalsInputIndex, setLikedAnimalsInputIndex] = useState(0);

  return (
    <div className="main">

      {activeQuestion === 0 && (
        <div className="question--main">
          <h1 className="question">Sākums</h1>
          <div className="checkbox">
            <input
              id="validation-checkbox-example"
              value="Agreed"
              onChange={(e) => {
                setFormData({ ...formData, conditions: e.target.value });
              }}
              type="checkbox"
              checked={!!formData.conditions}
            />
            <label htmlFor="validation-checkbox-example" className="d-block">
              Piekrītu nosacījumiem

            </label>
          </div>
          {error && <p className="error">{error}</p>}
          <div className="button--box-begining">
            <button
              className="btn btn-primary btn-block button--width"
              type="button"
              onClick={() => {
                setError('');

                if (!formData.conditions) {
                  setError('This checkbox is mandatory');

                  return;
                }

                setActiveQuestion(activeQuestion + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {activeQuestion === 1 && (
      <FullNameQuestion
        onInputChange={(value) => {
          setFormData({ ...formData, fullName: value });
        }}
        onSave={() => {
          setError('');

          if (!formData.fullName) {
            setError('This input is mandatory');

            return;
          }
          setActiveQuestion(activeQuestion + 1);
        }}
        onBack={() => {
          setActiveQuestion(activeQuestion - 1);
        }}
        error={error}
        fullName={formData.fullName}
      />
      )}

      {activeQuestion === 2 && (
      <GenderQuestion
        onRadioChange={(value) => {
          setFormData({ ...formData, gender: value });
        }}
        onSave={() => {
          setError('');

          if (!formData.gender) {
            setError('These radio inputs are mandatory');

            return;
          }
          setActiveQuestion(activeQuestion + 1);
        }}
        onBack={() => {
          setActiveQuestion(activeQuestion - 1);
        }}
        error={error}
        gender={formData.gender}
      />

      )}

      {activeQuestion === 3 && (

      <FavMovieQuestion
        onBack={() => {
          setActiveQuestion(activeQuestion - 1);
        }}
        onSave={() => {
          console.log(formData);

          setError('');

          if (!formData.favMovie) {
            setError('This field is mandatory');

            return;
          }

          setActiveQuestion(activeQuestion + 1);
        }}
        onSelectChange={(value) => {
          setFormData({ ...formData, favMovie: value });
        }}
        error={error}
        favMovie={formData.favMovie}
      />

      )}

      {activeQuestion === 4 && (
      <LikedAnimalsQuestion
        onBack={() => {
          setActiveQuestion(activeQuestion - 1);
        }}
        onInputChange={(value) => {
          setLikedAnimalsInput(value);
        }}
        onSave={() => {
          setError('');
          if (formData.likedAnimals.length < 1) {
            setError('This field is mandatory');

            return;
          }
          setActiveQuestion(activeQuestion + 1);
        }}
        onPush={() => {
          setError('');
          if (likedAnimalsInput) {
            formData.likedAnimals.push(likedAnimalsInput);
          }

          if (!likedAnimalsInput) {
            setError('This field cant be empty');

            return;
          }
          setLikedAnimalsInput('');
        }}
        likedAnimalsInput={likedAnimalsInput}
        error={error}
      />

      )}

      {activeQuestion === 5 && (
      <AboutMeQuestion
        onBack={() => {
          setActiveQuestion(activeQuestion - 1);
        }}
        onInputChange={(value) => {
          setFormData({ ...formData, aboutMe: value });
        }}
        onSave={() => {
          setError('');

          if (formData.aboutMe.split('').length < 1) {
            setError('Not enough characters!');

            return;
          }

          setActiveQuestion(activeQuestion + 1);
        }}
        error={error}
        aboutMe={formData.aboutMe}
      />

      )}

      {activeQuestion === 6 && (
      <Summary
        conditions={formData.conditions}
        fullName={formData.fullName}
        gender={formData.gender}
        favMovie={formData.favMovie}
        likedAnimals={formData.likedAnimals}
        aboutMe={formData.aboutMe}
        onBack={() => {
          setActiveQuestion(activeQuestion - 1);
        }}
      />
      )}
    </div>
  );
};

export default App;
