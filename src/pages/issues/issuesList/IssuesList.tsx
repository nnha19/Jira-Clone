import DUMMY_ISSUES from "../DUMMY_ISSUES";
import IssueRow from "./components/IssueRow";
import IssuesHeader from "./components/IssuesHeader";

const IssuesList = () => {
  return (
    <div className="p-4">
      <IssuesHeader />
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Key
              </th>
              <th scope="col" className="px-6 py-3">
                Summary
              </th>
              <th scope="col" className="px-6 py-3">
                Assignee
              </th>
              <th scope="col" className="px-6 py-3">
                Reporter
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Created
              </th>
            </tr>
          </thead>
          <tbody>
            {DUMMY_ISSUES.map((issue) => (
              <IssueRow {...issue} issueKey={issue.key} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssuesList;
