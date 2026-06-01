export const NotificationTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-semibold">Notifications</h3>

        <p className="mt-1 text-zinc-600">Control how you receive updates.</p>
      </div>

      <div className="space-y-4">
        <SettingToggle title="Email Notifications" />
        <SettingToggle title="Interview Reminders" />
        <SettingToggle title="Weekly Reports" />
      </div>
    </div>
  );
};

function SettingToggle({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl  border-zinc-800 bg-zinc-500 p-4">
      <p className="text-white">{title}</p>

      <button className="h-7 w-14 rounded-full bg-zinc-700 p-1">
        <div className="h-5 w-5 rounded-full bg-white"></div>
      </button>
    </div>
  );
}
