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
                    src='images/DSC_0234-square.png'
                    text='HILVENIA COLLECTIVE: STYLE, IDENTITY, AND DREAMS'
                    path='./hilvenia-blog'
                  />
                  <CardItem 
                    src='images/nath-500x500.png'
                    text='CLASSICALLY EXTRAVAGANT: INSIDE HYPNOSIS BY NATH DE LA MORA'
                    path='./nath-mora-blog'
                  />
                  <CardItem 
                    src='images/Meaningless_1080x1080.png'
                    text="MAKING CONNECTIONS: NICKO SENA'S MEANINGLESS CONNECTION"
                    path='./nicko-sena-blog'
                  />
              </ul>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogMiddle