import SliderImage from "../components/SliderImage";

const Contact = ()=>{
    return (
        <>
        <SliderImage></SliderImage>
            <center>
      <div class="containers col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              Contact Us
            </h1>
            <p class="col-lg-10 fs-4">
              We’d love to hear from you! For any inquiries, bookings, or support, please reach out to us:

Customer Support
Email: support@yourhotelapp.com
Phone: +91-98765-43210 (Available 24/7)

Corporate Office
Address: Your Hotel App Pvt. Ltd.,
1234, Greenway Avenue,
Bengaluru, Karnataka, 560001, India

Social Media
Stay updated by following us on:

Facebook
Instagram
Twitter
Feedback and Suggestions
Share your feedback at: feedback@yourhotelapp.com

Quick Help
Use our Live Chat feature or visit the Help Center for FAQs and troubleshooting.


            </p>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder=" Enter The Name"
                />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder=" Enter The Name"
                />
                <label for="floatingInput">Username</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder=" Enter the Number"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">
                Contact
              </button>
              <hr class="my-4" />
              <small class="text-body-secondary">
                By clicking Contact, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
      </center>
        </>
    );
}
export default Contact;