import { useProjects } from "src/lib/hooks/project";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import ProjectsTable from '../components/organisms/ProjectsTable';

const ProjectsPage = () => {
  const { projects, loading, error } = useProjects();
  console.log(projects, loading, error)

  return (
    <DefaultTemplate>
      <h2>Projects List</h2>
      
      {error && <div>Ошибка</div>}
      {loading && <div>Загрузка...</div>}
      {projects && <ProjectsTable projects={projects} />}
      
    </DefaultTemplate>
  );
};

export default ProjectsPage;
