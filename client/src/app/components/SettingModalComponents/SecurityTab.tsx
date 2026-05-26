const SecurityTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-semibold text-white">Security</h3>

        <p className="mt-1 text-zinc-400">
          Manage passwords and account safety.
        </p>
      </div>

      <div className="space-y-4">
        <input
          type="password"
          placeholder="Current Password"
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white outline-none"
        />

        <input
          type="password"
          placeholder="New Password"
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white outline-none"
        />

        <button className="rounded-xl bg-white px-5 py-3 text-black">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default SecurityTab;
