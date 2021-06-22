import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles, AppBar, Tab, Tabs, Slide, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  text: {
    fontSize: 200,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  page: {
    width: '100%',
    height: '100vh',
  },
  pageOne: {
    color: 'black'
  },
  pageTwo: {
    backgroundColor: 'blue'
  },
  pageThree: {
    backgroundColor: 'purple'
  },
}))

function App() {
  const classes = useStyles()
  const [pageNumber, setPageNumber] = useState(0)

  const handleTabChange = (event: any, newValue: number) => {
    setPageNumber(newValue)
  }

  return (
    <main >
      <AppBar position='static'>
        <Tabs value={pageNumber} onChange={handleTabChange}>
          <Tab label='Page One'/>
          <Tab label='Page Two'/>
          <Tab label='Page Three'/>
        </Tabs>
      </AppBar>
        <div hidden={pageNumber !== 0} className={classes.page}>
          <Typography className={clsx(classes.text, classes.pageOne)}>one</Typography>
        </div>
      <Slide 
        direction="right" 
        in={pageNumber == 1} 
        timeout={700} 
        mountOnEnter 
        unmountOnExit
      >
        <div className={clsx(classes.page, classes.pageTwo)}>
          <Typography className={classes.text}>two</Typography>
        </div>
      </Slide>
      <Slide direction="right" in={pageNumber == 2} mountOnEnter unmountOnExit>
        <div className={clsx(classes.page, classes.pageThree)}>
          <Typography className={classes.text}>three</Typography>
        </div>
      </Slide>
    </main>
  );
}

export default App;
