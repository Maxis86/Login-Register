import { IconButton } from '@mui/material';
import { ExtrasLayout } from '../layout/ExtrasLayout'
import { NoteView } from '../views/NoteView';
import { NothingSelectedView } from '../views/NothingSelectedView';
import { AddOutlined } from '@mui/icons-material';

const drowerWidth = 240;

export const ExtrasPage = () => {
  return (
    <>
      <ExtrasLayout>
        {/* <Typography variant='h1'>ExtrasPage</Typography> */}
        <NothingSelectedView />
        {/* <NoteView/> */}

        <IconButton
          size='large'
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />

        </IconButton>


      </ExtrasLayout >
    </>
  )
}
