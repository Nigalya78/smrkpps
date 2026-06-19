import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "../../components/PageHero";

const fields = ["Your Name", "Email Address", "Phone Number"];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Build Better Packaging Together"
        text="Tell us about your packaging requirement and our team will help you choose the right materials, print finish, and delivery plan."
      />

      <section className="bg-[var(--smrk-soft)] py-14 md:py-20">
        <div className="site-container grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="rounded-[4px] border border-[var(--smrk-line)] bg-white p-7 soft-shadow">
            <p className="section-eyebrow">Reach Us</p>
            <h2 className="mt-3 text-[28px] font-black leading-tight tracking-[-0.02em]">Packaging support, ready when you are.</h2>
            <div className="mt-8 space-y-6 text-[14px] font-medium leading-7">
              <div className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-[var(--smrk-blue)]" size={24} />
                <span>Plot No. 22, Industrial Area, Meerut, Uttar Pradesh, India</span>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-[var(--smrk-blue)]" size={24} />
                <span>+91 99999 99999</span>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 shrink-0 text-[var(--smrk-blue)]" size={24} />
                <span>info@smrkpps.com</span>
              </div>
            </div>
          </aside>

          <form className="rounded-[4px] border border-[var(--smrk-line)] bg-white p-7 soft-shadow">
            <div className="grid gap-5 md:grid-cols-3">
              {fields.map((field) => (
                <input
                  key={field}
                  type={field === "Email Address" ? "email" : "text"}
                  placeholder={field}
                  className="min-h-[54px] rounded-[4px] border border-[var(--smrk-line)] px-4 text-[14px] font-medium outline-none transition placeholder:text-[var(--smrk-muted)] focus:border-[var(--smrk-blue)]"
                />
              ))}
            </div>
            <textarea
              rows={7}
              placeholder="Your Message"
              className="mt-5 w-full rounded-[4px] border border-[var(--smrk-line)] p-4 text-[14px] font-medium outline-none transition placeholder:text-[var(--smrk-muted)] focus:border-[var(--smrk-blue)]"
            />
            <button type="submit" className="blue-button mt-6 min-w-[190px]">
              Send Inquiry <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
