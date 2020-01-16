import React from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';

class Lesson10quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {salutation: 'Mr', name: '', designation: 'Program Chair'};
  }
  render() {
    let message =
      'Email sent to ' +
      this.state.salutation +
      ' ' +
      this.state.name +
      ' (' +
      this.state.designation +
      ')' +
      ' at ' +
      this.state.email;
    return (
      <View>
        <Text>Salutation:</Text>
        <Picker
          onValueChange={itemValue => this.setState({salutation: itemValue})}
          selectedValue={this.state.salutation}>
          <Picker.Item label="Mr" value="Mr" />
          <Picker.Item label="Mdm" value="Mdm" />
          <Picker.Item label="Ms" value="Ms" />
        </Picker>
        <Text>Name</Text>
        <TextInput
          style={{borderColor: 'black', borderWidth: 1}}
          onChangeText={text => this.setState({name: text})}
        />
        <Text>Email Address</Text>
        <TextInput
          style={{borderColor: 'black', borderWidth: 1}}
          onChangeText={text => this.setState({email: text})}
        />
        <Text>Designation:</Text>
        <Picker
          onValueChange={itemValue => this.setState({designation: itemValue})}
          selectedValue={this.state.designation}>
          <Picker.Item label="Program Chair" value="Program Chair" />
          <Picker.Item label="Asst Program Chair" value="Asst Program Chair" />
        </Picker>
        <TouchableHighlight onPress={() => Alert.alert(message)}>
          <Image source={require('./src/images/email.png')} />
        </TouchableHighlight>
      </View>
    );
  }
}
export default Lesson10quiz;
