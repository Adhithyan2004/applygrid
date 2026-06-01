export const AppearanceTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-semibold text-zinc-700">Appearance</h3>

        <p className="mt-1 text-zinc-600">Customize how the dashboard looks.</p>
      </div>

      <div className="rounded-2xl bg-zinc-500 p-4">
        <p className="mb-4 text-white">Theme</p>

        <div className="flex gap-4">
          <button className="rounded-xl border border-white bg-white px-5 py-3 text-black">
            Dark
          </button>

          <button className="rounded-xl border border-zinc-700 px-5 py-3 text-zinc-300">
            Light
          </button>
        </div>
      </div>
    </div>
  );
};
