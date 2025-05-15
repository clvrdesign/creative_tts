import { Mail, Phone, MapPin, Clock, Send, ChevronRight } from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";

const ContactPage = () => {
  return (
    <main className='min-h-screen bg-neutral-100 dark:bg-neutral-950 py-12 mt-20'>
      <Container>
        {/* Hero Section */}
        <section className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4'>
            Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-300">Us</span>
          </h1>
          <p className='text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto'>
            Have questions or need support? Reach out to our team—we're here to
            help.
          </p>
        </section>

        {/* Contact Cards */}
        <section className='mb-20 grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Email Card */}
          <div className='bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-shadow'>
            <div className='w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4'>
              <Mail className='w-6 h-6 text-indigo-600 dark:text-indigo-400' />
            </div>
            <h3 className='text-xl font-semibold mb-2 text-neutral-900 dark:text-white'>Email Us</h3>
            <p className='text-neutral-600 dark:text-neutral-400 mb-4'>
              Get in touch with our support team for any inquiries.
            </p>
            <a
              href='mailto:support@ttsapp.ai'
              className='text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 flex items-center transition-colors'
            >
              support@ttsapp.ai <ChevronRight className='w-4 h-4 ml-1' />
            </a>
          </div>

          {/* Phone Card */}
          <div className='bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-shadow'>
            <div className='w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4'>
              <Phone className='w-6 h-6 text-indigo-600 dark:text-indigo-400' />
            </div>
            <h3 className='text-xl font-semibold mb-2 text-neutral-900 dark:text-white'>Call Us</h3>
            <p className='text-neutral-600 dark:text-neutral-400 mb-4'>
              Speak directly with our customer support representatives.
            </p>
            <a
              href='tel:+18005551234'
              className='text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 flex items-center transition-colors'
            >
              +257 79 993 587 <ChevronRight className='w-4 h-4 ml-1' />
            </a>
          </div>

          {/* Location Card */}
          <div className='bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-shadow'>
            <div className='w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4'>
              <MapPin className='w-6 h-6 text-indigo-600 dark:text-indigo-400' />
            </div>
            <h3 className='text-xl font-semibold mb-2 text-neutral-900 dark:text-white'>Visit Us</h3>
            <p className='text-neutral-600 dark:text-neutral-400 mb-4'>
              Our headquarters in Bujumbura, Boulevard de l'Uprona,
            </p>
            <a
              href='https://maps.google.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 flex items-center transition-colors'
            >
              Global Business, No. 2 <ChevronRight className='w-4 h-4 ml-1' />
            </a>
          </div>
        </section>

        {/* Contact Form */}
        <section className='mb-20'>
          <div className='bg-white dark:bg-neutral-900 p-8 md:p-12 rounded-2xl border border-neutral-200 dark:border-neutral-800'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-2xl font-semibold text-neutral-900 dark:text-white mb-6 flex items-center gap-2'>
                <Send className='w-6 h-6 text-indigo-600 dark:text-indigo-400' />
                Send Us a Message
              </h2>
              <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block font-medium text-neutral-700 dark:text-neutral-300 mb-1'
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='w-full outline-none px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white'
                    placeholder='Your name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block font-medium text-neutral-700 dark:text-neutral-300 mb-1'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full outline-none px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white'
                    placeholder='your@email.com'
                  />
                </div>
                <div className='md:col-span-2'>
                  <label
                    htmlFor='subject'
                    className='block font-medium text-neutral-700 dark:text-neutral-300 mb-1'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    className='w-full outline-none px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white'
                    placeholder='How can we help?'
                  />
                </div>
                <div className='md:col-span-2'>
                  <label
                    htmlFor='message'
                    className='block font-medium text-neutral-700 dark:text-neutral-300 mb-1'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    className='w-full outline-none px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white'
                    placeholder='Your message here...'
                  ></textarea>
                </div>
                <div className='md:col-span-2'>
                  <Button>
                    Send Message <Send className='inline w-4 h-4' />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Office Hours */}
        <section className='mb-20'>
          <div className='bg-white dark:bg-neutral-900 p-8 rounded-xl border border-neutral-200 dark:border-neutral-800'>
            <h2 className='text-2xl font-semibold text-neutral-900 dark:text-white mb-6 flex items-center gap-2'>
              <Clock className='w-6 h-6 text-indigo-600 dark:text-indigo-400' />
              Office Hours
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <h3 className='text-lg font-medium text-neutral-900 dark:text-white mb-2'>
                  Customer Support
                </h3>
                <p className='text-neutral-600 dark:text-neutral-400'>
                  Monday - Friday: 9:00 AM - 6:00 PM PST
                  <br />
                  Saturday: 10:00 AM - 4:00 PM PST
                  <br />
                  Sunday: Closed
                </p>
              </div>
              <div>
                <h3 className='text-lg font-medium text-neutral-900 dark:text-white mb-2'>
                  Emergency Support
                </h3>
                <p className='text-neutral-600 dark:text-neutral-400'>
                  Available 24/7 for critical issues
                  <br />
                  <a
                    href='tel:+18005551234'
                    className='text-indigo-600 dark:text-indigo-400 hover:underline'
                  >
                    +257 79 993 587
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className='text-center py-12 px-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl'>
          <h2 className='text-3xl font-bold text-neutral-900 dark:text-white mb-6'>
            Need Immediate Help?
          </h2>
          <p className='text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-6'>
            Check our FAQ section for quick answers to common questions.
          </p>
          <Button>Visit Help Center</Button>
        </section>
      </Container>
    </main>
  );
};

export default ContactPage;