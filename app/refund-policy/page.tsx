import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white py-12 text-navy">
      <section className="section-shell max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-emerald">
          Back to TapGrow
        </Link>
        <h1 className="mt-8 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
          Refund Policy
        </h1>
        <p className="mt-3 text-sm text-slate-500">Last Updated: June 2026</p>

        <div className="prose-policy mt-10 grid gap-8 text-slate-700">
          <p>Thank you for choosing TapGrow. As our products are customized and personalized based on customer-provided information, we have established the following refund policy.</p>

          <section>
            <h2>1. Order Cancellation</h2>
            <p>Customers may request cancellation of an order within 12 hours of placing the order, provided that profile creation, design work, customization, or production has not started.</p>
            <p>Once production or customization begins, the order cannot be cancelled.</p>
          </section>

          <section>
            <h2>2. Refund Eligibility</h2>
            <p>Refunds may be issued only for duplicate payment, product unavailability where TapGrow cannot fulfill the order, or an order cancelled before customization or production begins.</p>
            <p>Approved refunds will be processed within 7-10 business days.</p>
          </section>

          <section>
            <h2>3. Customized Products</h2>
            <p>TapCard, TapStand, TapReview, TapWatch, TapBracelet, TapPendant, digital profiles, and any other customized products are made specifically for each customer.</p>
            <p>Because of this, customized orders are non-refundable once design, customization, or production has started.</p>
          </section>

          <section>
            <h2>4. Damaged or Defective Products</h2>
            <p>If you receive a damaged, defective, or non-functional product, please contact us within 48 hours of delivery with photos or videos showing the issue.</p>
            <p>After verification, TapGrow may provide a replacement product or a suitable resolution at our discretion.</p>
          </section>

          <section>
            <h2>5. Shipping Charges</h2>
            <p>Shipping charges, if any, are non-refundable unless the error was caused by TapGrow.</p>
          </section>

          <section>
            <h2>6. Contact</h2>
            <p>For refund-related inquiries, please contact us through our official WhatsApp Business account or email address listed on our website.</p>
          </section>
        </div>
      </section>
    </main>
  );
}
