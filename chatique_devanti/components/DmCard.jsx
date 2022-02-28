import Image from 'next/image'
import React from 'react'
import styles from '../styles/DmCard.module.css'

const DmCard = ({ name,status,id,avatar }) => {

    const changeURL = () => {}

  return (
    <div className={styles.dmCard} onClick={changeURL} >

        <div className={styles.dmAvatarContainer}>
        <Image
                src={avatar}
                className={styles.dmAvatar}
                height={48}
                width={48}
                alt={name}
            />
          <div className={styles.dmCardStatus} id = {status} />
        </div>
        <p className={styles.dmCardName}> {name} </p>
    </div>
  )
}

export default DmCard