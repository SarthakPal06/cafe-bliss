import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! ☕</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
