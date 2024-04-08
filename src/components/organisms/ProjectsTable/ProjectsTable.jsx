import Button from '../../atoms/Button';
import { mockProjects } from './mockProjects';
import { Table, TableHead, TableRow, TableCol, TableColAction} from './styled';

const ProjectsTable = () => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHead>id</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </thead>
      <tbody>
        {mockProjects.map(() => {
          return (
            <TableRow>
              <TableCol>id</TableCol>
              <TableCol>title</TableCol>
              <TableCol>description</TableCol>
              <TableColAction>
                <Button label="Edit" onClick={() => {}} color="rgb(128, 50, 200)" />
                <Button label="Show" onClick={() => {}} color="rgb(128, 50, 200)" />
                <Button label="Delete" onClick={() => {}} color="rgb(128, 50, 200)" />
              </TableColAction>
            </TableRow>
          )
        })}
      </tbody>
    </Table>
  )

}

export default ProjectsTable;