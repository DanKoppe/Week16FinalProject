import React from 'react';  //imported dependencies and images
import DanHeadshot from '../../assets/DanHeadshot.jpg'
import Atari2600 from '../../assets/Atari2600.jpg'
import NintendoNES from '../../assets/NintendoNES.jpg'
import Playstation from '../../assets/Playstation.jpg'
import DesktopPC from '../../assets/DesktopPC.jpg'

export const About = () => (   //About function for our About component that renders the About page with a title, about paragraph and several images.
    <section>
        <div className='About-container container'>
            <div>
                <h2 className='AboutTitle'>Who is Dan?</h2>
                <p className='AboutText'>Dan Koppe is an old school gamer and fantasy lover who enjoys both physical board games as well as digital videogames.  He grew up playing the Atari 2600 at his Grandmother's house as well as Dungeons and Dragons with his childhood friends.  In the late 80's he received a Nintendo NES for Christmas and it was then he knew gaming was going to be a lifelong hobby and passion.  Throughout the years the systems have changed, but his love for gaming never waned. Although he enjoys console gaming, its the PC platform that truely captivated his attention and imagination.  Dan first PC experience was learning to type in middle school on the now ancient Apple IIe computers with their matrix-like green lettering. Throughout Dan's early childhood, his PC gaming was limited since his parents were strictly Mac users. It wasn't until he built his first gaming PC in the early 2000s that his passion and joy for gaming were truly realized.  Since then he has done his best to keep up with the plethora of gaming releases as well as the ever evolving gaming technology.  Since an adult gamer's free time is often rather limited, Dan has put together this videogame review website so users can make sure they get the most out of their limited time and money.  Thanks for dropping by and happy gaming!     </p>
            </div>
            <img src={DanHeadshot} alt='DanHeadshot' className='AboutImage' />
        </div>
        <div className='SystemsImages'>
           <img src={Atari2600} alt='Atari2600'></img>
           <img src={NintendoNES} alt='NintendoNES'></img>
           <img src={Playstation} alt='Playstation1'></img>
           <img src={DesktopPC} alt='DesktopPC'></img> 
        </div>         
    </section>   
);