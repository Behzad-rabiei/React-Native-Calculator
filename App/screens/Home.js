import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { Container } from "../component/Container";
import { Result } from "../component/Text";

class Home extends Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <Result />
        </SafeAreaView>
      </Container>
    );
  }
}

export default Home;
