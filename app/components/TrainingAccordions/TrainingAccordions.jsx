'use client'

import { useState } from 'react'

import TrainingAccordion from '../TrainingAccordion/TrainingAccordion'

export default function TrainingAccordions(){
    const [active, setActive] = useState('')

    return(
        <>
            <TrainingAccordion active={active} setActive={setActive} title={'Individual Program'} text={'Our trainers will conduct a personal meeting with you to determine your goals and create a personalized training program. We will consider your preferences and fitness level for maximum effect.'}/>
            <TrainingAccordion active={active} setActive={setActive} title={'Professional Trainers'} text={'Our team of trainers are professionals with high qualifications and work experience. They will guide you every step of the way, helping you perform exercises correctly and ensuring safety during workouts.'}/>
            <TrainingAccordion active={active} setActive={setActive} title={'Motivation and Support'} text={'At Fusion, we prioritize your motivation and support. Our trainers will always inspire you, encourage you to push your limits, and help you maintain faith in your abilities. We foster team spirit and support your success.'}/>
        </>
    )
}