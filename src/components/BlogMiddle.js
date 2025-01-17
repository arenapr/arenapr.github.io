import React from 'react'
import '../App.css'
import './BlogMiddle.css'
import CardItem from './CardItem'

function BlogMiddle() {
  return (
    <div className='offwhite-background'>
      <div className='cards'>
          <div className='cards__container'>
          <div className='cards__wrapper'>
              <ul className='cards__items'>
                  <CardItem 
                    src='images/Janace.png'
                    text='JANACE GRIFFIN IS FOLLOWING HER DREAMS'
                    path='./janace-griffin-blog'
                  />
                  <CardItem 
                    src='images/6par6noid6.jpeg'
                    text='SERGIO ESTRADA AND THE PURSUIT OF EXCELLENCE'
                    path='./sergio-estrada-blog'
                  />
                  <CardItem 
                    src='images/hex_by_lex.jpg'
                    text="LET'S TALK ABOUT ALEXIS LOPEZ ECLECTIC STYLE"
                    path='./alexis-lopez-blog'
                  />
              </ul>
              <ul className='cards__items'>
                  <CardItem 
                    src='images/Meaningless_1080x1080.png'
                    text="MAKING CONNECTIONS: NICKO SENA'S MEANINGLESS CONNECTION"
                    path='./nicko-sena-blog'
                  />
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogMiddle