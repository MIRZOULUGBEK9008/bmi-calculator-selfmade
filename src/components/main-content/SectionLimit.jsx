import React from 'react'

function SectionLimit() {
  const indexGrid = [
    {
      title: "Gender",
      text: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
      class: "index-grid__card--gender",
    },
    {
      title: "Age",
      text: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
      class: "index-grid__card--age",
    },
    {
      title: "Muscle",
      text: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
      class: "index-grid__card--muscle",
    },
    {
      title: "Pregnancy",
      text: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
      class: "index-grid__card--pregnancy",
    },
    {
      title: "Race",
      text: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
      class: "index-grid__card--race",
    },
  ]
  return (
    <section className="section-limit">
    <div className="section-limit__container container">
    <div className="section-limit__content">
    <h2 className="section-limit__title title">Limitations of BMI</h2>
    <p className="section-limit__description">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
    </div>
    <ul className="section-limit__grid index-grid">
    {
      indexGrid.map((card) => {
        return (
          <li className={`index-grid__card grid-card  ${card.class}`}>
          <div className="grid-card__inner">
          <h3 className="grid-card__title title">{card.title}</h3>
          <p className="grid-card__description">{card.text}</p>
          </div>
          </li>
          )
        })
      }
      </ul>
      </div>
      </section>
      )
    }

    export default SectionLimit