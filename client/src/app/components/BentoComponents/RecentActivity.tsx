import { RecentActivityItems, TopRole } from "@/app/types/types";
import { getActivityText } from "@/app/lib/activity";
import { formatTimeAgo } from "@/app/lib/formatters";

type Props = {
  activities: RecentActivityItems[];
  topRoles: TopRole[];
};

export const RecentActivity = ({ activities, topRoles }: Props) => {
  const maxCount =
    topRoles.length > 0 ? Math.max(...topRoles.map((role) => role.count)) : 1;
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className=" border border-primary bg-[#E5EAFF] rounded-lg p-3 py-5">
        <h1 className="text-[22px] font-semibold text-primary">
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

              <p className="font-semibold text-[16px] text-primary">
                {formatTimeAgo(activity.changedAt)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-[22px] font-semibold text-primary">
          Top Applied Roles
        </h1>
        <div className="flex flex-col gap-2 mt-4">
          {topRoles.map((role) => (
            <div
              key={role.role}
              className="flex justify-between items-center rounded-lg bg-[#0020A5] px-3 py-2 text-white font-semibold transition-all duration-500"
              style={{
                width: `${Math.max((role.count / maxCount) * 70, 30)}%`,
              }}
            >
              <p>{role.role}</p>
              <p>{role.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
