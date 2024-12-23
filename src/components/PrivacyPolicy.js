import {React, useEffect} from 'react';
import {NavLink } from 'react-router-dom';

const PrivacyPolicy = () => {
  
    useEffect(()=>{
        window.scrollTo(0, 0);
        document.title="Privacy & Policy"
    },[]);

  return (
    <section className="py-16 bg-primary-light" id="privacyPolicy">
        <div>
            <div className="max-w-2xl mt-20 text-white ml-11 mr-11">
            <h3 className='font-Oswald mb-4 font-bold text-3xl'>Privacy Policy</h3>
            <p className='font-Montserrat mb-8'>Last Updated [28<sup>th</sup> October 2024]</p>
            <p className='font-Montserrat'>Design on a Dime private limited is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, [www.doad.live]. Please read this policy carefully to understand our views and practices regarding your personal data.</p>
        </div>

        <div className="mt-20 card text-white ml-11">
            <h3 className='font-Oswald mb-4 font-bold text-3xl'>Information We Collect & Use</h3>
            <ul className='list-disc font-Montserrat'>
                <li className='mb-8'> 
                    <h4 className='font-bold'>Usage Data</h4>
                    <p>Information about your interactions with our website, including your IP address, browser type, pages visited, time spent on pages, and other analytical data.</p>
                </li>
                <li className='mb-8'> 
                    <h4 className='font-bold'>Cookies</h4> 
                    <p>We use cookies to improve your experience on our website. Cookies are small files stored on your device by your web browser. You can control the use of cookies through your browser settings. Note that disabling cookies may affect the functionality of our website</p>
                </li>
                <li className='mb-8'> 
                    <h4 className='font-bold'>Third-Party Links</h4> 
                    <p>Our website may contain links to third-party websites. This Privacy Policy does not apply to those websites, and we are not responsible for their privacy practices. We encourage you to read the privacy policies of any third-party websites you visit.</p>
                </li>
                <li className='mb-8'> 
                    <h4 className='font-bold'>Security</h4> 
                    <p>We use commercially reasonable security measures to protect your information. However, no data transmission over the Internet or storage system can be guaranteed to be 100% secure. Therefore, while we strive to protect your information, we cannot guarantee its absolute security.</p>
                </li>
                <li className='mb-8'> 
                    <h4 className='font-bold'>Changes to This Privacy Policy</h4> 
                    <p>We may update our Privacy Policy from time to time. When we do, we will revise the “Last Updated” date at the top of this page. Your continued use of our website after any changes indicates your acceptance of the updated Privacy Policy.</p>
                </li>
                <li className='mb-8'> 
                    <h4 className='font-bold'>Contact Us</h4> 
                    <p>If you have any query regarding this privacy policy please <NavLink to="/contact" className={"underline text-orange-400"}> contact us</NavLink></p>
                </li>
            </ul>
        </div>
        </div>
    </section>
  );
};

export default PrivacyPolicy;
