import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { startNewNote } from "../../strore/journal/thunks"
import { useDispatch, useSelector } from 'react-redux'

export const JournalPage = () => {

  const dispatch = useDispatch();

  const { isSaving, active } = useSelector( state => state.journal )  

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quisquam nostrum iure quae sed, modi corrupti animi officia qui fuga, blanditiis odit nihil laboriosam provident! Repellat vero inventore culpa sint?</Typography> */}
      
      {(!!active)? <NoteView />
        :<NothingSelectedView  />
      }

      <IconButton
        disabled={ isSaving }
        onClick={ onClickNewNote }
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50

        }}
      >
        <AddOutlined sx={{ fontSize: 50 }}/>
      </IconButton>

    </JournalLayout>
    
    
  )
}