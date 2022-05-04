import React from 'react'
import BugItLogo from '../images/BugItLogo.jpg'
const MemberList = () => {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <img
            className='logo'
            rel='icon'
            src={BugItLogo}
            alt='Logo'
            width='100px'
            height='100px'
          />
          {/* <div className='col-sm-12 btn btn-primary' style={{ margin: '6px' }}>
              Add New Contact
            </div> */}
        </div>
        <div
          className='card-b o-hidden border-0 shadow-lg my-5'
          style={{ marginTop: '5rem!important' }}
        >
          <div className='card-body-b p-0'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='p-5-b'>
                  <div className='text-center'>
                    <label className='h2 form-label'>
                      Member List page coming Second quarter of 2022{' '}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MemberList