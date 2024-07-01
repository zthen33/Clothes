import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
      return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                  <div className="descriptionbox-nav-box">Description</div>
                  <div className="descriptionbox-nav-box fade">Review (122)</div>
            </div>
            <div className="descriptionbox-description">
                  <p>An e-ecommer website is an online platform that facilitates
                  buying and seling of products or services over the internet. It
                  servers as a virtual marketplace where business and individual can
                  showcases their products, interact with customers and conduct
                  transactions without the nees for a physycal presence, E-commerce
                  websites have gained imense popularity due to their convenience
                  accessibility and the global reach they offer.</p>
                  <p>E-commerce websites typycally display products or services along with
                  detailed description,images,prices and any avilable variations (e.g,.. size,
                  colors). Each product usually has its own dedicated page with relevant
                  information/</p>
            </div>
        </div>
      )
}

export default DescriptionBox