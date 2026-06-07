import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white py-12 text-navy">
      <section className="section-shell max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-emerald">
          Back to TapGrow
        </Link>
        <h1 className="mt-8 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate-500">Last Updated: June 2026</p>

        <div className="prose-policy mt-10 grid gap-8 text-slate-700">
          <p>TapGrow respects your privacy and is committed to protecting your personal information.</p>

          <section>
            <h2>1. Information We Collect</h2>
            <p>We may collect name, phone number, email address, shipping address, profession, social media links, uploaded photos, uploaded documents, and profile information submitted by customers.</p>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use collected information to process orders, create digital profiles, customize products, deliver products and services, provide customer support, and improve our services.</p>
          </section>

          <section>
            <h2>3. Information Sharing</h2>
            <p>TapGrow does not sell, rent, or trade customer information to third parties. Information may be shared only when necessary to deliver products, process payments, or comply with legal obligations.</p>
          </section>

          <section>
            <h2>4. Public Profiles</h2>
            <p>Customers may voluntarily choose to publish information on their digital profiles. Only information intentionally provided for public display will appear on public profile pages.</p>
          </section>

          <section>
            <h2>5. Data Security</h2>
            <p>We take reasonable measures to protect customer information from unauthorized access, misuse, or disclosure.</p>
          </section>

          <section>
            <h2>6. Data Retention</h2>
            <p>Customer information may be retained for operational, legal, and support purposes. Customers may request deletion of their personal information by contacting TapGrow.</p>
          </section>

          <section>
            <h2>7. Third-Party Services</h2>
            <p>TapGrow may use third-party services such as Supabase, Netlify, Google Forms, WhatsApp Business, and payment providers. These services may process information according to their own privacy policies.</p>
          </section>

          <section>
            <h2>8. Changes To This Policy</h2>
            <p>TapGrow reserves the right to update this Privacy Policy at any time. Updated versions will be published on the website.</p>
          </section>

          <section>
            <h2>9. Contact</h2>
            <p>If you have questions regarding this Privacy Policy, please contact TapGrow through the official contact details provided on the website.</p>
          </section>
        </div>
      </section>
    </main>
  );
}
