const Footer = ()=>{
    return (
        <>
             <footer class="footer">
        <div class="footer-container">
            <div class="footer-section" style={{color:"white"}} >
                <h4>About Us</h4>
                <p style={{color:"white"}}>We provide high-quality Rooms Facility in our Hotels. Contact us for more details.</p>
            </div>
            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#">Rooms</a></li>
                    <li><a href="#services">MyBooking</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4 style={{color:"white"}}>Follow Us</h4>
                <div class="social-icons">
                    <a href="#"><img src="./socialmedia/koli-removebg-preview.png" alt="Facebook"/></a>
                    <a href="#"><img src="./socialmedia/bhj-removebg-preview.png" alt="Twitter"/></a>
                    <a href="#"><img src="./socialmedia/niu-removebg-preview.png" alt="Instagram"/></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p style={{color:"white"}}>&copy; 2024 YourWebsite. All Rights Reserved.</p>
        </div>
    </footer>
        </>
    );
}
export default Footer;