import Avatar from "../../../../components/Common/Avatar";
import { Issue } from "../../types";

const IssueRow = ({
  title,
  assignee,
  reporter,
  status,
  createdAt,
  issueKey,
}: Issue & { issueKey: string }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4 hover:underline cursor-pointer">{issueKey}</td>
      <td className="px-6 py-4 text-primary cursor-pointer hover:underline">
        {title}
      </td>
      <td className="px-6 py-4">
        <Avatar name={assignee[0] || "Unassigneed"} />
      </td>
      <td className="px-6 py-4">
        <Avatar name={reporter} />
      </td>
      <td className="px-6 py-4">{status}</td>
      <td className="px-6 py-4">{createdAt.toISOString()}</td>
    </tr>
  );
};

export default IssueRow;
