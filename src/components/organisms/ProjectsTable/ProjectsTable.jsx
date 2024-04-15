import Button from 'react-bootstrap/Button';

import { useState, useContext } from 'react';

import NotifierContext from 'src/context/NotifierContext';

import DeleteModal from '../../molecules/DeleteModal';

import { mockProjects } from './mockProjects';

import { Table, TableHead, TableCol, TableColActions } from './styled';

const ProjectsTable = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  const { setMessage } = useContext(NotifierContext);

  const handleDeleteButton = (project) => {
    setProjectToDelete(project);
    setShowDeleteModal(true);
  }

  const handleDeleteCancelButton = () => {
    setProjectToDelete(null);
    setShowDeleteModal(false);
  }

  const handleDeleteConfirmButton = () => {
    setMessage("Проект удален");
    setProjectToDelete(null);
    setShowDeleteModal(false);
  }

  return (
    <>
    <Table>
      <thead>
        <tr>
          <TableHead>id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Actions</TableHead>
        </tr>
      </thead>

      <tbody>
        {mockProjects.map(({ id, name, description }) => {
          return (
            <tr key={id}>
              <TableCol>{id}</TableCol>
              <TableCol>{name}</TableCol>
              <TableCol>{description}</TableCol>
              <TableColActions>
                <Button variant="light" onClick={() => {}}>Edit</Button>
                <Button variant="light" onClick={() => {}}>Show</Button>
                <Button variant="danger" onClick={() => {handleDeleteButton({ id, name, description })}}>Delete</Button>
              </TableColActions>
            </tr>
          )
        })}
      </tbody>
    </Table>

    { (showDeleteModal && (
      <DeleteModal text={`The project "${projectToDelete.name}" will be permanently deleted. Are you sure?`}
      onCancel={handleDeleteCancelButton}
      onDelete={handleDeleteConfirmButton}
      show={showDeleteModal} />))
    }
    </>
  );
};

export default ProjectsTable;
