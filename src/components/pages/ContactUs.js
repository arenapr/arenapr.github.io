import '../../App.css'
import Strip from '../Strip/Strip';
import CTA from '../Banners/CTA';
import Footer from '../Footer';

function ContactUs() {
    window.scrollTo(0, 0);
    return (
        <>
            <div className="offwhite-background">
                <CTA
                    borderColor="#CA3631"
                    borderWidth="2px"
                    title="LET'S WORK TOGETHER!"
                    titleSize="4rem"
                    text="We are in constant search for
                          emerging local talent in the
                          borderland."
                    text2={["Are you a local fashion designer that wants to showcase your work?", <br/>, <br/>, <br/>,
                            "Send us an email and let us know!", <br/>,
                            "hello@the-arena-project.com"
                    ]}
                    imageSrc="../images/arena-website-528x657.jpg"
                    imageAlt="ContactUsImg"
                    imagePadding="5vw"
                    imageRight={false}
                    showButton={false}
                />
                <Strip
                    text="FASHION. CULTURE. COMMUNITY. "
                />
                <Footer />
            </div>
        </>
    );
}

export default ContactUs