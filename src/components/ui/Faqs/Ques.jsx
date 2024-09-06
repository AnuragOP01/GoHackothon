import React from 'react'
import Faqs from './Faqs'
const Ques = () => {
  return (
    <>
    <div className=' footer grid gap-y-4 bg-transparent mt-10'>
      <Faqs que="How can I register for a webinar or training workshop?" ans="Register on our website following the event page instructions for easy sign-up." />
      <Faqs que=" What topics are covered in the webinars and training workshops?" ans="Our events cover a variety of topics, including industry trends, personal development, and specialized skills training." />
      <Faqs que=" Are the webinars and training workshops free to attend?" ans="Most events are free, although some may require a registration fee for specialized workshops or premium content."/>
      <Faqs que=" How do I access the webinar or training workshop on the day of the event?" ans="Simply log in to your account at the scheduled time to access the live session." />
      <Faqs que=" Will recordings be available for the webinars and training workshops?" ans="Yes, recordings are typically provided after the event for participants to review at their convenience."/>       
    </div>
    </>
  )
}

export default Ques
