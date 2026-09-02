import { LegalAccordion } from "@/app/components/LegalAccordion";

const privacySections = [
  {
    title: "1. Information We Collect",
    content: (
      <div className="space-y-5">
        <div>
          <p className="mb-3">
            When you create an ApplyGrid account, we collect information such
            as:
          </p>

          <ul className="list-disc space-y-1 pl-5">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your account password</li>
          </ul>
        </div>

        <div>
          <p className="mb-3">
            When you use ApplyGrid to track your job applications, you may
            provide information such as:
          </p>

          <ul className="list-disc space-y-1 pl-5">
            <li>Company names</li>
            <li>Job roles</li>
            <li>Application dates</li>
            <li>Application status</li>
            <li>Experience level</li>
            <li>Location</li>
            <li>Salary information</li>
            <li>Personal notes</li>
            <li>Application status history</li>
          </ul>

          <p className="mt-4">
            We also collect information necessary to keep you authenticated and
            maintain the security of your account.
          </p>
        </div>
      </div>
    ),
  },

  {
    title: "2. How We Use Your Information",
    content: (
      <div className="space-y-4">
        <p>We use your information to:</p>

        <ul className="list-disc space-y-1 pl-5">
          <li>Create and manage your ApplyGrid account</li>
          <li>Authenticate you and keep your account secure</li>
          <li>Store and display your job applications</li>
          <li>Track application statuses and history</li>
          <li>Provide dashboard statistics and application-related features</li>
          <li>Maintain and improve ApplyGrid</li>
          <li>Respond to support requests</li>
        </ul>

        <p>
          We do not use your job application information for purposes unrelated
          to providing and improving ApplyGrid unless we clearly inform you
          otherwise.
        </p>
      </div>
    ),
  },

  {
    title: "3. How We Store Your Information",
    content: (
      <div className="space-y-4">
        <p>
          Your account and application information is stored on systems used to
          operate ApplyGrid.
        </p>

        <p>
          Passwords are not stored in plain text. Passwords are processed using
          secure password hashing before being stored.
        </p>

        <p>
          Authentication tokens are used to maintain your logged-in session and
          are stored using security mechanisms intended to prevent unauthorized
          access.
        </p>

        <p>
          While we take reasonable measures to protect your information, no
          method of storing or transmitting information over the internet can be
          guaranteed to be completely secure.
        </p>
      </div>
    ),
  },

  {
    title: "4. Cookies",
    content: (
      <div className="space-y-4">
        <p>
          ApplyGrid uses cookies to support authentication and maintain your
          logged-in session.
        </p>

        <p>
          These cookies are primarily used to keep you authenticated and allow
          ApplyGrid to securely provide account-specific functionality.
        </p>

        <p>
          We do not use cookies for advertising purposes unless this Privacy
          Policy is updated to reflect such a change.
        </p>
      </div>
    ),
  },

  {
    title: "5. Data Sharing",
    content: (
      <div className="space-y-4">
        <p>
          ApplyGrid does not sell your personal information or job application
          data.
        </p>

        <p>
          We may use third-party service providers that are necessary to operate
          parts of the service, such as infrastructure, hosting, email delivery,
          or other technical services.
        </p>

        <p>
          These providers may process information only as necessary to provide
          their services to ApplyGrid.
        </p>
      </div>
    ),
  },

  {
    title: "6. Data Retention",
    content: (
      <div className="space-y-4">
        <p>
          We retain your account and application information for as long as your
          account remains active or as necessary to provide ApplyGrid.
        </p>

        <p>
          If you delete your account, we will delete your account and associated
          application data, subject to any information that may need to be
          retained for legitimate legal or security purposes.
        </p>
      </div>
    ),
  },

  {
    title: "7. Your Information",
    content: (
      <div className="space-y-4">
        <p>
          You can access and manage information associated with your ApplyGrid
          account through the service.
        </p>

        <p>
          If you believe your information is inaccurate, or if you have
          questions about how your information is handled, you can contact us.
        </p>
      </div>
    ),
  },

  {
    title: "8. Account Deletion",
    content: (
      <div className="space-y-4">
        <p>You may request or initiate deletion of your ApplyGrid account.</p>

        <p>
          Deleting your account may permanently remove your account and
          associated application information. This action may not be reversible.
        </p>
      </div>
    ),
  },

  {
    title: "9. Changes to This Privacy Policy",
    content: (
      <div className="space-y-4">
        <p>
          We may update this Privacy Policy from time to time as ApplyGrid
          evolves.
        </p>

        <p>
          When we make significant changes, we may update the "Last updated"
          date at the top of this page.
        </p>

        <p>
          Your continued use of ApplyGrid after changes are made means that you
          acknowledge the updated Privacy Policy.
        </p>
      </div>
    ),
  },

  {
    title: "10. Contact",
    content: (
      <p>
        If you have questions about this Privacy Policy or how ApplyGrid handles
        your information, please contact us through the contact information
        provided on the ApplyGrid website.
      </p>
    ),
  },
];

const PrivacyPage = () => {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <div className="mb-10">
        <h1 className="font-sora text-primary text-4xl font-semibold tracking-tight">
          Privacy Policy
        </h1>

        <p className="mt-3 text-base text-black">
          <span className="text-primary">Last updated:</span> September 2, 2026
        </p>
      </div>

      <p className="mb-10 text-base leading-8 text-zinc-600">
        ApplyGrid respects your privacy. This Privacy Policy explains what
        information we collect, how we use it, and how we handle your
        information when you use ApplyGrid.
      </p>

      <LegalAccordion items={privacySections} />
    </main>
  );
};

export default PrivacyPage;
