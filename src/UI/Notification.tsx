import { Notification as NotificationType } from "../types/users";
import Image from '../assets/404.jpg'

export default function Notification(props: NotificationType) {

  return (
    <section className='flex max-h-[90%] gap-8 items-center justify-center border border-white rounded-lg overflow-hidden'>
      <div className='relative'>
        <img 
          src={Image} 
          alt='Lionel Richie'
          className='object-cover w-[650px]'
        />
      </div>
      <div className='absolute text-center'>
        <h1 className='text-[82px] text-slate-200'>{props.status}</h1>
        <h5 className='italic font-normal text-slate-200'>{props.message}</h5>
      </div>
    </section>
  )
}
