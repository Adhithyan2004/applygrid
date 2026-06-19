import { RecentActivityItems } from "@/app/types/types";
import { getActivityText } from "@/app/lib/activity";
import { formatTimeAgo } from "@/app/lib/formatters";

type Props = {
  activities: RecentActivityItems[];
};

export const RecentActivity = ({ activities }: Props) => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="bg-white shadow-mini rounded-lg p-3 py-5">
        <h1 className="text-[22px] font-semibold text-[#0020A2]">
          Recent Activity
        </h1>
        <div className="flex flex-col font-sora gap-3 mt-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex justify-between items-center text-[18px]"
            >
              <p>
                {getActivityText(
                  activity.status,
                  activity.application.companyName,
                )}
              </p>

              <p className="font-semibold text-[16px] text-[#0020A2]">
                {formatTimeAgo(activity.changedAt)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-[22px] font-semibold text-[#0020A2]">
          Top Applied Roles
        </h1>
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex justify-between font-semibold text-white rounded-lg p-2 bg-[#0020A2] w-[52%]">
            <p>Frontend Developer</p>
            <p>52%</p>
          </div>
          <div className="flex justify-between font-semibold rounded-lg text-white p-2 bg-[#0020A2] w-[40%]">
            <p>Backend Developer</p>
            <p>40%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
