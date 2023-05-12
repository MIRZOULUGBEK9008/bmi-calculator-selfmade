import React from 'react'
import HealthyEating from '../../img/healthy-eating-min.svg'
import RegularExercise from '../../img/regular-exercise-min.svg'
import AdequateSleep from '../../img/adequate-sleep-min.svg'

function SectionAdvice() {
  const adviceList = [
    {
      img: HealthyEating,
      title: "Healthy eating",
      text: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    },
    {
      img: RegularExercise,
      title: "Regular exercise",
      text: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
    },
    {
      img: AdequateSleep,
      title: "Adequate sleep",
      text: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
    },
  ]
  return (
    <div className="section-advice-wrapper">
      <section className="section-advice">
      <div className="section-advice__container container">
      <ul className="section-advice__list advice-list">
      {
        adviceList.map((card, index) => {
          return (
            <li className="advice-list__card advice-card">
            <div className="advice-card__inner">
            <div className="advice-card__content">
              <h3 className="advice-card__title title">{card.title }</h3>
              <p className="advice-card__text">{card.text}</p>
            </div>
            <img className="advice-card__img" src={card.img} alt={card.title} width="64" height="64" />
            </div>
            </li>
            )
          })
        }
        </ul>
        </div>
        </section>
    </div>
      )
    }

    export default SectionAdvice