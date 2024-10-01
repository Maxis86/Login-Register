import { ExtrasLayout } from '../layout/ExtrasLayout'
import { NoteView } from '../views/NoteView';
import { NothingSelectedView } from '../views/NothingSelectedView';

const drowerWidth =  240;

export const ExtrasPage = () => {
  return (
    <>
      <ExtrasLayout>
        {/* <Typography variant='h1'>ExtrasPage</Typography> */}
        {/* <NothingSelectedView/> */}
        <NoteView/>
      </ExtrasLayout>
    </>
  )
}
