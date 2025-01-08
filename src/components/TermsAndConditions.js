import {React, useEffect} from 'react';
import {NavLink } from 'react-router-dom';

const TermsAndConditions = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
        document.title="Terms of Use"
    },[]);
  return (
    <section className="py-16 bg-primary-light" id="termsOfUse">
        <div>
            <div className="max-w-2xl mt-20 text-white ml-11 mr-11">
                <h3 className='font-Oswald mb-4 font-bold text-3xl'>Terms of Use</h3>
                <p className='font-Montserrat mb-8'>Last Updated [28<sup>th</sup> October 2024]</p>
                <p className='font-Montserrat'>
                    Welcome to Design on a Dime Pvt. Ltd. These Terms and Conditions outline the rules and 
                    regulations for using our services, including viewing, interacting, and engaging with our content across various 
                    media channels. By accessing or using our services, you agree to comply with these terms.
                </p>
            </div>
            <div className="mt-20 card text-white ml-11 mr-11">
                <ul className='list-disc font-Montserrat'>
                    <li className='mb-8'> 
                        <h4 className='font-bold'>Acceptance of Terms</h4>
                        <p>
                            By accessing our broadcasts, websites, or any content produced or licensed by Design on a Dime Pvt. Ltd., 
                            you agree to these Terms and Conditions. If you disagree with any part of these terms, you must not use 
                            our services.
                        </p>
                    </li>
                    <li className='mb-8'> 
                        <h4 className='font-bold'>Content Usage Rights</h4> 
                        <p>
                            You may not reproduce, distribute, publicly display, or otherwise exploit any of our content without written 
                            permission. Unauthorized use is strictly prohibited and may result in legal action.
                        </p>
                    </li>
                    <li className='mb-8'> 
                        <h4 className='font-bold'>Intellectual Property</h4> 
                        <p>
                            All content, trademarks, logos, images, and intellectual property associated with Design on a Dime are 
                            protected by intellectual property laws. Unauthorized use or distribution is a violation of these laws.
                        </p>
                    </li>
                    <li className='mb-8'> 
                        <h4 className='font-bold'>Third-Party Content</h4> 
                        <p>
                            Our services may feature content from third parties or include links to third-party websites. 
                            Design on a Dime Pvt. Ltd. does not endorse, guarantee, or assume responsibility for third-party content.
                        </p>
                    </li>
                    <li className='mb-8'> 
                        <h4 className='font-bold'>Modification of Terms</h4> 
                        <p>
                            Design on a Dime Pvt. Ltd. reserves the right to modify these Terms and Conditions at any time. 
                            Changes will be effective upon posting. Your continued use of our services constitutes your acceptance 
                            of the revised terms.
                        </p>
                    </li>
                    <li className='mb-8'> 
                        <h4 className='font-bold'>Governing Law</h4> 
                        <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of India.</p>
                    </li>
                    <li className='mb-8'> 
                        <h4 className='font-bold'>Contact Information</h4> 
                        <p>If you have questions regarding these Terms and Conditions, please <NavLink to="/contact" className={"underline text-orange-400"}> contact us</NavLink> | <NavLink to="/heroSection" className={"underline text-orange-400"}> Home</NavLink></p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  );
};

export default TermsAndConditions;
