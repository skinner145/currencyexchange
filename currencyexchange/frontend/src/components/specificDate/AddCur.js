import React, { useState } from 'react'
import { Card, CardContent, CardActions, Button, Modal, Box} from '@material-ui/core'
import { connect } from 'react-redux'
import AddCurModalBody from './AddCurModalBody';
import { useStyles } from '../../theme/styles'
import Colors from '../../theme/colors'


const AddCur = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Box border={4} borderRadius={10} borderColor={Colors.secondary}>
      <Card className={classes.card}>
          <CardContent>
            <CardActions style={{marginTop: 12}}>
                <Button variant="outlined" color="secondary" onClick={handleOpen}>Add new currency</Button>
            </CardActions>
          </CardContent>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <AddCurModalBody onClose={handleClose} />
      </Modal>
    </Box>
  )
}

function mapStateToProps(state){
  return {
    availableCurs: state.currency.availableCurs
  }
}

export default connect(mapStateToProps)(AddCur)
