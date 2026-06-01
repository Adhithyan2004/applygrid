const SecurityTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-semibold">Security</h3>

        <p className="mt-1 text-zinc-600">
          Manage passwords and account safety.
        </p>
      </div>

      <div className="space-y-4">
        <input
          type="password"
          placeholder="Current Password"
          className="w-full rounded-lg border border-zinc-800 p-3 outline-none"
        />

        <input
          type="password"
          placeholder="New Password"
          className="w-full rounded-lg border border-zinc-800 p-3 outline-none"
        />

        <button className="rounded-lg bg-white px-4 py-2.5 hover:bg-zinc-200 text-black">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default SecurityTab;
