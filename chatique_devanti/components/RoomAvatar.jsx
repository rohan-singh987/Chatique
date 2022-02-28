
import Image  from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/RoomAvatar.module.css'

const RoomAvatar = ({ id,avatar,name }) => {

    const router = useRouter()

    const changeURL = () => {
        router.push(`?channel=${id}&name=${name}`)
    }


  return (
    <div className={styles.wrapper} onClick={changeURL} >
        <div className={styles.roomAvatar}>
        
            <Image 
                src={avatar}
                className={styles.roomAvatarImage}
                height={55}
                width={55}
                alt={name}
            />
            {console.log(name)}
            <h4> {name} </h4>
        </div>
    </div>
  )
}

export default RoomAvatar