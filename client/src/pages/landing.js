import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MyImage from '../../src/assets/images/orcishLibrarian.jpg';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import './index.css';
// import SearchBar from '../components/Search'

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. 
/* Use CSS or styled components for such things.
 */
const HomepageHeading = ({ mobile } /*mobile  HOMEPAGE*/) => (
  <Container text style={{ background: '#36393e' }}>
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={4}></Grid.Column>

        <Grid.Column width={8}></Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={8}>
          <Image src={MyImage} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header
            className='fixMe'
            as='h1'
            content='Forking Delicious'
            inverted
            // style={{
            //   fontSize: mobile ? '2em' : '4em',
            //   fontWeight: 'normal',
            //   marginBottom: 0,
            //   marginTop: mobile ? '.5em' : '1em',
            // }}
          />
          <Header
            as='h2'
            content='Find a Recipe / Make a Recipe / Share a Recipe'
            inverted
            style={{
              color: '#f6f7f5',
              background: '#36393e',
              fontSize: mobile ? '1.5em' : '1.7em',
              fontWeight: 'normal',
              marginTop: mobile ? '0.5em' : '1.5em',
            }}
          />
          <Button
            style={{ backgroundColor: '#f6f7f5', color: '#5b5391' }}
            size='huge'
          >
            Pick a Recipe
            <Icon name='right arrow' style={{ color: '#5b5391' }} />
          </Button>
          {/* <SearchBar/> */}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

HomepageHeading.propTypes = {
  /*end mobile  HOMEPAGE*/ mobile: PropTypes.bool,
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  /*Desktop  NAVIGATION MENU*/
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{
              minHeight: 700,
              padding: '1em 0em',
              background: '#7d7d74',
              color: '#f6f7f5',
            }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              // size='large'
            >
              <Container>
                <Menu.Item position='right'>
                  <Button
                    as='a'
                    inverted={!fixed}
                    style={{ marginLeft: '0.5em' }}
                  >
                    Chef's Page
                  </Button>
                  <Button
                    as='a'
                    inverted={!fixed}
                    style={{ marginLeft: '0.5em' }}
                  >
                    Create a Recipe
                  </Button>
                  <Button
                    as='a'
                    inverted={!fixed}
                    style={{
                      marginLeft: '0.5em',
                      background: '#36393e',
                      color: '#f6f7f5',
                    }}
                  >
                    Log-in/Log-out
                  </Button>
                  <Image
                    src='https://live.staticflickr.com/65535/50014851021_3d53cbb8fa_n.jpg'
                    avatar
                  />
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  } /*end Desktop   NAVIGATION MENU*/
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  /*Mobile   NAVIGATION MENU*/
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
          style={{
            marginLeft: '0.5em',
            background: '#36393e',
            color: '#f6f7f5',
          }}
        >
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>Chef's Corner</Menu.Item>
          <Menu.Item as='a'>Create a Recipe</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu style={{ background: '918b93' }} pointing size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted style={{ background: '#5b5391' }}>
                    Log in
                  </Button>
                  <Button
                    as='a'
                    inverted
                    style={{
                      marginLeft: '0.5em',
                      background: '#5b5391',
                      color: '#f6f7f5',
                    }}
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
} /*End Mobile MENU*/

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const Landing = () => (
  <ResponsiveContainer>
    <Grid columns={3} divided style={{ background: '#726f79' }}>
      <Grid.Row>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I use this app Every Single Day"
            </Header>
            <p style={{ fontSize: '1.33em' }}>We have 5 stars in GoogleApps</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Forking Delicious is a great place to share recipes with others"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Invite friends and family to see your recipes and share theirs
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          A Few of Our Favorite Chefs
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          We love to share the blogs, vlogs, and recipes of friends. They
          contribute to the recipes in Forking Delicious.
        </p>
        <Button as='a' size='large'>
          Take Me to the List
        </Button>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '1.5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Don't Forget...
              </Header>
              <p>Share this app with your friends and family</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default Landing;
