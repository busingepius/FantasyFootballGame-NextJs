import Layout from '@/components/layouts';
import { appConfigs } from '@/constants/configs';
import { ReactElement, useState } from 'react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errs.email = 'Invalid email address';
    }
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Here you would typically send the form data to your backend or API
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen text-white flex flex-col">
      <section className="flex py-16 flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-secondary via-secondary to-white">
        <img
          src={appConfigs.logo}
          alt={`${appConfigs.appName} Logo`}
          className="w-32 h-32 mb-6 rounded-lg shadow-lg bg-white object-contain"
        />
        <h1 className="text-5xl font-extrabold mb-3 text-main">{appConfigs.appName ?? 'Fantasy Football'}</h1>
        <h2 className="text-3xl font-bold mb-6 leading-tight text-gray-300 uppercase">Contact Us</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Have questions, feedback, or partnership inquiries? Fill out the form below or reach us directly at{' '}
          <a
            href="mailto:support@fantasyfootball.com"
            className="text-main underline hover:text-main/80"
          >
            support@fantasyfootball.com
          </a>
          .
        </p>
      </section>

      <section className="py-16 px-6 max-w-2xl mx-auto flex flex-col gap-12">
        {submitted ? (
          <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow text-center">
            <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
            <p>Your message has been sent. We’ll get back to you soon.</p>
          </div>
        ) : (
          <form
            className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col gap-6"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className={`w-full px-4 py-2 rounded border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-main`}
                value={form.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                required
              />
              {errors.name && (
                <span id="name-error" className="text-red-500 text-sm">
                  {errors.name}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={`w-full px-4 py-2 rounded border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-main`}
                value={form.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                required
              />
              {errors.email && (
                <span id="email-error" className="text-red-500 text-sm">
                  {errors.email}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`w-full px-4 py-2 rounded border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-main`}
                value={form.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                required
              />
              {errors.message && (
                <span id="message-error" className="text-red-500 text-sm">
                  {errors.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-main text-white font-bold py-3 px-6 rounded hover:bg-main/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow text-gray-800 dark:text-gray-200">
          <h3 className="text-xl font-bold mb-2 text-main">Contact Details</h3>
          <p>
            <span className="font-semibold">Email:</span>{' '}
            <a
              href="mailto:support@fantasyfootball.com"
              className="text-main underline hover:text-main/80"
            >
              support@fantasyfootball.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Twitter:</span>{' '}
            <a
              href="https://twitter.com/fantasyfootball"
              target="_blank"
              rel="noopener noreferrer"
              className="text-main underline hover:text-main/80"
            >
              @fantasyfootball
            </a>
          </p>
          <p>
            <span className="font-semibold">Address:</span> 123 Fantasy Ave, Madrid, Spain
          </p>
        </div>
      </section>
    </div>
  );
}

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout hideSidebar>{page}</Layout>;
};