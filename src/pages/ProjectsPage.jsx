import Notifier from "src/components/atoms/Notifier";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import ProjectsTable from '../components/organisms/ProjectsTable';

const ProjectsPage = () => {
  return (
    <DefaultTemplate>
      <h2>Projects List</h2>

      <ProjectsTable />
      <Notifier />
    </DefaultTemplate>
  );
};

export default ProjectsPage;
