import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import searchpage from "../screens/searchpage";
import cm from "../screens/cm";
import indierock from "../screens/indierock";
import edm from "../screens/edm";
import electro from "../screens/electro";
import dubstep from "../screens/dubstep";
import jazz from "../screens/jazz";
import pop from "../screens/pop";
import rb from "../screens/rb";
import rock from "../screens/rock";
import techno from "../screens/techno";
import songspage from "../screens/songspage";
import favpage from "../screens/favpage";
import profilepage from "../screens/profilepage";
import settings from "../screens/settings";
import homepage from "../screens/homepage";
import moreartists from "../screens/moreartists";
import morerel from "../screens/morerel";
import morepod from "../screens/morepod";
import devotional from "../screens/devotional";
import top100 from "../screens/top100";
import lang from "../screens/lang";
import imagepicker from "../screens/imagepicker";
/*import splashscreen from "../screens/splashscreen";
import uporin from "../screens/uporin";
import login from "../screens/login";
import signup from "../components/signup";
import forgotpassword from "../screens/forgotpassword";*/
const Stack = createStackNavigator();
/*const LanuchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#0E0005"},
    headerTintColor: "#EC407A",
    headerBackTitle: "Back",
  }}>
    <Stack.Screen options={{headerShown: false}} name="splashscreen" component={splashscreen} />
    <Stack.Screen options={{headerShown: false}} name="uporin" component={uporin} />
    <Stack.Screen name="login" component={login} />
    <Stack.Screen name="signup" component={signup} />
    <Stack.Screen name="forgotpassword" component={forgotpassword} />
    
    </Stack.Navigator>
  );
}*/
const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#0E0005"},
    headerTintColor: "#EC407A",
    headerBackTitle: "Back",
    marginTop:5
  }}>
      <Stack.Screen options={{headerShown: false}} name="search" component={searchpage} />
      <Stack.Screen  name="cm" component={cm} />
      <Stack.Screen  name="dubstep" component={dubstep} />
      <Stack.Screen  name="edm" component={edm} />
      <Stack.Screen  name="electro" component={electro} />
      <Stack.Screen  name="indierock" component={indierock} />
      <Stack.Screen  name="jazz" component={jazz} />
      <Stack.Screen  name="pop" component={pop} />
      <Stack.Screen  name="rb" component={rb} />
      <Stack.Screen  name="techno" component={techno} />
      <Stack.Screen  name="rock" component={rock} />
    </Stack.Navigator>
  );
}
const FavStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#0E0005"},
      headerTintColor: "#EC407A",
      headerBackTitle: "Back",
      marginTop:5
    }}>
      <Stack.Screen options={{headerShown: false}} name="favpage" component={favpage} />
      <Stack.Screen  name="songspage" component={songspage} />
      </Stack.Navigator>
    );
  }

  const ProfileStackNavigator = () => {
    return (
      <Stack.Navigator  screenOptions={{ headerStyle: { backgroundColor: "#0E0005"},
      headerTintColor: "#EC407A",
      headerBackTitle: "Back",
      marginTop:5
    }}>
      <Stack.Screen options={{headerShown: false}} name="profilepage" component={profilepage} />
      <Stack.Screen name="settings" component={settings} />
      <Stack.Screen name="lang" component={lang} />
      <Stack.Screen name="imagepicker" component={imagepicker} />
      
      </Stack.Navigator>
    );
  }

  const HomeStackNavigator = () => {
    return (
      <Stack.Navigator  screenOptions={{ headerStyle: { backgroundColor: "#0E0005"},
      headerTintColor: "#EC407A",
      headerBackTitle: "Back",
      marginTop:5
    }}>
      <Stack.Screen options={{headerShown: false}} name="homepage" component={homepage} />
      <Stack.Screen  name="songspage" component={songspage} />
      <Stack.Screen  name="moreartists" component={moreartists} />
      <Stack.Screen  name="morerel" component={morerel} />
      <Stack.Screen  name="devotional" component={devotional} />
      <Stack.Screen  name="morepod" component={morepod} />
      <Stack.Screen  name="top100" component={top100} />
      </Stack.Navigator>
    );
  }

export { SearchStackNavigator,FavStackNavigator,ProfileStackNavigator,HomeStackNavigator};

