import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <div className='login-user'>
        <div className='login-user__top'>
          <div className='login-user__logo'/>
          <span className='login-user__title'>
            Who is watching?
          </span>
        </div>
        <div className='login-user__form'>
          <div className='login-user__user-box'>
            <img className='login-user__user-img' src="https://userstock.io/data/wp-content/uploads/2020/06/jack-finnigan-rriAI0nhcbc-300x300.jpg"/>
            <div className='login-user__user-name'>Ryan</div>
          </div>
        </div>
        <div className='login-user__buttons'>
          <button className='login-user__adult'>Add Adult</button>
          <button className='login-user__kid'>Add Child</button>
        </div>
      </div>
    </div>
  )
}
