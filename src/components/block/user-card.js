import React from 'react'
import "../../styles/user-card.scss"
import profile from '../../assets/svg/profile.svg'
import favorite from '../../assets/svg/favorite.svg'
import save from '../../assets/svg/save.svg'
import facebook from '../../assets/svg/facebook.svg'
import apple from '../../assets/svg/apple.svg'
import google from '../../assets/svg/google.svg'
import instagram from '../../assets/svg/instagram.svg'
import youtube from '../../assets/svg/youtube.svg'

const UserCard = () => {
    return (
        <div className='user-card'>
            <div className='user-card__body'>
                <div className='user-card__header'>
                    <img className='user-card__image' src='https://mighty.tools/mockmind-api/content/human/104.jpg' />
                    <span className='user-card__name'>
                        John Due
                    </span>
                    <span className='user-card__title'>
                        Fron End Developer
                    </span>
                </div>
                <div className='user-card__actions'>
                    <button className='user-card__view-profile'>
                        <img src={profile} />
                        View Profile
                    </button>
                    <button className='user-card__follow'>
                        <img src={favorite} />
                        Follow
                    </button>
                </div>
                <span className='user-card__summary'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </span>
            </div>
            <div className='user-card__footer'>
                <img src={facebook} />
                <img src={apple} />
                <img src={google} />
                <img src={instagram} />
                <img src={youtube} />
            </div>
        </div>
    )
}
export default UserCard