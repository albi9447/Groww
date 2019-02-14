import React from 'react';
import './ProductFooter.scss';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo-light-groww.svg';
import fbicon from '../../../assets/images/fb-icon.png';
import twittericon from '../../../assets/images/twitter-icon.png';
import mailicon from '../../../assets/images/mail-icon.png';
import appstorebadge from '../../../assets/images/app-store-badge.png';
import googleplaybadge from '../../../assets/images/google-play-badge.png';

const ProductFooter = () => {
      return (
        <div className="footer">
            <div className="footer-content">
                <div>
                    <Link to = "/" > 
                    <img src={logo} alt="groww" className="footer-logo" />
                    </Link>
                    <p class="line1">2nd Floor, Padmavati Complex,</p>
                    <p class="line2"> Koramangala, Bengaluru 560095</p>
                    <a href="https://groww.in/p/contact-us/"><p class="line2"><u>Contact Us</u></p></a>
                    <div className="contact-info">
                        <a href="https://www.facebook.com/growwapp"><img className="" src={fbicon} alt="Groww FB Page" /></a>
                        <a href="https://twitter.com/_groww"><img className="" src={twittericon} alt="Groww Twitter Page" /></a>
                        <a href="https://groww.in/build/client/images/mail_icon_groww.cfbd6119.png" ><img className="" src={mailicon} alt="Email Groww" /></a>
                    </div>
                </div>
                <div>
                    <div className="footer-nav-heading">EXPLORE</div>
                    <div className="explore-options">
                        <a className="footerLink" href="/explore">Top Portfolios</a><br />
                        <a className="footerLink" href="/mutual-funds">Mutual Funds Explorer</a><br />
                        <a className="footerLink" href="/mutual-funds/category">Mutual Funds Categories</a><br />
                        <a className="footerLink" href="https://groww.in/questions">Groww Q&amp;A</a><br />
                        <a className="footerLink" href="https://groww.in/elss">Save Tax</a><br />
                        <a className="footerLink" href="https://groww.in/direct/invite">Earn Money</a><br />
                    </div>
                </div>
                <div>
                <div className="footer-nav-heading">WHO WE ARE</div>
                    <div className="who-we-are">
                        <a className="footerLink" href="https://groww.in/about-us">About Us</a><br/>
                        <a className="footerLink" href="/mutual-funds/amc">Partners</a><br/>
                        <a className="footerLink" href="https://groww.in/p/testimonials/">Testimonials</a><br/>
                        <a className="footerLink" href="https://groww.in/blog/">Blog</a><br/>
                        <a className="footerLink" href="https://groww.in/p/press/">Media &amp; Press</a><br/>
                        <a className="footerLink" href="https://groww.in/faq/">Help and Support</a><br/>
                    </div>
                </div>
                <div>
                    <div className="footer-nav-heading">RESOURCES</div>
                    <div className="resources">
                        <a className="footerLink" href="https://groww.in/calculators/">Calculators</a><br/>
                        <a className="footerLink" href="https://groww.in/beginners-guide-mutual-funds/">Beginners Guide to Mutual Funds</a><br/>
                        <a className="footerLink" href="https://groww.in/p/switch/">Switch to Groww</a><br/>
                        <a className="footerLink" href="https://groww.in/crypto/">Crypto</a><br/>
                        <a className="footerLink" href="https://groww.in/p/sitemap/">Sitemap</a><br/>
                    </div>
                </div>
            </div>
            <div className="footerLine"></div>
            <div className="copy-right">
                <div className="next-billion" style={{color: '#fff'}}>ⓒ&nbsp;2018 Nextbillion Technology Pvt Ltd</div>
                <div className="privacy-policy">
                    <a href="https://groww.in/privacy-policy/" className="footerLink" style={{color: '#fff', maxWidth: 100}}>Privacy Policy</a>
                </div>
                <div className="terms-conditions">
                    <a href="https://groww.in/terms-and-conditions/" className="footerLink" style={{color: '#fff'}}>Terms and Conditions</a>
                </div>
                <div>
                    <a href="https://play.google.com/store/apps/details?id=com.nextbillion.groww" >
                        <img className="app-store-img" src={googleplaybadge} alt="Download Groww App on Play Store" />
                    </a>
                </div>
                <div>
                    <a href="https://itunes.apple.com/us/app/groww-mutual-funds-app/id1404871703?ls=1&amp;mt=8" >
                        <img className="app-store-img" src={appstorebadge} alt="Download Groww App on App Store" />
                    </a>
                </div>
            </div>
            <div className="footer-content-1">
                <div className="disclaimer">
                    <div style={{paddingTop: 60}}>
                        Mutual fund investments are subject to market risks. Please read the scheme information and other related documents carefully before investing.
                    </div>
                    <div style={{marginTop: 20}}>
                        Past performance is not indicative of future returns. Please consider your specific investment requirements, risk tolerance, investment goal, time frame, risk and reward balance<br/> and the cost associated with the investment before choosing a fund, or designing a portfolio that suits your needs.
                    </div>
                </div>
                <div className="footerLine1"></div>
                <div>
                    <div className="most-popular">MOST POPULAR ON GROWW</div>
                    <div className="popular">
                        POPULAR PORTFOLIOS:
                        <span><a className="mfStyle" href="/portfolios/better-than-fd-5465">&nbsp;BETTER THAN FD</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/portfolios/top-tax-saving-elss-mutual-funds-5472">TOP TAX SAVING ELSS MUTUAL FUNDS</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/portfolios/high-growth-sips-for-long-term-5468">HIGH GROWTH SIPS FOR LONG TERM</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/portfolios/high-risk-high-returns-5469">HIGH RISK HIGH RETURNS</a></span>
                    </div>
                    <div className="popular">
                        POPULAR MUTUAL FUNDS: &nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/mirae-asset-emerging-bluechip-fund-direct-growth">Mirae Asset Emerging Bluechip Fund</a></span>&nbsp;|&nbsp; 
                        <span><a className="mfStyle" href="/mutual-funds/reliance-small-cap-fund-direct-growth">Reliance Small Cap Fund</a></span>&nbsp;|&nbsp; 
                        <span><a className="mfStyle" href="/mutual-funds/mirae-asset-india-opportunities-fund-direct-growth">Mirae Asset India Opportunities Fund</a></span>&nbsp;|&nbsp; 
                        <span><a className="mfStyle" href="/mutual-funds/icici-prudential-flexible-i-come-plan-direct-growth">ICICI Prudential Flexible Income</a></span>&nbsp;|&nbsp; 
                        <span><a className="mfStyle" href="/mutual-funds/dsp-blackrock-tax-saver-fund-direct-growth">DSP BlackRock Tax Saver Fund</a></span>&nbsp;|&nbsp; 
                        <span><a className="mfStyle" href="/mutual-funds/franklin-india-low-duration-fund-direct-growth">Franklin India Low Duration Fund</a></span>&nbsp;|&nbsp; 
                        <span><a className="mfStyle" href="/mutual-funds/reliance-tax-saver-(elss)-fund-direct-growth">Reliance Tax Saver (ELSS) Fund</a></span>&nbsp;|&nbsp; 
                        <span><a className="mfStyle" href="/mutual-funds/kotak-emerging-equity-scheme-direct-growth">Kotak Emerging Equity Scheme</a></span>&nbsp;|&nbsp; 
                        <span><a className="mfStyle" href="/mutual-funds/kotak-select-focus-fund-direct-growth">Kotak Select Focus Fund</a></span>&nbsp;|&nbsp; 
                        <span><a className="mfStyle" href="/mutual-funds/l-t-india-value-fund-direct-growth">L&amp;T India Value Fund</a></span>
                    </div>
                    <div className="popular">
                        MUTUAL FUNDS COMPANIES: 
                        <span><a className="mfStyle" href="/mutual-funds/amc/icici-prudential-mutual-funds">ICICI PRUDENTIAL</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/hdfc-mutual-funds">HDFC </a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/reliance-mutual-funds">RELIANCE</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/aditya-birla-sunlife-mutual-funds">ADITYA BIRLA SUN LIFE</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/sbi-mutual-funds">SBI</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/uti-mutual-funds">UTI</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/franklin-templeton-mutual-funds">FRANKLIN TEMPLETON</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/kotak-mutual-funds">KOTAK MAHINDRA</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/idfc-mutual-funds">IDFC</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/dsp-blackrock-mutual-funds">DSP BLACKROCK</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/axis-mutual-funds">AXIS</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/tata-mutual-funds">TATA</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/lt-mutual-funds">L&amp;T</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/sundaram-mutual-funds">SUNDARAM</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/dhfl-pramerica-mutual-funds">DHFL PRAMERICA</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/invesco-mutual-funds">INVESCO</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/lic-mutual-funds">LIC</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/jm-financial-mutual-funds">JM FINANCIAL</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/baroda-pioneer-mutual-funds">BARODA PIONEER</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/canara-robeco-mutual-funds">CANARA ROBECO</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/hsbc-mutual-funds">HSBC</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/idbi-mutual-funds">IDBI</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/indiabulls-mutual-funds">INDIABULLS</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/motilal-oswal-mutual-funds">MOTILAL OSWAL</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/bnp-paribas-mutual-funds">BNP PARIBAS</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/mirae-asset-mutual-funds">MIRAE ASSET</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/principal-mutual-funds">PRINCIPAL</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/boi-axa-mutual-funds">BOI AXA</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/union-mutual-funds">UNION KBC</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/taurus-mutual-funds">TAURUS</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/edelweiss-mutual-funds">EDELWEISS</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/essel-mutual-funds">ESSEL</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/mahindra-mutual-funds">MAHINDRA</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/quantum-mutual-funds">QUANTUM</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/ppfas-mutual-funds">PPFAS</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/iifl-mutual-funds">IIFL</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="/mutual-funds/amc/escorts-mutual-funds">ESCORTS</a></span> &nbsp;|&nbsp;
                    </div>
                    <div className="popular">
                        TOOLS: 
                        <span><a className="mfStyle" href="https://groww.in/sip-calculator/">SIP CALCULATOR</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="https://groww.in/calculators/mutual-fund-returns-calculator/">MUTUAL FUND RETURNS CALCULATOR</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="https://groww.in/calculators/sukanya-samriddhi-yojana-calculator/">SUKANYA SAMRIDDHI YOJANA CALCULATOR</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="https://groww.in/calculators/swp-calculator/">SWP CALCULATOR</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="https://groww.in/calculators/">CALCULATORS</a></span> &nbsp;|&nbsp;
                        <span><a className="mfStyle" href="https://groww.in/ebooks/">E - BOOKS</a></span>
                    </div>
                </div>
            </div>
        </div> 
      )
    }

export default ProductFooter;