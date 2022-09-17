import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, NoteView } from "../view"

export const JournalPage = () => {
  return (
    <JournalLayout>
   
   {/* <Typography>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam inventore voluptate asperiores laborum reiciendis dolorum consequuntur amet quidem, doloremque officia nobis aperiam debitis perferendis. Temporibus suscipit provident doloremque veritatis labore aspernatur totam blanditiis quod, soluta eaque nemo cupiditate. Dolorem, reiciendis.
   </Typography> */}

    <NothingSelectedView />
    {/* <NoteView /> */}

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
      <AddOutlined sx={{ fontSize: 30 }}/>
    </IconButton>

    </JournalLayout>
  )
} 
