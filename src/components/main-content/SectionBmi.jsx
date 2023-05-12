import React from 'react'
import Man  from '../../img/man.png'
import ManResponsive  from '../../img/man@2x.png'

function SectionBmi() {
  return (
    <section className="section-bmi">
      <div className="section-bmi__container container">
        <div className="section-bmi__content">
          <h2 className="section-bmi__title title">What your BMI result means</h2>
          <p className="section-bmi__decription">A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
        </div>
        <div className="section-bmi__img-wrapper">
          <img className="section-bmi__img" src={Man} alt="Man is eating a delicious sushi" srcSet={`${Man} 1x, ${ManResponsive} 2x`} width="468" height="533" />
        </div>
      </div>
    </section>
  )
}

export default SectionBmi