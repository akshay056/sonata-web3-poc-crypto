import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './Card.css';
import logo1 from "./../Assets/metamask.png";
import logo2 from "./../Assets/ether.png";

function Card() {

  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, []);

  useEffect(() => { connectWallet(); }, [])

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };

  return (
    <>
      <div style={{ display: "flex" }} className="usercard">
        <div className="card text-dark bg-i mb-3" style={{ maxWidth: "25rem", }}>

          <div className="card-heade">

            <span className='nftsspan'>

              {logo1 && <img className="nftimage" src={logo1} />}
            </span>
          </div>
          <div className="card-footer bg-transparent border-success">

            <div><h4 className="card-text">WALLET ADDRESS:</h4></div><br />

            <h6 className="card-title">{accountAddress}</h6>

          </div>
        </div>
        <div className="card carduser2 card-user text-dar bg-info-2 mb-3" style={{ maxWidth: "22rem", marginLeft: "20px" }}>
          <div className="card-heade">
            <span className='nftsspan'>
              <i className='fa fa-users usersicon'></i>
              {logo2 && <img className="nftimage" src={logo2} />}
            </span>
          </div>
          <div class="card-footer bg-transparent border-success">
            <div><h4 className="card-text">WALLET BALANCE:</h4></div><br />
            <h6 className="card-title">{accountBalance} ETH</h6>
          </div>
        </div>
      </div>
    </>
  )
}
export default Card;