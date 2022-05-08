import { Box, Button, Footer, Heading, Paragraph, Text } from 'grommet';
import { Favorite, ShareOption } from 'grommet-icons';
import { HeaderBar } from '../components/Header/Header';

const ReviewDetail = () => {
  return (
    <Box>
      <HeaderBar />
      <Box pad="large">
        <Heading>42 anos do lendário album do U2</Heading>
        <Text>By GhostWriter</Text>

        <Paragraph fill>
          The stakes are enormous, and U2 knows it. Its last album, The
          Unforgettable Fire, contained “Pride (In the Name of Love),” its
          biggest-selling single ever, and last year the band was the musical
          heart of Amnesty International’s Conspiracy of Hope tour. Now, it
          seems, U2 is poised to rise from the level of mere platinum groups to
          the more rarefied air above. For a band that’s always specialized in
          inspirational, larger-than-life gestures — a band utterly determined
          to be Important — The Joshua Tree could be the big one, and that’s
          precisely what it sounds like. That’s not to say that this record is
          either a flagrantly commercial move or another Born in the U.S.A. The
          Joshua Tree is U2’s most varied, subtle and accessible album, although
          it doesn’t contain any sure-fire smash hits. But in its musical
          toughness and strong-willed spirituality, the album lives up to its
          namesake: a hardy, twisted tree that grows in the rocky deserts of the
          American Southwest. A Mormon legend claims that their early settlers
          called the Joshua tree “the praying plant” and thought its gnarled
          branches suggested the Old Testament prophet Joshua pointing the way
          to the Promised Land. The title befits a record that concerns itself
          with resilience in the face of utter social and political desolation,
          a record steeped in religious imagery.
        </Paragraph>
        <Box direction="row">
          <Box pad="small" justify="center" align="center">
            <Button icon={<Favorite color="status-critical" />}></Button>
            <Text size="small">23</Text>
          </Box>
          <Box pad="small" justify="center" align="center">
            <Button icon={<ShareOption />}></Button>
            <Text size="small">Share</Text>
          </Box>
        </Box>
        <Footer>
          <Text>About</Text>
        </Footer>
      </Box>
    </Box>
  );
};

export default ReviewDetail;
