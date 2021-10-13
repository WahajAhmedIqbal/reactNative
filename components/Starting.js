import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";



const Starting = (props) => {

  const alertbtn = () => {
    Alert.alert(
      "This is Alert",
      "Alert Content",
      [
        {
          text: "Cancel", onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    )
  }


  return (
    <View style={styles.container} >
      <Text style={styles.headignText}>
        Duolingo
      </Text>
      <Text style={styles.headignText2}>
        Login to your account
      </Text>

      <TextInput placeholderTextColor="#fff" textContentType="emailAddress" style={styles.logininput} placeholder="username or email" />
      <TextInput placeholderTextColor="#fff" secureTextEntry={true} style={styles.logininput} placeholder="Password" />

      <Text style={styles.forgotStyle}>
        Forgot your Password?
      </Text>


      <TouchableOpacity
        accessibilityLabel="Login Button"
        //  style={styles.loginbtn}
        onPress={props.onPress}
      >
        <Text onPress={alertbtn} style={styles.loginbtn}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.orLoginWith}>or log in with</Text>

      <View style={styles.loginWithBtn}>
        <TouchableOpacity style={styles.googlebox} accessibilityLabel="login with google">
          <Text style={styles.signinbtn}>
            Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookBox} accessibilityLabel="login with facebook">
          <Text style={styles.signinbtn2}>
            Facebook
          </Text>
        </TouchableOpacity>
      </View>


      <Text style={styles.privacyPolicy} >
        By using DuoLingo you agree to our <Text style={styles.privacyPolicyS}> Terms and Services </Text>
        and <Text style={styles.privacyPolicyS}>
          Privacy Policy
        </Text>
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    backgroundColor: "#091a2e",
    height: "100%",
    paddingLeft: 28,
    paddingRight: 28,
  },
  headignText: {
    marginTop: 50,
    fontSize: 50,
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  },
  headignText2: {
    marginTop: 50,
    fontSize: 40,
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  },
  logininput: {
    backgroundColor: "#3b4859",
    color: "#fff",
    marginTop: 15,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 15,
    paddingTop: 15,
    paddingBottom: 15,

  },
  forgotStyle: {
    color: "#fff",
    textAlign: "right",
    fontSize: 18,
    marginTop: 15
  },
  loginbtn: {
    marginTop: 20,
    borderRadius: 5,
    paddingTop: 15,
    paddingBottom: 15,
    color: "#fff",
    backgroundColor: '#fbb718',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: "700",
  },
  orLoginWith: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
    textAlign: "center"
  },
  loginWithBtn: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10
  },
  googlebox: {
    width: "50%",
    marginTop: 10,
    marginRight: 2
  },
  facebookBox: {
    width: "50%",
    marginTop: 10,
  }
  ,
  signinbtn: {
    textAlign: 'center',
    backgroundColor: "#3b4859",
    paddingTop: 18,
    paddingBottom: 18,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: "#fff",
    fontSize: 15

  },
  signinbtn2: {
    textAlign: 'center',
    backgroundColor: "#3b4859",
    paddingTop: 18,
    paddingBottom: 18,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    color: "#fff",
    fontSize: 15
  },
  privacyPolicy: {
    textAlign: "center",
    marginTop: 20,
    color: "#fff",
    fontSize: 12
  },
  privacyPolicyS: {
    fontWeight: "700",

  }


})

export default Starting