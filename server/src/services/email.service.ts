import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPasswordResetEmail = async (
  email: string,
  resetUrl: string,
) => {
  const { data, error } = await resend.emails.send({
    from: "ApplyGrid <no-reply@applygrid.adhithyan.org>",
    to: email,
    subject: "Reset your ApplyGrid password",
    html: `
      <div>
        <h2>Reset your password</h2>

        <p>
          We received a request to reset your ApplyGrid password.
        </p>

        <p>
          Click the button below to choose a new password.
        </p>

        <a
          href="${resetUrl}"
          style="
            display: inline-block;
            padding: 12px 20px;
            background: #0020A2;
            color: white;
            text-decoration: none;
            border-radius: 8px;
          "
        >
          Reset Password
        </a>

        <p>
          This link expires in 15 minutes.
        </p>

        <p>
          If you didn't request this password reset, you can safely ignore
          this email.
        </p>
      </div>
    `,
  });

  console.log(data);
  console.log(error);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
