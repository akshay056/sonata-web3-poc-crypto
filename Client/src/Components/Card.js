
//import logo from "./../Assets/Images/nftpic.png";
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './Card.css';

function Card() {
    // const handleClick = () => {
    //     window.open("https://opensea.io/account");
    // }
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
        <div className="App">
        <div>
        <button type="button" class="btn btn-secondary btn-sm" onClick={connectWallet}>
                Connect </button><br></br>
                </div>
                <br></br>
          </div>
            <div style={{ display: "flex" }} className="usercard">
                <div className="card text-dark bg-i mb-3" style={{ maxWidth: "25rem", }}>
                    <div className="card-heade">
                        <span className='usersspan'><i className='fa fa-users usersicon'></i></span>
                    </div>


                    <div className="card-footer bg-transparent border-success">
                        <div><h4 className="card-text">WALLET ADDRESS</h4></div><br />
                        <h6 className="card-title">{accountAddress}</h6>

                    </div>
                </div>


                <div className="card carduser2 card-user text-dar bg-info-2 mb-3" style={{ maxWidth: "22rem", marginLeft: "20px" }}>
                    <div className="card-heade">
                        <span className='nftsspan'>
                            {/* <i className='fa fa-users usersicon'></i> */}
                          {/* { logo && <img className="nftimage" src={logo} />}  */}
                        </span>
                    </div>
                    <div class="card-footer bg-transparent border-success">


                        <div><h4 className="card-text">WALLET BALANCE</h4></div><br />
                        <h6 className="card-title">{accountBalance} ETH</h6>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Card;