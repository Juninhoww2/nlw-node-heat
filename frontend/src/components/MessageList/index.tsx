import styles from './styles.module.scss'

import LogoImg from '../../assets/logo.svg'

export function MessageList() {
    return (
      <div className={styles.messageListWrapper}>
          <img src={LogoImg} alt="DoWhile 2021" />

          <ul className={styles.messageList}>
            <li className={styles.message}>
                <p className={styles.messageContent}>Não vejo a hora de começar o DoWhile 2021</p>
                <div className={styles.messageUser}>
                    <div className={styles.userImage}>
                        <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
                    </div>
                    <span>Diego Fernandes</span>
                </div>
            </li>

            <li className={styles.message}>
                <p className={styles.messageContent}>Não vejo a hora de começar o DoWhile 2021</p>
                <div className={styles.messageUser}>
                    <div className={styles.userImage}>
                        <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
                    </div>
                    <span>Diego Fernandes</span>
                </div>
            </li>

            <li className={styles.message}>
                <p className={styles.messageContent}>Não vejo a hora de começar o DoWhile 2021</p>
                <div className={styles.messageUser}>
                    <div className={styles.userImage}>
                        <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
                    </div>
                    <span>Diego Fernandes</span>
                </div>
            </li>
          </ul>
      </div>
    )
}