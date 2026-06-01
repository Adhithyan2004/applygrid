export const ProfileTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold text-zinc-700">Profile</h3>
        <p className="mt-1 text-zinc-600">Update your personal information.</p>
      </div>

      <div className="grid gap-5">
        <input
          placeholder="Full Name"
          className="rounded-lg border border-zinc-800 p-3"
        />

        <input
          placeholder="Email Address"
          className="rounded-lg border border-zinc-800 p-3"
        />

        <textarea
          placeholder="Bio"
          rows={5}
          className="rounded-lg border border-zinc-800 p-3"
        />
      </div>
    </div>
  );
};
