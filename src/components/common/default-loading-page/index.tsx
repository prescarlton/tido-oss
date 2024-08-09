import { Box, Loader } from '@mantine/core'
import classes from './styles.module.scss'

const DefaultLoadingPage = () => {
  return (
    <Box className={classes.page}>
      <Loader size="lg" />
    </Box>
  )
}
export default DefaultLoadingPage
