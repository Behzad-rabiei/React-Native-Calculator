import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { Container, Row } from "../component/Container";
import { Result } from "../component/Text";
import { Button } from "../component/Button";

class Home extends Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <Result />
          <Row>
            <Button text="C" theme="Top" />
            <Button text="+/-" theme="Top" />
            <Button text="%" theme="Top" />
            <Button text="/" theme="Right" />
          </Row>
          <Row>
            <Button text="7" />
            <Button text="8" />
            <Button text="9" />
            <Button text="x" theme="Right" />
          </Row>
          <Row>
            <Button text="4" />
            <Button text="5" />
            <Button text="6" />
            <Button text="-" theme="Right" />
          </Row>
          <Row>
            <Button text="1" />
            <Button text="2" />
            <Button text="3" />
            <Button text="+" theme="Right" />
          </Row>
          <Row>
            <Button text="0" size="Double" />
            <Button text="." />
            <Button text="=" theme="Right" />
          </Row>
        </SafeAreaView>
      </Container>
    );
  }
}

export default Home;
