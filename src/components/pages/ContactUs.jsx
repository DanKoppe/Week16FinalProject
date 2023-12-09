import React from 'react';  //imported dependencies and assets
import ContactUsImage from '../../assets/contact-us.jpg';
import ChadCrossStitch from '../../assets/ChadCrossStitch.jpg';
import KillinIt from '../../assets/KillinIt.jpg';
import HobbitHole from '../../assets/HobbitHole.jpg';

export const ContactUs = () => ( // Contact us function which renders our contact us page with a mailto: anchor and several images. I was having trouble linking the images to the src folder so I had to use the import method.
    <section>
        <div className='Contact-Us-container container'>
            <img src={ContactUsImage} alt='Contact Us Image' className='ContactUsImage'></img>
            <div className='ContactTitle'>Feel free to contact us if you have any comments or questions.  Gaming, pet, or fantasy related cross sitch patterns such as the ones seen below can be crafted upon request by Dan's partner as well! To contact us please use the following email link:</div>
            <a href='mailto:Dan.Koppe65@gmail.com' className='EmailLink'>Contact us Via Email</a>
        </div>
        <div className='ContactImages'>
            <img src={KillinIt} alt='KillinIt'></img>
            <img src={ChadCrossStitch} alt='ChadCrossStich'></img>
            <img src={HobbitHole} alt='HobbitHole'></img>
        </div>
    </section>
)