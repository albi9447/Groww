import React from 'react';
import './ProductContent.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import zoomgroww from '../../../assets/images/zoom-groww.png';
import Button from '@material-ui/core/Button';
import goodPortfolio from '../../../assets/images/good-portfolio-groww.png';
import gold from '../../../assets/images/gold.png';
import computer from '../../../assets/images/computer.jpg';

const ProductContent = () => {
      return (
        <div className="Content">
            <div>
                <h1 className="discover-main-popular">Most Invested Portfolios</h1>
                    <div className="discover-card">
                        <Card style={{marginRight: 32}}>
                            <CardContent>
                                <a href="https://groww.in/portfolios/awesome-vacation-in-3-years-9196">
                                    <div className="discover-card-heading">Awesome Vacation in 3<br/> years</div>
                                    <div className="discover-para">Created by Harsh Jain <br/>4 Oct 2018</div>
                                    <hr/>
                                    <div className="rating-risk">
                                        <div className="rating">Rating</div>
                                        <div className="risk">Risk</div>
                                    </div>
                                    <div className="rating-risk-desc">
                                        <div className="rating">4</div>
                                        <div className="high-risk">
                                        Moderately High<br/>
                                        <div style={{paddingRight: 20, paddingTop: 2}}>
                                            <div style={{padding: 0}}>
                                                <div className="high-indicator">
                                                    <div className="high-indicator-right">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="sip-returns">
                                        <div className="returns">Returns 1Y<br/>
                                        5.85%
                                        </div>
                                        <div className="min-sip">Min SIP Amount<br />₹3000</div>
                                    </div>
                                </a>
                            </CardContent>
                        </Card>
                        <Card style={{marginRight: 32}}>
                            <CardContent>
                                <a href="https://groww.in/portfolios/early-retirement-aspiration-portfolio">
                                    <div className="discover-card-heading">Early Retirement<br/> Aspiration Portfolio</div>
                                    <div className="discover-para">Created by Harsh Jain <br/>4 Oct 2018</div>
                                    <hr/>
                                    <div className="rating-risk">
                                        <div className="rating">Rating</div>
                                        <div className="risk">Risk</div>
                                    </div>
                                    <div className="rating-risk-desc">
                                        <div className="rating">4</div>
                                        <div className="high-risk">
                                        Moderately High<br/>
                                        <div style={{paddingRight: 20, paddingTop: 2}}>
                                            <div style={{padding: 0}}>
                                                <div className="high-indicator">
                                                    <div className="high-indicator-right">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="sip-returns">
                                        <div className="returns">Returns 1Y<br/>
                                        -4.05%
                                        </div>
                                        <div className="min-sip">Min SIP Amount<br />₹4000</div>
                                    </div>
                                </a>
                            </CardContent>
                        </Card>
                        <Card style={{marginRight: 32}}>
                            <CardContent>
                                <a href="https://groww.in/portfolios/better-than-fd-for-esop-and-bonus-money">
                                    <div className="discover-card-heading">Better Than FD for<br/> Esop and Bonus Money</div>
                                    <div className="discover-para">Created by Harsh Jain <br/>4 Oct 2018</div>
                                    <hr/>
                                    <div className="rating-risk">
                                        <div className="rating">Rating</div>
                                        <div className="risk">Risk</div>
                                    </div>
                                    <div className="rating-risk-desc">
                                        <div className="rating">5</div>
                                        <div className="high-risk">
                                        Moderately Low<br/>
                                        <div style={{paddingRight: 20, paddingTop: 2}}>
                                            <div style={{padding: 0}}>
                                                <div className="high-indicator">
                                                    <div className="high-indicator-right">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="sip-returns">
                                        <div className="returns">Returns 1Y<br/>
                                        7.9%
                                        </div>
                                        <div className="min-sip">Min SIP Amount<br />₹3000</div>
                                    </div>
                                </a>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <a href="https://groww.in/portfolios/top-tax-saving-elss-mutual-funds-10047">
                                    <div className="discover-card-heading">Top Tax Saving ELSS<br/> Mutual Funds</div>
                                    <div className="discover-para">Created by Ishan Bansal <br/>20 Nov 2018</div>
                                    <hr/>
                                    <div className="rating-risk">
                                        <div className="rating">Rating</div>
                                        <div className="risk">Risk</div>
                                    </div>
                                    <div className="rating-risk-desc">
                                        <div className="rating">5</div>
                                        <div className="high-risk">
                                        Moderately High<br/>
                                        <div style={{paddingRight: 20, paddingTop: 2}}>
                                            <div style={{padding: 0}}>
                                                <div className="high-indicator">
                                                    <div className="high-indicator-right">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="sip-returns">
                                        <div className="returns">Returns 1Y<br/>
                                        1.93%
                                        </div>
                                        <div className="min-sip">Min SIP Amount<br />₹1000</div>
                                    </div>
                                </a>
                            </CardContent>
                        </Card>
                    </div>
                <div>
                    <h1 className="popular-funds">Popular Mutual Funds</h1>
                    <div className="discover-card">
                        <Card style={{marginRight: 32}}>
                            <CardContent>
                                <a href="https://groww.in/mutual-funds/sbi-bluechip-fund-direct-growth">
                                    <div className="discover-card-heading">
                                        SBI Bluechip Fund-<br/> Direct - Growth
                                    </div>
                                    <div className="discover-para">Equity · Large Cap <br/>1 Jan 2013</div>
                                    <hr/>
                                    <div className="rating-risk">
                                        <div className="rating">Rating</div>
                                        <div className="risk">Risk</div>
                                    </div>
                                    <div className="rating-risk-desc">
                                        <div className="rating">4</div>
                                        <div className="high-risk">
                                        Moderately High<br/>
                                        <div style={{paddingRight: 20, paddingTop: 2}}>
                                            <div style={{padding: 0}}>
                                                <div className="high-indicator">
                                                    <div className="high-indicator-right">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="sip-returns">
                                        <div className="returns">Returns 1Y<br/>
                                        -1.30% 
                                        </div>
                                        <div className="min-sip">Min SIP Amount<br />₹500</div>
                                    </div>
                                </a>
                            </CardContent>
                        </Card>
                        <Card style={{marginRight: 32}}>
                            <CardContent>
                                <a href="https://groww.in/mutual-funds/birla-sun-life-tax-relief-96-direct-growth">
                                    <div className="discover-card-heading">Aditya Birla Sun Life<br/> Tax Relief 96 - Direct -</div>
                                    <div className="discover-para">Equity · ELSS <br/>1 Jan 2013</div>
                                    <hr/>
                                    <div className="rating-risk">
                                        <div className="rating">Rating</div>
                                        <div className="risk">Risk</div>
                                    </div>
                                    <div className="rating-risk-desc">
                                        <div className="rating">4</div>
                                        <div className="high-risk">
                                        Moderately High<br/>
                                        <div style={{paddingRight: 20, paddingTop: 2}}>
                                            <div style={{padding: 0}}>
                                                <div className="high-indicator">
                                                    <div className="high-indicator-right">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="sip-returns">
                                        <div className="returns">Returns 1Y<br/>
                                        0.19%
                                        </div>
                                        <div className="min-sip">Min SIP Amount<br />₹500</div>
                                    </div>
                                </a>
                            </CardContent>
                        </Card>
                        <Card style={{marginRight: 32}}>
                            <CardContent>
                                <a href="https://groww.in/mutual-funds/motilal-oswal-most-focused-multicap-35-fund-direct-growth">
                                    <div className="discover-card-heading">Motilal Oswal<br/> Multicap 35 Fund -</div>
                                    <div className="discover-para">Equity · Multi Cap <br/>28 Apr 2014</div>
                                    <hr/>
                                    <div className="rating-risk">
                                        <div className="rating">Rating</div>
                                        <div className="risk">Risk</div>
                                    </div>
                                    <div className="rating-risk-desc">
                                        <div className="rating">5</div>
                                        <div className="high-risk">
                                        Moderately High<br/>
                                        <div style={{paddingRight: 20, paddingTop: 2}}>
                                            <div style={{padding: 0}}>
                                                <div className="high-indicator">
                                                    <div className="high-indicator-right">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="sip-returns">
                                        <div className="returns">Returns 1Y<br/>
                                        -4.40%
                                        </div>
                                        <div className="min-sip">Min SIP Amount<br />₹500</div>
                                    </div>
                                </a>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <a href="https://groww.in/mutual-funds/reliance-small-cap-fund-direct-growth">
                                    <div className="discover-card-heading">Reliance Small Cap<br /> Fund - Direct - Growth</div>
                                    <div className="discover-para">Equity · Small Cap <br/>1 Jan 2013</div>
                                    <hr/>
                                    <div className="rating-risk">
                                        <div className="rating">Rating</div>
                                        <div className="risk">Risk</div>
                                    </div>
                                    <div className="rating-risk-desc">
                                        <div className="rating">5</div>
                                        <div className="high-risk">
                                        Moderately High<br/>
                                        <div style={{paddingRight: 20, paddingTop: 2}}>
                                            <div style={{padding: 0}}>
                                                <div className="high-indicator">
                                                    <div className="high-indicator-right">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="sip-returns">
                                        <div className="returns">Returns 1Y<br/>
                                        -10.85%
                                        </div>
                                        <div className="min-sip">Min SIP Amount<br />₹100</div>
                                    </div>
                                </a>
                            </CardContent>
                        </Card>
                    </div> 
                </div>
                <div className="create-portfolio">
                    <Paper style={{backgroundColor: '#2D204E', minHeight: '130px',display:'flex', alignItems: 'center'}} elevation={1}>
                        <img src={zoomgroww} className="zoom-groww-img" alt="groww"/>
                        <Typography variant="h5" component="h3" style={{color:'#fff', marginLeft: 28}}>
                        Didn’t find the portfolio<br/> you’re looking for?
                        </Typography>
                        <div style={{marginLeft: '42%'}}>
                            <Button variant="contained" style={{background: 'rgb(0, 208, 156)', color: '#fff', fontWeight: 500, textTransform: 'capitalize', fontSize: 16,  width: 235, height: 45}} className="create-portfolio-btn">
                                Create Your own Portfolio
                            </Button>
                        </div>
                    </Paper>
                </div>
                <div>
                    <h1 className="popular-funds">Your Questions</h1>
                    <div className="discover-card">
                        <Card style={{marginRight: 32}}>
                            <CardContent>
                                <a href="https://groww.in/questions/how-to-invest-in-mutual-funds">
                                    <div className="discover-card-heading">
                                    How to invest in<br /> mutual funds<br/> through Groww?
                                    </div>
                                    <div className="discover-para">
                                        Investing in mutual funds is very easy thanks to the availability of online options like Groww. Log in to your Groww account.Sign up if you
                                        <span> ...<span><a href="https://groww.in/questions/how-to-invest-in-mutual-funds">Read More</a></span></span>
                                    </div>
                                </a>
                            </CardContent>
                        </Card>
                        <Card style={{marginRight: 32}}>
                            <CardContent>
                                <a href="https://groww.in/questions/how-can-i-sell-my-mutual-fund-investments">
                                    <div className="discover-card-heading">
                                        How can I sell my<br/> mutual fund<br/> investments?
                                    </div>
                                    <div className="discover-para">Selling your mutual funds is very easy. This video explains how you can sell your funds. You need to click this to redeem your investments
                                        <span> ...<span><a href="https://groww.in/questions/how-to-invest-in-mutual-funds">Read More</a></span></span>
                                    </div>
                                </a>
                            </CardContent>
                        </Card>
                        <Card style={{marginRight: 32}}>
                            <CardContent>
                                <a href="https://groww.in/questions/how-can-i-save-tax-through-mutual-funds">
                                    <div className="discover-card-heading">How can I save<br/> tax through<br/> Mutual Funds?</div>
                                    <div className="discover-para">ELSS (Equity Linked Savings Scheme) funds allow you break tax benefits of up to ₹1.50 lakh under section 80C. How much tax
                                        <span> ...<span><a href="https://groww.in/questions/how-to-invest-in-mutual-funds">Read More</a></span></span>
                                    </div>
                                </a>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <a href="https://groww.in/questions/what-is-difference-between-lumpsum-investment-and-sip">
                                    <div className="discover-card-heading">What is difference<br/> between SIP and<br/> Lumpsum?</div>
                                    <div className="discover-para">Under SIP you invest regularly, usually monthly towards your investments. Example: investing Rs 5000 per month in kotak
                                        <span> ...<span><a href="https://groww.in/questions/how-to-invest-in-mutual-funds">Read More</a></span></span>
                                    </div>
                                </a>
                            </CardContent>
                        </Card>
                    </div> 
                </div>
                <div>
                    <h1 className="popular-funds">Investing Articles</h1>
                    <div className="discover-card">
                        <Card style={{marginRight: 90}}>
                            <CardContent>
                            <a href="https://groww.in/blog/is-gold-the-millennial-way-of-investing/">
                                <img src={gold} className="investing-img" alt={gold}/>
                                <div className="discover-card-heading">
                                    Is Gold the<br /> Millennial Way of Investing?
                                </div>
                                <div className="discover-para">2 days ago
                                </div>
                            </a>
                            </CardContent>
                        </Card>
                        <Card style={{marginRight: 90}}>
                            <CardContent>
                            <a href="https://groww.in/blog/is-gold-the-millennial-way-of-investing/">
                            <img src={gold} className="investing-img" alt={gold} />
                                <div className="discover-card-heading">
                                    Is Gold the<br /> Millennial Way of Investing?
                                </div>
                                <div className="discover-para">2 days ago
                                </div>
                            </a>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                            <a href="https://groww.in/blog/gst-calendar-2018/">
                            <img src={computer} className="investing-img" alt={computer} />
                                <div className="discover-card-heading">
                                    Your GST<br /> Calendar – 2018
                                </div>
                                <div className="discover-para">3 days ago
                                </div>
                            </a>
                            </CardContent>
                        </Card>
                    </div> 
                </div>
                <div className="explore">
                    <div>
                        <h2 id="explore-mf-heading">Explore all Mutual Funds on<br/> Groww</h2>
                        <div style={{marginTop: 30}}>
                        <div>
                            <Button variant="contained" style={{background: 'rgb(0, 208, 156)', color: '#fff', fontWeight: 500, textTransform: 'capitalize', fontSize: 16,  width: 235, height: 45}} className="explore-mf-btn">
                                Explore Mutual Funds
                            </Button>
                        </div>
                        </div>
                    </div>
                    <div>
                        <img src={goodPortfolio} alt="good-portfolio" className="good-portfolio-img" />
                    </div>
                </div>
            </div>
        </div>
      )
    }

export default ProductContent;