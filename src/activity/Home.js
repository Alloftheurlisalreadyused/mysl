import React, { Component } from 'react';
import NavButton from '../NavButton';

class Home extends Component {
    render() {
        return (
            <div >
                <div className="Menu">
                    <a href="Home.html"><img src="mysl.png" alt="my_sl.png" width="60px" height="80px" /><br /></a>
                    <NavButton className="tablinks" title="Home" route="/" />
                    <NavButton className="tablinks" title="My Package" route="/package" />
                    <NavButton className="tablinks" title="Promo" route="/promo" />
                    <NavButton className="tablinks" title="Feedback" route="/feedback" />
                    <NavButton className="login_button" title="Logout" route="/Login" />
                    <br />
                </div>
                <div className="profile">
                    <img src="profile.png" alt="profile.png" />
                    <p style={{ fontSize: '18pt', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>Welcome, </p><div id="tampil" /><p /><br />
                    <center>Your Balance is Rp.134.500,-</center><br /><center><b>You're using Hot Sale 1.5GB Package with remaining quota of 570mb</b></center></div><br />
                <center><p style={{ color: 'white' }}>Recommended Package :</p></center><br />
                <div className="package1">
                    <b>Hot Sale 3GB</b><br />Price: Rp20.000,-<br />
                    Main Quota 24 Hours: 2GB<br />
                    YouTube/Netflix 24 Hours Quota: 1GB<br />
                    The period of validity: 5 Days<br />
                    Automatic renewal: No<br />
                    <center><button style={{ width: '70px', padding: '5px' }} type="button">Buy</button></center>
                </div>
                <div className="package1">
                    <b>Keep On 5GB</b><br />Price: Rp30.000,-<br />
                    Main Quota 24 Hours: 5GB<br />
                    Call Quota for All Operators: 20 Minutes<br />
                    SMS Quota for All Operators: 20 SMS<br />
                    Trixogo Subscription Bonuses &amp; BEATS<br />
                    The period of validity: 7 Days<br />
                    <center><button style={{ width: '70px', padding: '5px' }} type="button">Buy</button></center>
                </div>
                <div className="package1">
                    <b>GameMax Plus TriXogo 10GB</b><br />Price: Rp50.000,-<br />
                    Main Quota 24 Hours: 2GB<br />
                    4G Quota 24 Hours: 8GB<br />
                    Trixogo Subscription Bonuses: 30 Days<br />
                    The period of validity: 30 Days<br />
                    <center><button style={{ width: '70px', padding: '5px' }} type="button">Buy</button></center>
                </div>
                <div className="package1">
                    <b>24 Hours Unlimited</b><br />Price: Rp20.000,-<br />
                    Quota : 24 Hours Unlimited in all Networks <br />
                    The period of validity: 24 Hours<br />
                    <center><button style={{ width: '70px', padding: '5px' }} type="button">Buy</button></center>
                </div>
                <div className="package1">
                    <b>8GB Combo</b><br />Price: Rp100.000,-<br />
                    Main Quota 24 Hours: 8GB<br />
                    Call Quota for All Operators: 80 Minutes<br />
                    The period of validity: 30 Days<br />
                    <center><button style={{ width: '70px', padding: '5px' }} type="button">Buy</button></center>
                </div>
                <div className="package2">
                    <b>4G 30GB Monthly</b><br />Price: Rp100.000,-<br />
                    Main Quota 24 Hours: 8GB<br />
                    4G Quota 24 Hours: 22GB<br />
                    The period of validity: 7 Days<br />
                    <center><button style={{ width: '70px', padding: '5px' }} type="button">Buy</button></center>
                </div>
                <br />
                <footer>
                    <div className="footer">
                        <p>Copyright © 2019 SL Asiata. All Rights Reserved. </p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Home;