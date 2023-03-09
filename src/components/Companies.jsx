import React from 'react'
import { styles } from '../styles'
import { companies } from '../constants'

const Companies = () => {
  return (
    <section className={`${styles.flexCenter} mt-5 mb-5`}>
    <div className={`${styles.flexCenter} companies flex-wrap w-full z-[5]`}>
      {companies.map((company) => (
        <div key={company.id} className={`flex-1 ${styles.flexCenter} m-5`}>
          <img src={company.logo} alt="company_logo" className="object-contain" />
        </div>
      ))}
    </div>
  </section>
  )
}

export default Companies