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
            <Button value="C" type="operator" theme="top" />
            <Button value="+/-" type="operator" theme="top" />
            <Button value="%" type="operator" theme="top" />
            <Button value="/" type="operator" theme="right" />
          </Row>
          <Row>
            <Button value="7" type="number" />
            <Button value="8" type="number" />
            <Button value="9" type="number" />
            <Button value="x" type="operator" theme="right" />
          </Row>
          <Row>
            <Button value="4" type="number" />
            <Button value="5" type="number" />
            <Button value="6" type="number" />
            <Button value="-" type="operator" theme="right" />
          </Row>
          <Row>
            <Button value="1" type="number" />
            <Button value="2" type="number" />
            <Button value="3" type="number" />
            <Button value="+" type="operator" theme="right" />
          </Row>
          <Row>
            <Button value="0" type="number" size="double" />
            <Button value="." type="number" />
            <Button value="=" type="equal" theme="right" />
          </Row>
        </SafeAreaView>
      </Container>
    );
  }
}

export default Home;
