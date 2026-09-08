import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { LegalAccordion } from "@/app/components/LegalAccordion";

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <div className="space-y-4">
        <p>
          By creating an account or using ApplyGrid, you agree to be bound by
          these Terms of Service.
        </p>

        <p>
          If you do not agree with these terms, you should not create an account
          or use ApplyGrid.
        </p>
      </div>
    ),
  },

  {
    title: "2. Using ApplyGrid",
    content: (
      <div className="space-y-4">
        <p>
          ApplyGrid is a tool designed to help you organize and track your job
          applications.
        </p>

        <p>
          You may use ApplyGrid only for lawful purposes and in accordance with
          these Terms of Service.
        </p>

        <p>
          You are responsible for the information you enter into ApplyGrid and
          for ensuring that your use of the service does not violate any
          applicable laws or the rights of others.
        </p>
      </div>
    ),
  },

  {
    title: "3. Your Account",
    content: (
      <div className="space-y-4">
        <p>
          You are responsible for maintaining the security of your ApplyGrid
          account and keeping your login credentials confidential.
        </p>

        <p>
          You are responsible for all activity that occurs under your account.
        </p>

        <p>
          If you believe that your account has been accessed without your
          permission, you should contact us as soon as reasonably possible.
        </p>
      </div>
    ),
  },

  {
    title: "4. Your Data and Content",
    content: (
      <div className="space-y-4">
        <p>
          You retain responsibility for the information and content you enter
          into ApplyGrid, including your job application information and
          personal notes.
        </p>

        <p>
          You grant ApplyGrid permission to store and process this information
          only as necessary to provide, maintain, secure, and improve the
          service.
        </p>

        <p>
          You should not enter information into ApplyGrid that you do not have
          the right to store or use.
        </p>
      </div>
    ),
  },

  {
    title: "5. Acceptable Use",
    content: (
      <div className="space-y-4">
        <p>You agree not to use ApplyGrid to:</p>

        <ul className="list-disc space-y-1 pl-5">
          <li>Break or violate applicable laws or regulations</li>
          <li>Attempt to gain unauthorized access to accounts or systems</li>
          <li>Interfere with or disrupt the service</li>
          <li>Upload malicious software or harmful code</li>
          <li>Abuse, exploit, or attempt to circumvent service limitations</li>
          <li>Use the service in a way that harms other users</li>
        </ul>

        <p>
          We reserve the right to take appropriate action when these
          restrictions are violated.
        </p>
      </div>
    ),
  },

  {
    title: "6. Service Availability",
    content: (
      <div className="space-y-4">
        <p>
          We aim to keep ApplyGrid available and reliable, but we do not
          guarantee that the service will always be available, uninterrupted, or
          error-free.
        </p>

        <p>
          ApplyGrid may occasionally be unavailable due to maintenance, updates,
          technical issues, or circumstances outside our control.
        </p>
      </div>
    ),
  },

  {
    title: "7. Intellectual Property",
    content: (
      <div className="space-y-4">
        <p>
          ApplyGrid, including its design, branding, software, interface, and
          other original content, is owned by or licensed to ApplyGrid unless
          otherwise stated.
        </p>

        <p>
          You may not copy, modify, distribute, reverse engineer, or reproduce
          substantial parts of the service without appropriate permission.
        </p>

        <p>
          These Terms do not transfer ownership of ApplyGrid's intellectual
          property to you.
        </p>
      </div>
    ),
  },

  {
    title: "8. Account Suspension and Termination",
    content: (
      <div className="space-y-4">
        <p>You may stop using ApplyGrid and delete your account at any time.</p>

        <p>
          We may suspend or terminate an account if we reasonably believe that
          the account is being used in violation of these Terms, to abuse the
          service, or in a way that may harm ApplyGrid or other users.
        </p>

        <p>
          Where appropriate, we may provide notice before taking such action.
        </p>
      </div>
    ),
  },

  {
    title: "9. Disclaimers",
    content: (
      <div className="space-y-4">
        <p>
          ApplyGrid is provided as a productivity and organization tool. It does
          not guarantee employment, interviews, job offers, or any particular
          career outcome.
        </p>

        <p>
          You are responsible for how you use the information and features
          provided by ApplyGrid.
        </p>

        <p>
          To the extent permitted by applicable law, ApplyGrid is provided
          without guarantees that the service will meet every particular
          requirement or remain free from errors.
        </p>
      </div>
    ),
  },

  {
    title: "10. Limitation of Liability",
    content: (
      <div className="space-y-4">
        <p>
          To the extent permitted by applicable law, ApplyGrid and its operators
          will not be responsible for indirect, incidental, consequential, or
          special damages arising from your use of or inability to use the
          service.
        </p>

        <p>
          This includes losses resulting from interruptions, loss of data, or
          reliance on information stored or displayed through ApplyGrid, except
          where such limitations are not permitted by law.
        </p>
      </div>
    ),
  },

  {
    title: "11. Changes to These Terms",
    content: (
      <div className="space-y-4">
        <p>
          We may update these Terms of Service as ApplyGrid evolves or as
          necessary to reflect changes to the service or applicable
          requirements.
        </p>

        <p>
          When significant changes are made, we may update the "Last updated"
          date at the top of this page.
        </p>

        <p>
          Your continued use of ApplyGrid after updated terms become effective
          means that you acknowledge the updated Terms of Service.
        </p>
      </div>
    ),
  },

  {
    title: "12. Contact",
    content: (
      <p>
        If you have questions about these Terms of Service or your use of
        ApplyGrid, please contact us through the contact information provided on
        the ApplyGrid website.
      </p>
    ),
  },
];

const TermsPage = () => {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <div className="mb-10">
        <Link
          href="/"
          className="text-primary mb-8 inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
        >
          <ChevronLeft size={18} />
          Back to Home
        </Link>

        <h1 className="font-sora text-primary text-4xl font-semibold tracking-tight">
          Terms of Service
        </h1>

        <p className="mt-3 text-base text-black">
          <span className="text-primary">Last updated:</span> September 3, 2026
        </p>
      </div>

      <p className="mb-10 text-base leading-8 text-zinc-600">
        These Terms of Service explain the rules and conditions that apply when
        you create an account or use ApplyGrid. By using ApplyGrid, you agree to
        follow these terms.
      </p>

      <LegalAccordion items={termsSections} />
    </div>
  );
};

export default TermsPage;
