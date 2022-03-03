import DocsBanner from './DocsBanner'
import DocsSubBanner from './DocsSubBanner'
import { Box, Container, Grid } from '@mui/material'
import DocsFooter from './DocsFooter'
import AllDocs from './AllDocs'
const DocsField = () => {
  return (
    <div className='bg-white dark:bg-Docy-AlmostBlack dark:text-white '>
      <DocsBanner/>
      <DocsSubBanner/>
    <Container>
   <AllDocs/>
    </Container>
   <DocsFooter/>
    </div>
  )
}

export default DocsField