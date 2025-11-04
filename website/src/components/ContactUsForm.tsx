"use client";

export default function ContactUsForm() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Handle form submission logic here
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // You can now use the data object to send to your backend
        var response = fetch('/api/contact-us', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        response.then(res => {
            if (res.ok) {
                console.log("Form submitted successfully");
                alert('Thank you for contacting us! We will get back to you shortly.');
            } else {
                console.error("Form submission failed");
                alert('There was an error submitting the form. Please try again later.');
                return false;
            }
        });

        // Make sure all form fields are cleared after submission
        for (let i = 0; i < e.currentTarget.elements.length; i++) {
            const element = e.currentTarget.elements[i] as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
            element.value = '';
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
            <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                type="text"
                id="firstName"
                name="firstName"
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                type="text"
                id="lastName"
                name="lastName"
                required
                />
            </div>
            </div>

            <div className="form-row">
            <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
            </div>
            </div>

            <div className="form-group">
            <label htmlFor="company">Company/Organization</label>
            <input type="text" id="company" name="company" />
            </div>

            <div className="form-group">
            <label htmlFor="projectType">Project Type *</label>
            <select id="projectType" name="projectType" required>
                <option value="">Select a project type</option>
                <option value="website-design">Website Design</option>
                <option value="website-redesign">Website Redesign</option>
                <option value="e-commerce">E-commerce Development</option>
                <option value="web-app">Web Application</option>
                <option value="branding">Branding & Identity</option>
                <option value="seo">SEO & Digital Marketing</option>
                <option value="consultation">Consultation Only</option>
                <option value="other">Other</option>
            </select>
            </div>

            <div className="form-group">
            <label htmlFor="budget">Project Budget</label>
            <select id="budget" name="budget">
                <option value="">Select your budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-plus">$50,000+</option>
                <option value="discuss">Let's discuss</option>
            </select>
            </div>

            <div className="form-group">
            <label htmlFor="timeline">Desired Timeline</label>
            <select id="timeline" name="timeline">
                <option value="">When do you need this completed?</option>
                <option value="asap">ASAP</option>
                <option value="1-month">Within 1 month</option>
                <option value="2-3-months">2-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-plus-months">6+ months</option>
                <option value="flexible">I'm flexible</option>
            </select>
            </div>

            <div className="form-group">
            <label htmlFor="message">
                Tell us about your project *
            </label>
            <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Please describe your project goals, target audience, key features you need, and any specific requirements or ideas you have in mind..."
                required
            ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-large">
            Send My Message
            </button>

            <p className="form-note">
            By submitting this form, you agree to our privacy policy.
            We'll never share your information with third parties.
            </p>
        </form>
    );
}