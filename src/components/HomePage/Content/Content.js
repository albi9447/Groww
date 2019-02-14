import React from 'react';
import './Content.css';
import mutualfund from '../../../assets/images/mf-groww.png';
import directgroww from '../../../assets/images/direct-groww.png';
import freegroww from '../../../assets/images/free-groww.png';
import securitygroww from '../../../assets/images/security-groww.svg';
import amfilogo from '../../../assets/images/amfi-logo.png';
import sebilogo from '../../../assets/images/sebi-logo.png';
import bsestarlogo from '../../../assets/images/bse-star.png';
import et from '../../../assets/images/et.png';
import toi from '../../../assets/images/toi.png';
import bs from '../../../assets/images/bs.png';
import desktop from '../../../assets/images/desktop.png';
import comma from '../../../assets/images/comma.png';
import banner from '../../../assets/images/banner.png';
import playstore from '../../../assets/images/playstore.png';
import apple from '../../../assets/images/apple.png';
import ltmf from '../../../assets/images/lt-mf.png';
import kotakmf from '../../../assets/images/kotak-mf.png';
import sbimf from '../../../assets/images/sbi-mf.png';
import hdfcmf from '../../../assets/images/hdfc-bank-mf.png';
import abmf from '../../../assets/images/ab-mf.png';
import reliancemf from '../../../assets/images/reliance-mf.png';
import rightarrow from '../../../assets/images/right-arrow.png';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Content = () => {
      return (
        <div className="Content">
            <div className="getting-started">
                <div className="investment">
                    <h1 className="investment-heading">Investing made <span id="spin"></span></h1>
                    <div>
                        <h4 id="heroText1">India’s fastest growing investment platform</h4>
                        <h4 id="heroText2">with <strong>6 Lac+</strong> users</h4>
                    </div>
                    <div className="get-started">
                        <Button variant="contained" style={{background: 'rgb(0, 208, 156)', color: '#fff', fontWeight: 500, textTransform: 'capitalize', fontSize: 16}} className="get-started-btn">
                            Get Started
                        </Button>
                    </div>
                </div>
                <div>
                    <img src={mutualfund} alt="mutual-fund" className="mutualfund-img" />
                </div>
            </div>
            <div className="direct">
                <div className="direct-investment">
                    <img src={directgroww} alt="direct-groww" className="direct-groww-img" />
                </div>
                <div className="extra-return">
                    <h2 id="directText1">Earn upto 1.5% extra Returns</h2>
                    <h4 id="directText2">Major investment platforms provide regular mutual funds, but Groww <br />provides you <strong>direct mutual funds.</strong></h4>
                </div>
            </div>
            <div className="free">
                <div>
                    <h2 id="freeText1">Invest for FREE</h2>
                    <h4 id="freeText2">Groww lets you invest online - no transaction charges, no subscription<br />charges, no hidden charges!</h4>
                    <div className="get-started">
                        <Button variant="contained" style={{background: 'rgb(0, 208, 156)', color: '#fff', fontWeight: 500, textTransform: 'capitalize', fontSize: 16}} className="get-started-btn">
                            Explore Mutual Funds
                        </Button>
                    </div>
                </div>
                <div>
                    <img src={freegroww} alt="free-groww" className="free-groww-img" />
                </div>
            </div>
            <div className="security">
                <div>
                    <img src={securitygroww} alt="security-groww" className="security-groww-img" />
                </div>
                <div>
                    <h2 className="heading">Trusted by Lacs of Indians</h2>
                    <h4 className="para">We use cutting-edge technology to ensure that your personal<span><br/> information is fully encrypted and securely stored.</span></h4>
                    <h4 className="para">We are registered as a distributor with <strong>AMFI</strong>, as an investment advisor<span><br/> with <strong>SEBI</strong> and platform partners with <strong>BSE</strong></span>.</h4>
                    <div className="logos">
                        <div className="logo-1">
                            <img src={amfilogo} alt="amfi-logo" className="logo-img" />
                            <div className="imgText">ARN-111686</div>
                        </div>
                        <div className="logo">
                            <img src={sebilogo} alt="sebi-logo" className="logo-img" />
                            <div className="imgText">INA200008981</div>
                        </div>
                        <div className="logo">
                            <img src={bsestarlogo} alt="bse-star-logo" className="logo-img" />
                            <div className="imgText">Member Code 11724</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="press">
                <div>
                    <h2 className="heading">In The Press</h2>
                    <hr className="lineSegment"></hr>
                    <div className="press-card">
                    <Card style={{marginRight: 32}}>
                        <CardContent>
                            <div className="press-container">
                                <div className="press-logo">
                                    <img src={et} alt="et" />  
                                </div>
                                <div className="mainText">Economic Times</div>
                            </div>
                                <p className="press-logo-caption">Y Combinator-Backed Groww Raises<br/> $1.6 Mn Pre-Series A Funding</p>
                        </CardContent>
                    </Card>
                    <Card style={{marginRight: 32}}>
                        <CardContent>
                            <div className="press-container">
                                <div className="press-logo">
                                    <img src={toi} alt="toi" />
                                </div>
                                <div className="mainText">Times Of India</div>
                            </div>
                                <p className="press-logo-caption">People were shopping online but<br /> finance was still old world</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="press-container">
                                <div className="press-logo">
                                    <img src={bs} alt="bs" />
                                </div>
                                <div className="mainText">Business Standard</div>
                            </div>
                                <p className="press-logo-caption">Groww : Making Investing Easier for<br /> Beginners </p>
                        </CardContent>
                    </Card>
                    </div>
                    <div className="view-articles">
                        <a href="https://groww.in/p/press/">View all articles</a>
                        <a className="uline" href="https://groww.in/p/press/"><img src={rightarrow} alt="right-arrow"/></a>
                    </div>
                </div>
            </div>
            <div className="desktop">
                <div>
                    <h2 id="desktopText1">Access anywhere, anytime</h2>
                    <h4 id="desktopText2">Transact seamlessly, switching between our app and website.</h4>
                    <div className="get-started">
                        <Button variant="contained" style={{background: 'rgb(0, 208, 156)', color: '#fff', fontWeight: 500, textTransform: 'capitalize', fontSize: 16}} className="get-started-btn">
                            Sign Up
                        </Button>
                    </div>
                </div>
                <div>
                    <img src={desktop} alt="desktop" className="desktop-img" />
                </div>
            </div>
            <div className="users">
                <div>
                    <h2 className="heading">From Our Users</h2>
                    <hr className="lineSegment"></hr>
                    <div className="users-card">
                    <Card style={{marginRight: 32}}>
                        <CardContent>
                            <img src={comma} alt="comma" />
                            <div className="user-heading">Easy money management</div>
                            <div className="user-para">Loved Groww! I always needed something of this kind, which could help me manage my money easily.</div>
                            <div className="user">Richa Singh</div>
                            <div className="user-designation">SAP Labs</div>
                        </CardContent>
                    </Card>
                    <Card style={{marginRight: 32}}>
                        <CardContent>
                            <img src={comma} alt="comma" />
                            <div className="user-heading">Helps you get started</div>
                            <div className="user-para">I started investing because of Groww. All this while I was losing money in my bank account.</div>
                            <div className="user">Abhinav Sohni</div>
                            <div className="user-designation">Engineer at Tixdo</div>
                        </CardContent>
                    </Card>
                    <Card style={{marginRight: 32}}>
                        <CardContent>
                            <img src={comma} alt="comma" />
                            <div className="user-heading">Makes investing simple</div>
                            <div className="user-para">The experience with Groww has been lovely. Investing is now extremely simple and non-scary.</div>
                            <div className="user">Ravali</div>
                            <div className="user-designation">Fourth Frontier</div>
                        </CardContent>
                    </Card>
                    </div>
                    <div className="view-articles">
                        <a href="https://groww.in/p/testimonials/">View all</a>
                        <a className="uline" href="https://groww.in/p/testimonials/"><img src={rightarrow} alt="right-arrow"/></a>
                    </div>
                </div>
            </div>
            <div className="download">
                <div>
                    <h2 id="downloadText1">Download the App <br/>Now!</h2>
                    <h4 id="downloadText2">Available On</h4>
                    <div style={{marginTop: 30}}>
                        <a href="https://play.google.com/store/apps/details?id=com.nextbillion.groww" ><img className="store-download" src={playstore} alt="Download Android App Groww" />
                        </a>
                        <a href="https://itunes.apple.com/us/app/groww-mutual-funds-app/id1404871703?ls=1&mt=8"><img className="store-download" src={apple} alt="Download IOS App Groww" />
                        </a>
                    </div>
                </div>
                <div>
                    <img src={banner} alt="banner" className="banner-img" />
                </div>
            </div>
            <div className="partner">
                <div>
                    <h2 className="heading">35+ Fund Partners</h2>
                    <hr className="lineSegment"></hr>
                    <div className="partner-logo">
                        <a href="/mutual-funds/amc/lt-mutual-funds"><img className="partner-logo-img" src={ltmf} alt="ltmf" /></a>
                        <a href="/mutual-funds/amc/kotak-mutual-funds"><img className="partner-logo-img" src={kotakmf} alt="kotak-mf" /></a>
                        <a href="/mutual-funds/amc/sbi-mutual-funds"><img className="partner-logo-img" src={sbimf} alt="sbi-mf" /></a>
                        <a href="/mutual-funds/amc/hdfc-mutual-funds"><img className="partner-logo-img" src={hdfcmf} alt="hdfc-mf" /></a>
                        <a href="/mutual-funds/amc/aditya-birla-sunlife-mutual-funds"><img className="partner-logo-img" src={abmf} alt="ab-mf" /></a>
                        <a href="/mutual-funds/amc/reliance-mutual-funds"><img className="partner-logo-img" src={reliancemf} alt="reliance-mf" /></a>
                    </div>
                    <div className="view-articles">
                        <a className="uline" href="https://groww.in/p/press/">View all fund partners</a>
                        <a className="uline" href="https://groww.in/p/press/"><img src={rightarrow} alt="right-arrow"/></a>
                    </div>
                </div>
            </div>
        </div>
      )
    }

export default Content;