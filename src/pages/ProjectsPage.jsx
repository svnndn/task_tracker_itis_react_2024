import DefaultTemplate from "src/components/templates/DefaultTemplate"
import ProjectsTable from "src/components/organisms/ProjectsTable";

const ProjectsPage = () => {
  return (
    <DefaultTemplate>
      <h1>Projects Page</h1>
      <p>some projects text</p>
      <ProjectsTable />
    </DefaultTemplate>
  )
}

export default ProjectsPage;
