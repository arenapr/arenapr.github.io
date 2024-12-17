import React from 'react'
import '../App.css'
import './BlogMiddle.css'
import CardItem from './CardItem'

function BlogMiddle() {
  return (
    <div className='cards'>
        <div className='cards__container'>
        <div className='cards__wrapper'>
            {/* <ul className='cards__items'>
                <CardItem 
                  src='images/hex_by_lex.jpg'
                  text='HEX BY LEX'
                  label='Alexis Lopez'
                  path='/services'
                />
                <CardItem 
                  src='images/6par6noid6.jpeg'
                  text='6PAR6NOID6'
                  label='Sergio Estrada'
                  path='/services'
                />
            </ul> */}
            <ul className='cards__items'>
                <CardItem 
                  src='images/Janace.png'
                  text='JANACE WALKER IS FOLLOWING HER DREAMS'
                  path='./janace-walker'
                />
                <CardItem 
                  src='images/6par6noid6.jpeg'
                  text='SERGIO ESTRADA AND THE PURSUIT OF EXCELLENCE'
                  path='./sergio-estrada'
                />
                <CardItem 
                  src='images/hex_by_lex.jpg'
                  text="LET'S TALK ABOUT ALEXIS LOPEZ ECLECTIC STYLE"
                  path='./alexis-lopez-blog'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem 
                  src='images/karlene.png'
                  text='KARLENE ALAMO ACTIVISM THROUGH FASHION'
                  path='./karlene-alamo'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default BlogMiddle