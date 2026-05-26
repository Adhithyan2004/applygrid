export const ProfileTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-semibold text-white">Profile</h3>
        <p className="mt-1 text-zinc-400">Update your personal information.</p>
      </div>

      <div className="grid gap-5">
        <input
          placeholder="Full Name"
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white outline-none"
        />

        <input
          placeholder="Email Address"
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white outline-none"
        />

        <textarea
          placeholder="Bio"
          rows={5}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white outline-none"
        />
      </div>
    </div>
  );
};
