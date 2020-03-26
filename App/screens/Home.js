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
            <Button value="C" theme="Top" />
            <Button value="+/-" theme="Top" />
            <Button value="%" theme="Top" />
            <Button value="/" theme="Right" />
          </Row>
          <Row>
            <Button value="7" />
            <Button value="8" />
            <Button value="9" />
            <Button value="x" theme="Right" />
          </Row>
          <Row>
            <Button value="4" />
            <Button value="5" />
            <Button value="6" />
            <Button value="-" theme="Right" />
          </Row>
          <Row>
            <Button value="1" />
            <Button value="2" />
            <Button value="3" />
            <Button value="+" theme="Right" />
          </Row>
          <Row>
            <Button value="0" size="Double" />
            <Button value="." />
            <Button value="=" theme="Right" />
          </Row>
        </SafeAreaView>
      </Container>
    );
  }
}

export default Home;
