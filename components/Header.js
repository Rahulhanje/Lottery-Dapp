import { useAppContext } from '../context/context'
import style from '../styles/Header.module.css'
import UserCard from './UserCard'
import WalletConnectBtn from './WalletConnectBtn'

const Header = () => {
  const { address, connectWallet, disconnectWallet } = useAppContext()

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Lottery DAPP 💰</div>
      {!address ? (
        <WalletConnectBtn connectWallet={connectWallet} />
      ) : (
        <div className={style.userActions}>
          <UserCard address={address} />
          <button className={style.disconnectBtn} onClick={disconnectWallet}>
            Disconnect
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
