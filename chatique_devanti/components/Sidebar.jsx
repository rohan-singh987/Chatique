import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Sidebar.module.css'


import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.jpeg'
import avatar3 from '../assets/avatar3.jpeg'
import avatar4 from '../assets/avatar4.png'
import RoomAvatar from './RoomAvatar'


const dummyChannels = [
    {
        roomId: 1,
        roomName: 'general',
        avatar: avatar1,
    },
    {
        roomId: 2,
        roomName: 'general2',
        avatar: avatar2,
    },
    {
        roomId: 3,
        roomName: 'general3',
        avatar: avatar3,
    },
    {
        roomId: 4,
        roomName: 'general4',
        avatar: avatar4,
    },
    {
        roomId: 1,
        roomName: 'general',
        avatar: avatar1,
    },
]


const Sidebar = () => {
    
    const router = useRouter()
    
    const [channels, setChannel] = useState(dummyChannels)
  
  
    return (
    <div className={styles.wrapper}>
        
        {channels.map((channel,index) => (
            <RoomAvatar 
                key = {index}
                id = {channel.roomId}
                avatar = {channel.avatar}
                name = {channel.roomName}
            />
        ) )}
    </div>
  )
}

export default Sidebar