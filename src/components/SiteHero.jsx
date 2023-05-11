import React from 'react'

function SiteHero() {
  return (
    <div className='hero'>
    <div className="hero__container container">
    <div className="hero__content">
    <h1 className="hero__title title">Body Mass
    Index Calculator</h1>
    <p className="hero__description">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
    </div>

    <div className="hero__bmi bmi">
    <div className="bmi__inner">
    <h2 className="bmi__title title">Enter your details below</h2>
    <form>
      <div className="bmi__checkboxes mi-checker">
      <div className="mi-checker__label-input-wrapper">
      <label className="mi-checker__label" htmlFor="metric">Metric</label>
      <input className="mi-checker__input visually-hidden" type="radio" name="mi" id='metric' />
      <span className="mi-checker__checker"></span>
      </div>
      <div className="mi-checker__label-input-wrapper">
      <label className="mi-checker__label" htmlFor="imperial">Imperial</label>
      <input className="mi-checker__input visually-hidden" type="radio" name="mi" id='imperial' />
      <span className="mi-checker__checker"></span>
      </div>
      </div>
      <div className="bmi__hw-checker hw-checker">
      <div className="hw-checker__label-input-wrapper">
      <label className="hw-checker__label" htmlFor="height">Height</label>
      <input className="hw-checker__input" type="number" id="height" placeholder="0" min="0" max="275"/>
      </div>
      <div className="hw-checker__label-input-wrapper">
      <label className="hw-checker__label" htmlFor="weight">Weight</label>
      <input className="hw-checker__input" type="number" id="weight" placeholder="0" min="0" max="475"/>
      </div>
      </div>
    </form>
    <div className="bmi__result bmi-result">
    <div className="bmi-result__result">Welcome</div>
    <p className="bmi-result__text">Enter your height and weight and you’ll see your BMI result here</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    )
  }

  export default SiteHero