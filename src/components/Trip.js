import './TripStyles.css';
import TripData from './TripDAta';
import Trip1 from '../assets/25.jpg'
import Trip2 from '../assets/24.jpg'
import Trip3 from '../assets/23.jpg'

function Trip(){
    return(
        <div className='trip'>
            <h1>Next Planned Trips</h1>
            <p>
                you can discover unique destination using Google maps.
            </p>
            <div className='tripcard'>
                <TripData
                    image={Trip1}
                    heading="Trip in Agra"
                    text ="
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tenetur culpa quidem molestiae hic, eius magni praesentium, ut consequuntur quae exercitationem sit tempora non vitae?"
                    value="Rs 47,500"
                />
                <TripData
                    image={Trip2}
                    heading="Trip in Ladakh"
                    text ="
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tenetur culpa quidem molestiae hic, eius magni praesentium, ut consequuntur quae exercitationem sit tempora non vitae?"
                    value="Rs 35,000"
                />
                    <TripData
                        image={Trip3}
                        heading="Trip in Assam"
                        text ="
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tenetur culpa quidem molestiae hic, eius magni praesentium, ut consequuntur quae exercitationem sit tempora non vitae?"
                        value="Rs 20,000"
                    />
                    <TripData
                        image={Trip3}
                        heading="Trip in Assam"
                        text ="
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tenetur culpa quidem molestiae hic, eius magni praesentium, ut consequuntur quae exercitationem sit tempora non vitae?"
                        value="Rs 20,000"
                    />
                    <TripData
                        image={Trip3}
                        heading="Trip in Assam"
                        text ="
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tenetur culpa quidem molestiae hic, eius magni praesentium, ut consequuntur quae exercitationem sit tempora non vitae?"
                        value="Rs 20,000"
                    />
                    <TripData
                        image={Trip3}
                        heading="Trip in Assam"
                        text ="
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tenetur culpa quidem molestiae hic, eius magni praesentium, ut consequuntur quae exercitationem sit tempora non vitae?"
                        value="Rs 20,000"
                    />
                   
                
            </div>
        </div>
    )
}
export default Trip;
