//import logo from "./../Assets/Images/nftpic.png";
import './Card.css';
function Card() {
    // const handleClick = () => {
    //     window.open("https://opensea.io/account");
    // }
    return (
        <>
            <div style={{ display: "flex" }} className="usercard">
                <div className="card text-dark bg-i mb-3" style={{ maxWidth: "18rem", }}>
                    <div className="card-heade">
                        <span className='usersspan'><i className='fa fa-users usersicon'></i></span>
                    </div>


                    <div className="card-footer bg-transparent border-success">
                        <p className="card-text">WALLET ADDRESS</p>
                        <h5 className="card-title">2549</h5>

                    </div>
                </div>


                <div className="card carduser2 card-user text-dar bg-info-2 mb-3" style={{ maxWidth: "18rem", marginLeft: "20px" }}>
                    <div className="card-heade">
                        <span className='nftsspan'>
                            {/* <i className='fa fa-users usersicon'></i> */}
                          {/* { logo && <img className="nftimage" src={logo} />}  */}
                        </span>
                    </div>
                    <div class="card-footer bg-transparent border-success">


                        <p className="card-text">WALLET BALANCE</p>
                        <h5 className="card-title">2549</h5>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Card;