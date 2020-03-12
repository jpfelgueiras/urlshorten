import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Links from "../components/Links";
import { fetchArticleDetails } from "../actions";

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  aside {
    min-width: 35vh;
    display: flex;
    justify-content: flex-end;
  }
  main {
    flex: 1 0 350px;
    ${"" /* not responsive */} padding: 0 5rem;
  }
`;

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchArticleDetails();
  }
  render() {
    const links = this.props.data;
    return (
      <StyledApp>
        <aside>
          <h1>Ola Mundo!</h1>
        </aside>
        <main>
          {this.props.isLoadingData ? (
            "Loading . . ."
          ) : (
           <Links links={links} />
          )}
        </main>
      </StyledApp>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData
});
export default connect(
  mapStateToProps,
  {
    fetchArticleDetails
  }
)(App);