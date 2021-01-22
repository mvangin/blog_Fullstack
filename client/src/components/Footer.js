import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

function Footer() {

    return (
        <footer className="footer w-100">
            <div className="text-white social">
                <div>
                    <h1>
                        The Conflict Continuum
        </h1>
                </div>

                <div className="socialIcons">
                    <a href="https://www.facebook.com/conflictarch/"> <FontAwesomeIcon icon={faFacebook} className="fa" /> </a>
                    <a href="https://www.twitter.com/conflictarch/"> <FontAwesomeIcon icon={faTwitter} className="fa" /> </a>
                    <a href="https://www.instagram.com/theconflictcontinuum/"> <FontAwesomeIcon icon={faInstagram} className="fa" /> </a>
                </div>
            </div>


            <div className="text-white recentPubs">
                <div className="pubContainer">
                    <div>
                        <h1> Recent publications </h1>
                    </div>
                    <div>
                        <p>
                            <a href="https://www.stableseas.org/maritime-enforcement-illicit-trades/countering-maritime-drug-trafficking-bangladesh">

                                Countering Maritime Drug Trafficking in Bangladesh’s Coastal Waters, Stable Seas
                </a>

                        </p>
                        <a href="https://www.stableseas.org/maritime-enforcement-illicit-trades/countering-maritime-drug-trafficking-bangladesh">
                            <img src="bangladesh.jpg" alt="banladesh" />
                        </a>
                    </div>

                    <div>
                        <p>
                            <a href="https://www.stableseas.org/publications/blue-economy-policy-proposals-barmm">

                                “BARMM Blue Economy: Policy Proposals For the Bangsamoro Autonomous Region in Muslim Mindanao”, Stable Seas
                </a>

                        </p>
                        <a href="https://www.stableseas.org/publications/blue-economy-policy-proposals-barmm">
                            <img src="blueEconomy.jpg" alt="blueOcean" />
                        </a>
                    </div>

                    <div>
                        <p>
                            <a href="http://cimsec.org/a-south-pacific-island-led-approach-to-regional-maritime-security/45703" >

                                “A South Pacific Island-Led Approach to Regional Maritime Security“, Center for International Maritime Security
                </a>

                        </p>
                        <a href="http://cimsec.org/a-south-pacific-island-led-approach-to-regional-maritime-security/45703" >
                            <img src="southPacific.jpg" alt="southPacific" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-white twitter">
                <div>
                    <h1>
                        Twitter Feed
        </h1>
                </div>

                <div className="">
                    <a href="https://twitter.com/conflictarch?lang=en" />
                    <img src="/twitter.png" alt="twitter" />

                </div>
            </div>
        </footer>
    )
}

export default Footer;