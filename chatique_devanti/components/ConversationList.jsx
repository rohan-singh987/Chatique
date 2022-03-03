import { useEffect, useState } from 'react'
import styles from '../styles/ConversationList.module.css'
import Image from 'next/image'

import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.jpeg'
import avatar3 from '../assets/avatar3.jpeg'
import avatar4 from '../assets/avatar4.png'
import DmCard from './DmCard'

const dummyDms = [
  {
    id: 1,
    name: 'Rohan',
    avatar: avatar1,
  },
  {
    id: 2,
    name: 'Sunny',
    avatar: avatar2,
  },
  {
    id: 3,
    name: 'Ananya',
    avatar: avatar3,
  },
  {
    id: 4,
    name: 'Ashita',
    avatar: avatar4,
  },
  {
    id: 1,
    name: 'Harshita',
    avatar: avatar1,
  },
]


const ConversationList = () => {

  const [dms, setDms] = useState(dummyDms)


  return (
    <div className={styles.conversations}>
      <div className={styles.conversationListTop}>
        <input type="search" placeholder='search' />
      </div>
      <div className={styles.conversationsContainer}>
          {dms.map((dm, index) => (
              <DmCard 
              key={index}
              name={dm.name}
              id={dm.id}
              avatar={
                dm.avatar ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU'
              }
              status='online'
              />
          ))}
      </div>
    </div>
  )
}

export default ConversationList