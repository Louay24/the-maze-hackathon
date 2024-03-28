import React from 'react'
import { SocialMediaService ,SocialMediaServiceType} from 'src/constants/auth/SocialMediaServices.constant'
import SocialMediaBtn from 'src/features/Auth/components/SocialMediaBtn/SocialMediaBtn'

function ScoialMediaServiceList() {
  return (
    <div className='social_media-service-list'>
        {SocialMediaService?.map((service:SocialMediaServiceType,index:number)=>{
                return <SocialMediaBtn key={index} {...service} />
        })}
    </div>
  )
}

export default ScoialMediaServiceList