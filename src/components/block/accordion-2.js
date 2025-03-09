import React from 'react'
import '../../styles/accordion-2.scss'

const AccordionImages = () => {
    return (
        <ul className='accordion'>
            <li className='accordion__item'>
                <img src='http://mighty.tools/mockmind-api/content/cartoon/32.jpg' />
                <div className='accordion__content'>
                    <div>
                        <h1>Amy Cole</h1>
                        <p>Frontend developer</p>
                    </div>
                </div>
            </li>
            <li className='accordion__item'>
                <img src='https://mighty.tools/mockmind-api/content/cartoon/31.jpg' />
                <div className='accordion__content'>
                    <div>
                        <h1>Tom Reed</h1>
                        <p>Backend developer</p>
                    </div>
                </div>
            </li>
            <li className='accordion__item'>
                <img src='https://mighty.tools/mockmind-api/content/cartoon/30.jpg' />
                <div className='accordion__content'>
                    <div>
                        <h1>Lily Fox</h1>
                        <p>UX/UI Designer</p>
                    </div>
                </div>
            </li>
            <li className='accordion__item'>
                <img src='https://mighty.tools/mockmind-api/content/cartoon/29.jpg' />
                <div className='accordion__content'>
                    <div>
                        <h1>Mia Ford</h1>
                        <p>Frontend developer</p>
                    </div>
                </div>
            </li>
        </ul>
    )
}
export default AccordionImages