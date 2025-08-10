export function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-foreground mb-8">Privacy Policy</h1>
        
        <div className="text-sm text-muted-foreground mb-8">
          <p>Last updated: January 2025</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
          <p className="text-muted-foreground mb-4">
            Vessel Social Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Keeps platform.
          </p>
          <p className="text-muted-foreground">
            We are the data controller for the purposes of UK data protection law, including the UK General Data Protection Regulation (UK GDPR).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-medium text-foreground mb-3">Personal Information</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Name, email address, and contact details</li>
            <li>Identity verification documents</li>
            <li>Financial information for investment purposes</li>
            <li>Investment preferences and risk profile</li>
            <li>Communication preferences</li>
          </ul>

          <h3 className="text-xl font-medium text-foreground mb-3">Technical Information</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>IP address and browser information</li>
            <li>Device identifiers and characteristics</li>
            <li>Usage data and platform interactions</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We use your information for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Providing and maintaining our platform services</li>
            <li>Processing investment transactions and portfolio management</li>
            <li>Identity verification and compliance with legal obligations</li>
            <li>Communicating with you about your account and investments</li>
            <li>Improving our services and user experience</li>
            <li>Detecting and preventing fraud and security threats</li>
            <li>Marketing communications (with your consent)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">4. Legal Basis for Processing</h2>
          <p className="text-muted-foreground mb-4">
            We process your personal data based on:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li><strong>Contract performance:</strong> To provide our platform services</li>
            <li><strong>Legal obligation:</strong> For compliance with financial regulations</li>
            <li><strong>Legitimate interests:</strong> For service improvement and security</li>
            <li><strong>Consent:</strong> For marketing communications and optional features</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">5. Information Sharing</h2>
          <p className="text-muted-foreground mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Service providers and business partners</li>
            <li>Financial institutions for payment processing</li>
            <li>Regulatory authorities when required by law</li>
            <li>Professional advisors (lawyers, auditors, etc.)</li>
            <li>Third parties in case of business transfers</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            We do not sell your personal information to third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
          <p className="text-muted-foreground">
            We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. This typically includes:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
            <li>Account data: For the duration of your account plus 7 years</li>
            <li>Transaction records: 7 years from the transaction date</li>
            <li>Communication records: 7 years from the last communication</li>
            <li>Marketing data: Until you withdraw consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
          <p className="text-muted-foreground mb-4">
            Under UK data protection law, you have the right to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Access your personal data</li>
            <li>Rectify inaccurate personal data</li>
            <li>Erase your personal data (in certain circumstances)</li>
            <li>Restrict processing of your personal data</li>
            <li>Data portability</li>
            <li>Object to processing</li>
            <li>Withdraw consent (where applicable)</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            To exercise these rights, please contact us through our Support Hub.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">8. Security</h2>
          <p className="text-muted-foreground">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
          </p>
          <p className="text-muted-foreground mt-4">
            Vessel Social Ltd<br />
            2 Hilliards Court<br />
            Chester Business Park<br />
            Chester, Cheshire, CH4 9QP<br />
            United Kingdom
          </p>
          <p className="text-muted-foreground mt-4">
            You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you believe we have not handled your personal data in accordance with the law.
          </p>
        </section>
      </div>
    </div>
  );
}