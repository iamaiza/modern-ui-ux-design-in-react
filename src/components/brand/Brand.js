import React from 'react'
import './brand.css'

import { google, slack, atlassian, dropbox, shopify } from './imports'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding d-flex align-center justify-center'>
      <div className='d-flex align-center justify-center'>
        <img src={google} alt= 'google' />
      </div>
      <div className='d-flex align-center justify-center'>
        <img src={slack} alt= 'slack' />
      </div>
      <div className='d-flex align-center justify-center'>
        <img src={atlassian} alt= 'atlassian' />
      </div>
      <div className='d-flex align-center justify-center'>
        <img src={dropbox} alt= 'dropbox' />
      </div>
      <div className='d-flex align-center justify-center'>
        <img src={shopify} alt= 'shopify' />
      </div>
    </div>
  )
}
export default Brand