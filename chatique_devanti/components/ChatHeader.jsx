import React from 'react'
import styles from '../styles/ChatHeader.module.css'
import personPlus from '../assets/icons/person-plus.svg'
import video from '../assets/icons/video.svg'
import inbox from '../assets/icons/inbox.svg'
import phone from '../assets/icons/phone.svg'
import help from '../assets/icons/help.svg'
import pin from '../assets/icons/pin.svg'
import at from '../assets/icons/at.svg'
import Image from 'next/image'
import ethereum from '../assets/ethereum.png'

const ChatHeader = () => {
  return (
    <div className={styles.chatHeader}>
      <div className={styles.roomNameContainer}>
        <Image 
          height={20}
          width={20}
          src={at}
          className={styles.svg}
        />
        <h3 className={styles.title}>Name</h3>
        <div className={styles.chatHeaderStatus} id='online' />
      </div>
      <div className={styles.connectWallet} onClick={() => connectWallet()} >Connect Wallet  </div>

      <div className={styles.headerIconsContainer}>
        <div className={styles.headerItem}>
          <Image 
            height={30}
            width={30}
            src={phone}
            className={styles.iconss}
          />
        </div>
        <div className={styles.headerItem}>
          <Image 
            height={30}
            width={30}
            src={video}
            className={styles.iconss}
          />
        </div>
      </div>
    </div>
  )
}

export default ChatHeader