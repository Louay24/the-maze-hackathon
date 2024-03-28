import { SocialMediaServiceType } from 'src/constants/auth/SocialMediaServices.constant'

function SocialMediaBtn({...service}:SocialMediaServiceType) {
    const Icon = service?.Icon
      return (
    <div  className='social_media-btn'>
    <div  className='social_media-btn-container'>
        <Icon/>
        <p className='social_media-btn-container-text'>{service?.name}</p>
    </div>
    </div>
  ) 
}

export default SocialMediaBtn