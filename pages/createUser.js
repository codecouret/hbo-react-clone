import Head from 'next/head'
import Image from 'next/image'


export default function CreatUser() {
  return (
    <div>
      <div className='create-user'>
        <div className='create-user__top'>
          <div className='create-user__logo'/>
          <span className='create-user__title'>
            Who is watching?
          </span>
        </div>
        <div className='create-user__form'>
            <img className='create-user__user-img' src="https://userstock.io/data/wp-content/uploads/2020/06/jack-finnigan-rriAI0nhcbc-300x300.jpg"/>
            <div className='create-user__input-group'>
                <label>Name</label>
                <input type="text" className='create-user__inputText'/>
                <div className='create-user__colors'>
                    <div className='create-user__color create-user__color--active' style={{background: 'rgb(0,12,36)',
                         background: 'linear-gradient(151deg, rgba(0,12,36,1) 16%, rgba(162,0,255,1) 100%)'}}/>
                        
                    <div className='create-user__color' style={{background: 'rgb(0,12,36);',
                         background: 'linear-gradient(151deg, rgba(0,12,36,1) 16%, rgba(255,0,230,1) 100%)'}}/>

                    <div className='create-user__color' style={{background: 'rgb(0,12,36)',
                         background: 'linear-gradient(151deg, rgba(0,12,36,1) 16%, rgba(255,113,0,1) 100%)'}}/>
                        
                    <div className='create-user__color' style={{background: 'rgb(0,12,36)',
                         background: 'linear-gradient(151deg, rgba(0,12,36,1) 16%, rgba(157,255,0,1) 100%)'}}/>
                    
                    <div className='create-user__color' style={{background: 'rgb(0,12,36)',
                         background: 'linear-gradient(151deg, rgba(0,12,36,1) 16%, rgba(255,49,0,1) 100%)'}}/>
                </div>
            </div>
        </div>
        <div className='create-user__buttons'>
          <button className='create-user__cancel'>cancel</button>
          <button className='create-user__save'>save</button>
        </div>
      </div>
    </div>
  )
}
