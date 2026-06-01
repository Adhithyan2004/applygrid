export const RecentApplications = () => {
  return (
    <div className="flex flex-col  justify-between h-full">
      <h1 className="font-semibold text-[22px]">Recent Applications</h1>
      <div>
        {/* Header */}
        <div className="grid grid-cols-4 mt-5 font-semibold text-[18px]">
          <p>Company</p>
          <p>Role</p>
          <p>Status</p>
          <p>Experience</p>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-4 py-1.5">
          <p>Oracle</p>
          <p>Frontend</p>
          <p>OFFERED</p>
          <p>INTERN</p>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-4 py-1.5">
          <p>Amazon</p>
          <p>Backend</p>
          <p>GHOSTED</p>
          <p>JUNIOR</p>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-4 py-1.5">
          <p>ZOHO</p>
          <p>PAT</p>
          <p>REJECTED</p>
          <p>MID LEVEL</p>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-4 py-1.5">
          <p>TCS</p>
          <p>SAP</p>
          <p>OFFERED</p>
          <p>SENIOR</p>
        </div>
      </div>
      <p className="font-semibold">View All</p>
    </div>
  );
};
